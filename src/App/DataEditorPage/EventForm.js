import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash-es';
import { Form, Input, Button, Row, Col, DatePicker, Select } from 'antd';

const dateFormat = 'DD.MM.YYYY';

class EventForm extends PureComponent {
    state = {
        toponyms: this.props.toponyms.slice(0, 5)
    }

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
            rules: [{ type: 'array' }]
        },
        toponyms: {
            rules: [{ type: 'array' }]
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.event !== prevProps.event) {
            const fieldsValues = pick(this.props.event, Object.keys(this.rules));
            this.props.form.setFieldsValue(fieldsValues);
            this.setState({
                toponyms: [
                    ...this.props.toponyms.slice(0, 5),
                    ...this.props.event.toponyms.map(
                        toponymId => this.props.toponyms.find(event => event.id === toponymId
                        ))
                ]
            })
        }
        if (this.props.toponyms !== prevProps.toponyms) {
            this.setState({ toponyms: this.props.toponyms.slice(0, 5) })
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
    }

    onToponymsSearch = value => {
        const toponyms = this.props.toponyms.filter(
            toponym => toponym.name.toLowerCase().includes(value.toLocaleLowerCase()
            ));
        this.setState({ toponyms });
    }

    render() {
        const { form: { getFieldDecorator }, onClick, eventTypes, persons, toponyms } = this.props;

        return (
            <div>
                <Row type="flex" justify="end">
                    <Col span={3}>
                        <Button onClick={onClick} shape="circle" icon="close" />
                    </Col>
                </Row>
                <Form layout="vertical" onSubmit={this.onSubmit}>
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
                                <DatePicker format={dateFormat} />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Дата окончания">
                            {getFieldDecorator('endDate', this.rules['endDate'])(
                                <DatePicker format={dateFormat} />
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Тип">
                            {getFieldDecorator('type', this.rules['type'])(
                                <Select placeholder="Выберите тип события" >
                                    {eventTypes.map(eventType =>
                                        <Select.Option key={eventType.id} value={eventType.id}>{eventType.type}</Select.Option>
                                    )}
                                </Select>
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Топонимы">
                            {getFieldDecorator('toponyms', this.rules['toponyms'])(
                                <Select mode="multiple" placeholder="Выберите топонимы" filterOption={false}
                                    onSearch={this.onToponymsSearch}
                                >
                                    {this.state.toponyms.map(toponym =>
                                        <Select.Option key={toponym.id} value={toponym.id}>{toponym.name}</Select.Option>
                                    )}
                                </Select>
                            )}
                        </Form.Item>
                    </Row>
                    <Row>
                        <Form.Item label="Действующие лица">
                            {getFieldDecorator('persons', this.rules['persons'])(
                                <Select mode="multiple" placeholder="Выберите топонимы" >
                                    {persons.map(person =>
                                        <Select.Option key={person.id} value={person.id}>
                                            {`${person.surname} ${person.name} ${person.patron}`}
                                        </Select.Option>
                                    )}
                                </Select>
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

const ConnectedWrappedEventForm = connect(
    state => ({
        eventTypes: state.eventTypes,
        toponyms: state.toponyms,
        persons: state.persons
    })
)(WrappedEventForm);

export { ConnectedWrappedEventForm as EventForm };