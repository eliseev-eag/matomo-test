import React from 'react';
import { useSelector } from 'react-redux';
import { Form as FinalForm } from 'react-final-form';
import { Button, Drawer, Form, Row } from 'antd';
import { DateBox, LazySelectSearch, SelectBox, TextArea } from 'components';
import {
  eventTypesSelector,
  personsSelector,
  toponymsSelector,
} from 'selectors';
import {
  composeValidators,
  dateLessThanOrEqual,
  dateMoreThanOrEqual,
  required,
} from './validators';

const typeNameFactory = it => it.type;

const patronNameFactory = it => `${it.surname} ${it.name} ${it.patron}`;

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
              <TextArea
                name="name"
                label="Название"
                rows={4}
                placeholder="Название"
                validate={required}
              />
            </Row>
            <Row>
              <DateBox
                name="startDate"
                label="Дата начала"
                validate={composeValidators(
                  required,
                  dateLessThanOrEqual('endDate', 'Дата окончания'),
                )}
              />
            </Row>
            <Row>
              <DateBox
                name="endDate"
                label="Дата окончания"
                validate={composeValidators(
                  required,
                  dateMoreThanOrEqual('startDate', 'Дата начала'),
                )}
              />
            </Row>
            <Row>
              <SelectBox
                name="type"
                label="Тип"
                options={eventTypes}
                optionNameFactory={typeNameFactory}
                validate={required}
              />
            </Row>
            <Row>
              <LazySelectSearch
                name="toponyms"
                label="Топонимы"
                allOptions={toponyms}
                placeholder="Выберите топонимы"
              />
            </Row>
            <Row>
              <LazySelectSearch
                name="persons"
                label="Действующие лица"
                allOptions={persons}
                optionNameFactory={patronNameFactory}
                placeholder="Выберите действующих лиц"
              />
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
