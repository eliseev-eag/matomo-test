import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: {}
  }

  async getData() {
    const data = await import('./events.json');
    // debugger;
    // const eventTypes = data.events.reduce((set, event) => set.add(event.event_type), new Set());
    // data.eventTypes = Array.from(eventTypes).map((eventType, index) => ({
    //   id: index,
    //   type: eventType
    // }));
    // data.events = data.events.map(event => ({
    //   toponyms: event.toponyms,
    //   persons: event.persons,
    //   name: event.name,
    //   id: event.event_id,
    //   parentEventId: event.parent_event_id,
    //   startDate: event.start_date,
    //   endDate: event.end_date,
    //   type: data.eventTypes.find(p => p.type === event.event_type).id,
    // }));
    // data.toponyms = data.toponyms.map(toponym => ({
    //   id: toponym.toponym_id,
    //   name: toponym.toponym_name
    // }))
    // data.persons = data.persons.map(person => ({
    //   id: person.person_id,
    //   name: person.person_name,
    //   patron: person.patron,
    //   surname: person.surname
    // }))
    return data;
  }

  async componentDidMount() {
    const data = await this.getData();
    this.setState({ data });
  }

  render() {
    const { data: { eventTypes, events, persons, toponyms } } = this.state;

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

export default App;
