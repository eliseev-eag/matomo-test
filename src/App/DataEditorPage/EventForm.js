import React from 'react';
import { useSelector } from 'react-redux';
import { Field, Form as FinalForm } from 'react-final-form';
import { Button, DatePicker, Drawer, Form, Input, Row, Select } from 'antd';
import { identity } from 'lodash-es';
import LazySelectSearch from 'components/LazySelectSearch';
import {
  eventTypesSelector,
  personsSelector,
  toponymsSelector,
} from 'selectors';

const dateFormat = 'DD.MM.YYYY';

const EventForm = ({ event, onSubmit, visible, onClose, title }) => {
  const eventTypes = useSelector(eventTypesSelector);
  const toponyms = useSelector(toponymsSelector);
  const persons = useSelector(personsSelector);

  return (
    <Drawer
      title={title}
      visible={visible}
      onClose={onClose}
      placement="right"
      width={450}
      closable
      destroyOnClose
    >
      <FinalForm
        initialValues={event}
        onSubmit={values => {
          onSubmit({ id: event ? event.id : null, ...values });
        }}
      >
        {({ handleSubmit }) => (
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Row>
              <Field name="name" allowNull format={identity} parse={identity}>
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Название">
                    <Input.TextArea
                      rows={4}
                      placeholder="Название"
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Item>
                )}
              </Field>
            </Row>
            <Row>
              <Field
                name="startDate"
                allowNull
                format={identity}
                parse={identity}
              >
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Дата начала">
                    <DatePicker
                      format={dateFormat}
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Item>
                )}
              </Field>
            </Row>
            <Row>
              <Field
                name="endDate"
                allowNull
                format={identity}
                parse={identity}
              >
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Дата окончания">
                    <DatePicker
                      format={dateFormat}
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Item>
                )}
              </Field>
            </Row>
            <Row>
              <Field name="type" allowNull format={identity} parse={identity}>
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Тип">
                    <Select
                      placeholder="Выберите тип события"
                      value={value}
                      onChange={onChange}
                    >
                      {eventTypes.map(eventType => (
                        <Select.Option key={eventType.id} value={eventType.id}>
                          {eventType.type}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              </Field>
            </Row>
            <Row>
              <Field
                name="toponyms"
                allowNull
                format={identity}
                parse={identity}
              >
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Топонимы">
                    <LazySelectSearch
                      allOptions={toponyms}
                      placeholder="Выберите топонимы"
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Item>
                )}
              </Field>
            </Row>
            <Row>
              <Field
                name="persons"
                allowNull
                format={identity}
                parse={identity}
              >
                {({ input: { value, onChange } }) => (
                  <Form.Item label="Действующие лица">
                    <LazySelectSearch
                      allOptions={persons}
                      nameSelector={p => `${p.surname} ${p.name} ${p.patron}`}
                      placeholder="Выберите действующих лиц"
                      value={value}
                      onChange={onChange}
                    />
                  </Form.Item>
                )}
              </Field>
            </Row>
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
              }}
            >
              <Button htmlType="submit" type="primary">
                Сохранить
              </Button>
            </div>
          </Form>
        )}
      </FinalForm>
    </Drawer>
  );
};

export default EventForm;
