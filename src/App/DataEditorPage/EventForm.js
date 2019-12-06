import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { pick } from "lodash-es";
import { Form, Input, Row, DatePicker, Select, Drawer, Button } from "antd";
import { LazySelectSearch } from "../../components/LazySelectSearch";
import {
  eventTypesSelector,
  toponymsSelector,
  personsSelector
} from "../../selectors";

const dateFormat = "DD.MM.YYYY";

const rules = {
  name: {
    rules: [{ required: true }]
  },
  startDate: {
    rules: [{ type: "object", required: true, message: "Please select time!" }]
  },
  endDate: {
    rules: [{ type: "object", required: true, message: "Please select time!" }]
  },
  type: {
    rules: [{ required: true }]
  },
  persons: {
    rules: [{ type: "array" }]
  },
  toponyms: {
    rules: [{ type: "array" }]
  }
};

const EventForm = ({
  event,
  onSubmit,
  form: { getFieldDecorator, setFieldsValue, validateFields },
  visible,
  onClose
}) => {
  const eventTypes = useSelector(eventTypesSelector);
  const toponyms = useSelector(toponymsSelector);
  const persons = useSelector(personsSelector);

  const onSubmitHandler = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onSubmit({ id: event.id, ...values });
      }
    });
  };

  useEffect(() => {
    setFieldsValue(pick(event, Object.keys(rules)));
  }, [event, setFieldsValue]);

  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      placement="left"
      width={450}
      closable
    >
      <Form layout="vertical">
        <Row>
          <Form.Item label="Название">
            {getFieldDecorator(
              "name",
              rules["name"]
            )(<Input placeholder="Название" />)}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Дата начала">
            {getFieldDecorator(
              "startDate",
              rules["startDate"]
            )(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Дата окончания">
            {getFieldDecorator(
              "endDate",
              rules["endDate"]
            )(<DatePicker format={dateFormat} />)}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Тип">
            {getFieldDecorator(
              "type",
              rules["type"]
            )(
              <Select placeholder="Выберите тип события">
                {eventTypes.map(eventType => (
                  <Select.Option key={eventType.id} value={eventType.id}>
                    {eventType.type}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Топонимы">
            {getFieldDecorator(
              "toponyms",
              rules["toponyms"]
            )(
              <LazySelectSearch
                allOptions={toponyms}
                placeholder="Выберите топонимы"
              />
            )}
          </Form.Item>
        </Row>
        <Row>
          <Form.Item label="Действующие лица">
            {getFieldDecorator(
              "persons",
              rules["persons"]
            )(
              <LazySelectSearch
                allOptions={persons}
                nameSelector={p => `${p.surname} ${p.name} ${p.patron}`}
                placeholder="Выберите действующих лиц"
              />
            )}
          </Form.Item>
        </Row>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "100%",
            borderTop: "1px solid #e9e9e9",
            padding: "10px 16px",
            background: "#fff",
            textAlign: "right"
          }}
        >
          <Button onClick={onSubmitHandler} type="primary">
            Сохранить
          </Button>
        </div>
      </Form>
    </Drawer>
  );
};

const WrappedEventForm = Form.create()(EventForm);

export { WrappedEventForm as EventForm };
