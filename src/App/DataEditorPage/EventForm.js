import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, DatePicker } from 'antd';

class EventForm extends Component {
    rules = {
        name: {
            rules: [{ required: true }],
        },
        startDate: {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        },
        endDate: {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        },
        type: {
            rules: [{ required: true }],
        },
        persons: {
            rules: []
        },
        toponyms: {
            rules: []
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.event !== prevProps.event) {
            this.props.form.setFieldsValue(this.props.event)
        }
    }
    render() {
        const { form: { getFieldDecorator }, onClick } = this.props;

        return (
            <div>
                <Row type="flex" justify="end">
                    <Col span={3}>
                        <Button onClick={onClick} shape="circle" icon="close" />
                    </Col>
                </Row>
                <Form layout="vertical">
                    <Row>
                        <Form.Item label="Название">
                            {getFieldDecorator('name', this.rules['name'])(
                                <Input placeholder="Название" />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Дата начала">
                            {getFieldDecorator('startDate', this.rules['startDate'])(
                                <DatePicker />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Дата окончания">
                            {getFieldDecorator('endDate', this.rules['endDate'])(
                                <DatePicker />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Тип">
                            {getFieldDecorator('type', this.rules['type'])(
                                <Input placeholder="Название" />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Топонимы">
                            {getFieldDecorator('toponyms', this.rules['toponyms'])(
                                <Input placeholder="Название" />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Действующие лица">
                            {getFieldDecorator('persons', this.rules['persons'])(
                                <Input placeholder="Название" />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Button type="primary" htmlType="submit">Сохранить</Button>
                    </Row>
                </Form>
            </div>
        );
    }
}

const WrappedEventForm = Form.create()(EventForm);

export { WrappedEventForm as EventForm };