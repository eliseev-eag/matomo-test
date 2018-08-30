import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { pick } from "lodash-es";
import { Form, Input, Row, DatePicker, Select, Modal } from "antd";
import { LazySelectSearch } from "../../components/LazySelectSearch";

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

class EventForm extends PureComponent {
  componentDidUpdate(prevProps) {
    const { form, event } = this.props;
    if (event !== prevProps.event) {
      const fieldsValues = pick(event, Object.keys(rules));
      form.setFieldsValue(fieldsValues);
    }
  }

  onSubmit = event => {
    const { form, onSubmit } = this.props;
    event.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      visible,
      onClose,
      eventTypes,
      persons,
      toponyms
    } = this.props;

    return (
      <Modal
        visible={visible}
        okText="Сохранить"
        onCancel={onClose}
        onOk={this.onSubmit}
      >
        <Form layout="vertical">
          <Row>
            <Form.Item label="Название">
              {getFieldDecorator("name", rules["name"])(
                <Input placeholder="Название" />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Дата начала">
              {getFieldDecorator("startDate", rules["startDate"])(
                <DatePicker format={dateFormat} />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Дата окончания">
              {getFieldDecorator("endDate", rules["endDate"])(
                <DatePicker format={dateFormat} />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Тип">
              {getFieldDecorator("type", rules["type"])(
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
              {getFieldDecorator("toponyms", rules["toponyms"])(
                <LazySelectSearch
                  allOptions={toponyms}
                  placeholder="Выберите топонимы"
                />
              )}
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="Действующие лица">
              {getFieldDecorator("persons", rules["persons"])(
                <LazySelectSearch
                  allOptions={persons}
                  nameSelector={p => `${p.surname} ${p.name} ${p.patron}`}
                  placeholder="Выберите действующих лиц"
                />
              )}
            </Form.Item>
          </Row>
        </Form>
      </Modal>
    );
  }
}

const WrappedEventForm = Form.create()(EventForm);

const ConnectedWrappedEventForm = connect(state => ({
  eventTypes: state.eventTypes,
  toponyms: state.toponyms,
  persons: state.persons
}))(WrappedEventForm);

export { ConnectedWrappedEventForm as EventForm };
