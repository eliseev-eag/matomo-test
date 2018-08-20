import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Table } from 'antd';

const dateFormatter = date => date.toLocaleString();
const typeFormatter = type => type.type

const personsFormatter = persons => persons
    .map(person => `${person.surname} ${person.name} ${person.patron}`)
    .join()

const toponymsFormatter = toponyms => toponyms.map(toponym => toponym.name).join()

class EditorTable extends PureComponent {
    onRow = record => ({
        onClick: !this.props.onSelect ? undefined :
            () => this.props.onSelect(record)
    });

    render() {
        const { events } = this.props;

        return (
            <Table
                dataSource={events}
                rowKey={event => event.id}
                onRow={this.onRow}>
                <Table.Column title="Name" dataIndex="name" width="40%" />
                <Table.Column
                    title="Start date"
                    dataIndex="startDate"
                    width="7.5%"
                    render={dateFormatter} />
                <Table.Column
                    title="End date"
                    dataIndex="endDate"
                    width="7.5%"
                    render={dateFormatter} />
                <Table.Column
                    title="Type"
                    dataIndex="type"
                    width="15%"
                    render={typeFormatter} />
                <Table.Column
                    title="Persons"
                    dataIndex="persons"
                    width="15%"
                    render={personsFormatter}
                />
                <Table.Column
                    title="Toponyms"
                    dataIndex="toponyms"
                    width="15%"
                    render={toponymsFormatter}
                />
            </Table>
        );
    }
}


const toponymsSelector = state => state.eventsData.toponyms;

const personsSelector = state => state.eventsData.persons;

const eventTypesSelector = state => state.eventsData.eventTypes;

const eventsSelector = state => state.eventsData.events;

const eventsResultSelector = createSelector(
    toponymsSelector,
    personsSelector,
    eventTypesSelector,
    eventsSelector,
    (toponyms, persons, eventTypes, events) =>
        events.map(event => ({
            ...event,
            type: eventTypes.find(type => type.id === event.type),
            persons: event.persons ?
                event.persons.map(personId => persons.find(person => person.id === personId))
                : [],
            toponyms: event.toponyms ?
                event.toponyms.map(toponymId => toponyms.find(toponym => toponym.id === toponymId))
                : []
        }))
)

const connectedEditorTable = connect(state => ({
    toponyms: toponymsSelector(state),
    persons: personsSelector(state),
    eventTypes: eventTypesSelector(state),
    events: eventsResultSelector(state)
}))(EditorTable)

export { connectedEditorTable as EditorTable };