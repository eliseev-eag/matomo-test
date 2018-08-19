import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import Timeline from 'react-visjs-timeline';
import * as actions from './ducks';
import DownloadButton from './DownloadButton';

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

class App extends PureComponent {
  state = {
    events: [],
    eventTypes: []
  }

  static getDerivedStateFromProps(props) {
    const { events, eventTypes } = props;
    debugger;
    const stateEventTypes = eventTypes.map(group => ({
      id: group.id,
      content: group.type
    }));

    const stateEvents = events.slice(0, 10)
      // .filter(event => (event.endDate <= state.timeline.end || event.startDate >= state.timeline.start))
      .map(event => ({
        start: event.startDate,
        end: event.endDate,
        content: event.name,
        duration: event.endDate - event.startDate,
        group: event.type,
        type: event.endDate - event.startDate <= (1000 * 60 * 60 * 24) ? 'point' : 'range',
        title: `
    <h3 class="eventname">${event.name}</h3>
    <hr>
    <div class="dates">
        <div> ${new Date(event.startDate).toLocaleString()} - ${new Date(event.endDate).toLocaleString()}</div>
        <div><b>Продолжительность: </b>${Math.floor((new Date(event.endDate) - new Date(event.startDate)) / (1000 * 60 * 60 * 24))} дн.</div>
    </div>`
      }));

    return ({ events: stateEvents, eventTypes: stateEventTypes });
  }

  componentDidMount() {
    this.props.actions.loadEvents();
  }

  rangechangedHandler = ({ start, end }) => {
    console.log('start =', new Date(start));
    console.log('end =', new Date(end));
    this.props.actions.changeTimelineRange({ start, end });
  }

  render() {
    const { events, eventTypes } = this.state;

    return (
      <div className="App" >
        <Link to="/">Main</Link>
        <Link to="/manage">Edit Data</Link>
        <Route exact path="/" render={() => <DownloadButton />} />
        <Route path="/manage" render={() => <div>Manage tab!</div>} />
        {events && events.length > 0 &&
          <Timeline options={options} items={events} groups={eventTypes} rangechangedHandler={this.rangechangedHandler} />
        }
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    events: state.eventsData.events,
    eventTypes: state.eventsData.eventTypes
  }), dispatch => ({ actions: bindActionCreators(actions, dispatch) }))(App));
