import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, PageHeader } from 'antd';
import moment from 'moment';
import DownloadButton from './DownloadButton';
import EditorTable from './EditorTable';
import EventForm from './EventForm';
import { addEvent, deleteEvent, editEvent } from '../../ducks';

const DataEditorPage = () => {
  const dispatch = useDispatch();
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [event, setEvent] = useState(null);
  const onSelect = useCallback(
    value =>
      setEvent({
        ...value,
        startDate: moment(value.startDate),
        endDate: moment(value.endDate),
        type: value.type.id,
        toponyms: value.toponyms.map(toponym => toponym.id),
        persons: value.persons.map(person => person.id),
      }),
    [],
  );

  const closeForm = useCallback(() => {
    if (isAddFormVisible) {
      setAddFormVisible(false);
    } else {
      setEvent(null);
    }
  }, [isAddFormVisible]);

  const changeEvent = useCallback(
    value => {
      dispatch(
        editEvent({
          ...value,
          endDate: value.endDate.toDate(),
          startDate: value.startDate.toDate(),
        }),
      );
      closeForm();
    },
    [dispatch, closeForm],
  );

  const onDelete = useCallback(
    value => {
      dispatch(deleteEvent(value));
    },
    [dispatch],
  );

  const createEvent = useCallback(
    value => {
      dispatch(
        addEvent({
          ...value,
          endDate: value.endDate.toDate(),
          startDate: value.startDate.toDate(),
        }),
      );
      closeForm();
    },
    [closeForm, dispatch],
  );

  const showAddForm = useCallback(() => {
    setAddFormVisible(true);
  }, []);

  return (
    <Layout>
      <PageHeader
        ghost={false}
        title="Редактирование данных"
        extra={<DownloadButton />}
      />
      <Layout.Content>
        <EditorTable
          onAdd={showAddForm}
          onSelect={onSelect}
          deleteRow={onDelete}
        />
        <EventForm
          event={event}
          visible={event !== null || isAddFormVisible}
          onClose={closeForm}
          onSubmit={isAddFormVisible ? createEvent : changeEvent}
        />
      </Layout.Content>
    </Layout>
  );
};

export default DataEditorPage;
