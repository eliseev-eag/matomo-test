import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { DownloadButton } from './DownloadButton';
import { EditorTable } from './EditorTable';
import { EventForm } from './EventForm';
import { saveEvent } from '../../ducks';
import moment from 'moment';

class DataEditorPage extends Component {
    static ROUTE = "editor";

    state = {
        event: null
    };

    onSelect = event => this.setState({
        event: {
            ...event,
            startDate: moment(event.startDate),
            endDate: moment(event.endDate),
            type: event.type.id,
            toponyms: event.toponyms.map(toponym => toponym.id),
            persons: event.persons.map(person => person.id)
        }
    });

    closeForm = () => this.setState({ event: null });

    onSave = value => {
        const changedValue = { ...this.state.event, ...value };
        this.props.saveEvent(changedValue);
        this.closeForm();
    }

    render() {
        const { event } = this.state;

        return (
            <div>
                <Row>
                    <DownloadButton />
                </Row>
                <Row>
                    <Col span={event ? 6 : 0}>
                        <EventForm event={event} onClick={this.closeForm} onSubmit={this.onSave} />
                    </Col>
                    <Col span={event ? 18 : 24}>
                        <EditorTable onSelect={this.onSelect} />
                    </Col>
                </Row>
            </div>
        );
    }
}

const connectedDataEditorPage = connect(
    null,
    dispatch => bindActionCreators({ saveEvent }, dispatch)
)(DataEditorPage);

export { connectedDataEditorPage as DataEditorPage };