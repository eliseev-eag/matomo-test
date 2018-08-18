import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timeline from 'react-visjs-timeline';
import { loadEvents } from './ducks';
import logo from './logo.svg';
import './App.css';

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
  dataAttributes: ['id'],
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {events && events.length > 0 &&
          <Timeline options={options} items={events} groups={eventTypes} />
        }
        {/* {eventTypes &&
          <React.Fragment>
            <h1>Event types:</h1>
            <ol>
              {eventTypes.map(eventType => <li key={eventType.id}>{eventType.type}</li>)}
            </ol>
          </React.Fragment>
        }
        {toponyms &&
          <React.Fragment>
            <h1>Toponyms:</h1>
            <ol>
              {toponyms.map(toponym => <li key={toponym.id}>{toponym.name}</li>)}
            </ol>
          </React.Fragment>
        }
        {persons &&
          <React.Fragment>
            <h1>Persons:</h1>
            <ol>
              {persons.map(person => <li key={person.id}>{`${person.surname} ${person.name} ${person.patron}`}</li>)}
            </ol>
          </React.Fragment>
        }
        {events && eventTypes &&
          <React.Fragment>
            <h1>Events:</h1>
            <ol>
              {events.map(event => <li key={event.id}>{`${event.name} ${event.startDate} - ${event.endDate} ${eventTypes.find(p => p.id === event.type).type}`}</li>)}
            </ol>
          </React.Fragment>
        } */}
      </div>
    );
  }
}

export default connect(
  state => ({
    events: state.eventsData.events.slice(0, 150).map(event => ({
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
