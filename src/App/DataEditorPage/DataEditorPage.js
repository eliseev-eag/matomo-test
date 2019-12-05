import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Layout, PageHeader } from "antd";
import { DownloadButton } from "./DownloadButton";
import { EditorTable } from "./EditorTable";
import { EventForm } from "./EventForm";
import { editEvent, deleteEvent } from "../../ducks";
import moment from "moment";

const DataEditorPage = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState(null);
  const onSelect = useCallback(
    value =>
      setEvent({
        ...value,
        startDate: moment(value.startDate),
        endDate: moment(value.endDate),
        type: value.type.id,
        toponyms: value.toponyms.map(toponym => toponym.id),
        persons: value.persons.map(person => person.id)
      }),
    []
  );

  const closeForm = useCallback(() => setEvent(null), []);

  const onSave = useCallback(
    value => {
      dispatch(
        editEvent({
          ...value,
          endDate: value.endDate.toDate(),
          startDate: value.startDate.toDate()
        })
      );
      closeForm();
    },
    [dispatch, closeForm]
  );

  const onDelete = useCallback(
    value => {
      dispatch(deleteEvent(value));
    },
    [dispatch]
  );

  return (
    <Layout>
      <PageHeader
        ghost={false}
        title="Редактирование данных"
        extra={<DownloadButton />}
      />
      <Layout.Content>
        <EditorTable onSelect={onSelect} deleteRow={onDelete} />
        <EventForm
          event={event}
          visible={event !== null}
          onClose={closeForm}
          onSubmit={onSave}
        />
      </Layout.Content>
    </Layout>
  );
};

export { DataEditorPage };
