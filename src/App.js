import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from 'react-visjs-timeline';
import { loadEvents } from './ducks';

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
  // max: new Date(),
  // min: new Date(100, 0, 0),
  // start: new Date(),
  // end: new Date(100, 0, 0),
};

class App extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    const { events, eventTypes } = this.props;

    return (
      <div className="App" >
        {events && events.length > 0 &&
          <Timeline options={options} items={events} groups={eventTypes} />
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    events: state.eventsData.events.filter(event => event.type !== 1).map(event => ({
      start: new Date(event.startDate),
      end: new Date(event.endDate),
      content: event.name,
      duration: new Date(event.endDate) - new Date(event.startDate),
      group: event.type,
      type: new Date(event.endDate) - new Date(event.startDate) <= (1000 * 60 * 60 * 24) ? 'point' : 'range',
      title: `
      <h3 class="eventname">${event.name}</h3>
      <hr>
      <div class="dates">
          <div> ${new Date(event.startDate).toLocaleString()} - ${new Date(event.endDate).toLocaleString()}</div>
          <div><b>Продолжительность: </b>${Math.floor((new Date(event.endDate) - new Date(event.startDate)) / (1000 * 60 * 60 * 24))} дн.</div>
      </div>`
    })),
    eventTypes: state.eventsData.eventTypes.map(group => ({
      id: group.id,
      content: group.type
    }))
  }), dispatch => bindActionCreators({ loadEvents }, dispatch))(App);
