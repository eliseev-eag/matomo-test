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

const rootElement = document.getElementById('root');

// eslint-disable-next-line func-names
window.addEventListener('hashchange', function () {
  /* eslint-disable no-underscore-dangle */
  window._paq.push(['setCustomUrl', `/${window.location.hash}`]);
  window._paq.push(['setDocumentTitle', document.title]);
  window._paq.push(['trackPageView']);

  window._paq.push(['FormAnalytics::scanForForms', rootElement]);
  window._paq.push(['enableLinkTracking']);
  window._paq.push(['trackContentImpressionsWithinNode', rootElement]);
  /* eslint-enable no-underscore-dangle */
});

ReactDOM.render(renderApp(), rootElement);
