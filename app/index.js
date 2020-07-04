import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';

const history = createBrowserHistory();
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router history={history}>
      <App/>
    </Router>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
