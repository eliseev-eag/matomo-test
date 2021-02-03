import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App/App';
import './index.css';

const renderApp = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

window.addEventListener('hashchange', function () {
  _paq.push(['setCustomUrl', '/' + window.location.hash.substr(1)]);
  _paq.push(['setDocumentTitle', document.title]);
  _paq.push(['trackPageView']);

  _paq.push(['FormAnalytics::scanForForms', document]);
  _paq.push(['enableLinkTracking']);
  _paq.push(['trackContentImpressionsWithinNode', document]);
});


ReactDOM.render(renderApp(), document.getElementById('root'));
