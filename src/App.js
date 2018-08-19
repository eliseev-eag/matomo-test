import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import { loadEvents } from './ducks';
import DownloadButton from './DownloadButton';
import EventsTimeline from './EventsTimeline';
class App extends Component {
  componentDidMount() {
    this.props.actions.loadEvents();
  }

  render() {
    return (
      <div className="App" >
        <Link to="/">Main</Link>
        <Link to="/manage">Edit Data</Link>
        <Route exact path="/" component={EventsTimeline} />
        <Route path="/manage" component={DownloadButton} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    dispatch => ({ actions: bindActionCreators({ loadEvents }, dispatch) })
  )(App));
