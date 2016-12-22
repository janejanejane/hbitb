import deepFreeze from 'deep-freeze';
import expect from 'expect';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import BoxApp from './components/BoxApp';
import { box } from './reducers';

const store = createStore( box );

const renderBoxApp = () => {
  render(
    <BoxApp store={store} />,
    document.getElementById( 'box-app' ),
  );
};

store.subscribe( renderBoxApp );
renderBoxApp();

/* eslint-disable no-console */
console.log( 'Initial state:' );
console.log( store.getState() );
console.log( '%c --------------', 'color: green' );

console.log( 'Dispatching ADD_BOX' );
store.dispatch( {
  type: 'ADD_BOX',
  id: 0,
  length: 30,
  height: 30,
  width: 30,
  unit: 'cm',
} );
console.log( '%c --------------', 'color: green' );

console.log( 'Current state:' );
console.log( store.getState() );
console.log( '%c --------------', 'color: green' );

console.log( 'Dispatching ADD_BOX' );
store.dispatch( {
  type: 'ADD_BOX',
  id: 1,
  length: 20,
  height: 20,
  width: 20,
  unit: 'in',
} );
console.log( '%c --------------', 'color: green' );

console.log( 'Current state:' );
console.log( store.getState() );
console.log( '%c --------------', 'color: green' );

/* eslint-disable no-console */
