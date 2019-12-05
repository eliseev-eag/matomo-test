import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Table, Button } from "antd";
import {
  eventTypesSelector,
  eventsSelector,
  personsSelector,
  toponymsSelector
} from "../../selectors";

const dateFormatter = date =>
  date.toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
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

const EditorTable = ({ onSelect, deleteRow }) => {
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
              persons.find(person => person.id === personId)
            )
          : [],
        toponyms: event.toponyms
          ? event.toponyms.map(toponymId =>
              toponyms.find(toponym => toponym.id === toponymId)
            )
          : []
      })),
    [eventTypes, persons, toponyms, events]
  );

  const onRow = useCallback(
    record => ({
      onClick: onSelect ? () => onSelect(record) : undefined
    }),
    [onSelect]
  );

  const renderDeleteButton = (_, record) => (
    <a
      onClick={event => {
        event.stopPropagation();
        deleteRow(record);
      }}
      ghost
    >
      Удалить
    </a>
  );

  return (
    <Table
      dataSource={eventsWithNestedData}
      rowKey={event => event.id}
      onRow={onRow}
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
          text: eventType.type
        }))}
        onFilter={(value, record) => record.type.id == value}
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

export { EditorTable };
