import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from 'react-visjs-timeline';
import { changeTimelineRange } from '../../ducks';

const options = {
    align: 'center',
    minHeight: '400px',
    maxHeight: '400px',
    type: 'range',
    tooltip: {
        followMouse: true,
        overflowMethod: 'cap'
    },
    snap: null,
    orientation: { axis: 'both' },
    zoomMin: 1000 * 60 * 60 * 24 * 5,
};

class EventsTimeline extends PureComponent {
    state = {
        events: [],
        eventTypes: []
    }

    static getDerivedStateFromProps(props) {
        const { events, eventTypes } = props;

        const stateEventTypes = eventTypes.map(group => ({
            id: group.id,
            content: group.type
        }));

        const stateEvents = events.slice(0, 10)
            .map(event => ({
                start: event.startDate,
                end: event.endDate,
                content: event.name,
                duration: event.endDate - event.startDate,
                group: event.type,
                type: event.endDate - event.startDate <= (1000 * 60 * 60 * 24) ? 'point' : 'range',
            }));

        return ({ events: stateEvents, eventTypes: stateEventTypes });
    }

    rangechangedHandler = ({ start, end }) => {
        this.props.actions.changeTimelineRange({ start, end });
    }

    render() {
        const { events, eventTypes } = this.state;

        return (
            <div>
                {events && events.length > 0 &&
                    <Timeline options={options}
                        items={events}
                        groups={eventTypes}
                        rangechangedHandler={this.rangechangedHandler} />
                }
            </div>
        );
    }
}

const connectedTimeline = connect(
    state => ({
        events: state.eventsData.events,
        eventTypes: state.eventsData.eventTypes
    }),
    dispatch => ({ actions: bindActionCreators({ changeTimelineRange }, dispatch) })
)(EventsTimeline);

export { connectedTimeline as Timeline };
