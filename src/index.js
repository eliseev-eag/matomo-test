import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () =>
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(renderApp(), document.getElementById('root'));
registerServiceWorker();
