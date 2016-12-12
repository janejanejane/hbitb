import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Dimension from './Dimension';


const reducers = {
  // ... your other reducers here ...
  routing: routerReducer,
  form: formReducer,     // <---- Mounted at 'form'
};
const reducer = combineReducers( reducers );
const store = createStore( reducer );

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore( browserHistory, store );

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Dimension} />
    </Router>
  </Provider>,
  document.getElementById( 'app' ),
);
