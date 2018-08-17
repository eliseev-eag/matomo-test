import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadEvents } from './ducks';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    const { events: { eventTypes, events, persons, toponyms } } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {eventTypes &&
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
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    events: state.eventsData
  }), dispatch => bindActionCreators({ loadEvents }, dispatch))(App);
