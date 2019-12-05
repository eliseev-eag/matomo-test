import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Layout, Row } from "antd";
import { DownloadButton } from "./DownloadButton";
import { EditorTable } from "./EditorTable";
import { EventForm } from "./EventForm";
import { editEvent, deleteEvent } from "../../ducks";
import moment from "moment";

class DataEditorPage extends Component {
  state = {
    event: null
  };

  onSelect = event =>
    this.setState({
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
    const changedValue = {
      ...this.state.event,
      ...value,
      endDate: value.endDate.toDate(),
      startDate: value.startDate.toDate()
    };
    this.props.editEvent(changedValue);
    this.closeForm();
  };

  render() {
    const { event } = this.state;

    return (
      <Layout>
        <Layout.Header style={{ background: "#fff", textAlign: "center" }}>
          Редактирование данных
        </Layout.Header>
        <Layout.Content>
          <div>
            <Row>
              <DownloadButton />
            </Row>
            <Row>
              <EditorTable
                onSelect={this.onSelect}
                deleteRow={this.props.deleteEvent}
              />
            </Row>
            <EventForm
              event={event}
              visible={event !== null}
              onClose={this.closeForm}
              onSubmit={this.onSave}
            />
          </div>
        </Layout.Content>
      </Layout>
    );
  }
}

const connectedDataEditorPage = connect(null, dispatch =>
  bindActionCreators({ editEvent, deleteEvent }, dispatch)
)(DataEditorPage);

export { connectedDataEditorPage as DataEditorPage };
