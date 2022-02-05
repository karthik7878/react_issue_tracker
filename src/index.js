import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {loadIssues} from './actions/issueActions';
import LandingPage from './LandingPage/LandingPage';


const store = configureStore();
store.dispatch(loadIssues());

ReactDOM.render(
  <Provider store={store}>
    <LandingPage/>
  </Provider>,
  document.getElementById("root")
);

