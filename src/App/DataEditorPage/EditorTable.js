import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Button, Popconfirm, Table } from 'antd';
import {
  eventsSelector,
  eventTypesSelector,
  personsSelector,
  toponymsSelector,
} from '../../selectors';

const dateFormatter = date =>
  date.toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
const typeFormatter = type => type.type;
const personsFormatter = persons =>
  persons
    .map(person => `${person.surname} ${person.name} ${person.patron}`)
    .join();
const toponymsFormatter = toponyms =>
  toponyms.map(toponym => toponym.name).join();

const startDateSorter = (a, b) => a.startDate - b.startDate;

const endDateSorter = (a, b) => a.endDate - b.endDate;

const EditorTable = ({ onAdd, onSelect, deleteRow }) => {
  const eventTypes = useSelector(eventTypesSelector);
  const persons = useSelector(personsSelector);
  const toponyms = useSelector(toponymsSelector);
  const events = useSelector(eventsSelector);

  const eventsWithNestedData = useMemo(
    () =>
      events.map(event => ({
        ...event,
        type: eventTypes.find(type => type.id === event.type),
        persons: event.persons
          ? event.persons.map(personId =>
              persons.find(person => person.id === personId),
            )
          : [],
        toponyms: event.toponyms
          ? event.toponyms.map(toponymId =>
              toponyms.find(toponym => toponym.id === toponymId),
            )
          : [],
      })),
    [eventTypes, persons, toponyms, events],
  );

  const onRow = useCallback(
    record => ({
      onClick: onSelect ? () => onSelect(record) : undefined,
    }),
    [onSelect],
  );

  const renderDeleteButton = (_, record) => (
    <Popconfirm
      title="Вы уверены?"
      onConfirm={event => {
        event.stopPropagation();
        deleteRow(record);
      }}
      onCancel={event => {
        event.stopPropagation();
      }}
      okText="Да"
      cancelText="Нет"
    >
      <Button
        type="link"
        onClick={event => {
          event.stopPropagation();
        }}
      >
        Удалить
      </Button>
    </Popconfirm>
  );

  const renderTitle = useCallback(
    () => (
      <Button type="primary" onClick={onAdd}>
        Добавить
      </Button>
    ),
    [onAdd],
  );

  return (
    <Table
      dataSource={eventsWithNestedData}
      rowKey={event => event.id}
      onRow={onRow}
      title={renderTitle}
    >
      <Table.Column title="Название" dataIndex="name" width="35%" />
      <Table.Column
        title="Дата начала"
        dataIndex="startDate"
        width="10%"
        sorter={startDateSorter}
        render={dateFormatter}
      />
      <Table.Column
        title="Дата окончания"
        dataIndex="endDate"
        width="10%"
        sorter={endDateSorter}
        render={dateFormatter}
      />
      <Table.Column
        title="Тип"
        dataIndex="type"
        width="10%"
        filters={eventTypes.map(eventType => ({
          value: eventType.id,
          text: eventType.type,
        }))}
        onFilter={(value, record) => record.type.id === value}
        render={typeFormatter}
      />
      <Table.Column
        title="Действующие лица"
        dataIndex="persons"
        width="15%"
        render={personsFormatter}
      />
      <Table.Column
        title="Топонимы"
        dataIndex="toponyms"
        width="15%"
        render={toponymsFormatter}
      />
      <Table.Column title="" key="delete" render={renderDeleteButton} />
    </Table>
  );
};

export default EditorTable;
