import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const dateFormatter = date => date.toLocaleString();

class EditorTable extends PureComponent {
    typeFormatter = type => {
        const { eventTypes } = this.props.eventsData;
        return (eventTypes.find(eventType => eventType.id === type).type);
    }

    personsFormatter = items => {
        const { persons } = this.props.eventsData;
        return (items && items.map(personId => persons.find(person => person.id === personId))
            .map(person => `${person.surname} ${person.name} ${person.patron}`)
            .join())
    }
    toponymsFormatter = items => {
        const { toponyms } = this.props.eventsData;
        return (items &&
            items.map(toponymId => toponyms.find(toponym => toponym.id === toponymId).name)
                .join());
    }

    onRow = record => ({
        onClick: !this.props.onSelect ? undefined :
            () => this.props.onSelect(record)
    });

    render() {
        const { events } = this.props.eventsData;

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
                    render={this.typeFormatter} />
                <Table.Column
                    title="Persons"
                    dataIndex="persons"
                    width="15%"
                    render={this.personsFormatter}
                />
                <Table.Column
                    title="Toponyms"
                    dataIndex="toponyms"
                    width="15%"
                    render={this.toponymsFormatter}
                />
            </Table>
        );
    }
}

const connectedEditorTable = connect(state => ({
    eventsData: state.eventsData
}))(EditorTable)

export { connectedEditorTable as EditorTable };