import deepFreeze from 'deep-freeze';
import expect from 'expect';
import { createStore } from 'redux';

const box = ( state = {}, action ) => {
  switch ( action.type ) {
    case 'ADD_BOX':
      return {
        id: action.id,
        length: action.length,
        height: action.height,
        width: action.width,
        unit: action.unit,
      };
    default:
      return state;
  }
};

const boxes = ( state = [], action ) => {
  switch ( action.type ) {
    case 'ADD_BOX':
      return [
        ...state,
        box( undefined, action ),
      ];
    default:
      return state;
  }
};

const store = createStore( boxes );

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
