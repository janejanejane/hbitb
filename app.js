import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import BoxApp from './BoxApp';

export const CALCULATE_VOLUME = 'CALCULATE_VOLUME';

const initialState = {
  volume: 0,
};

export const boxApp = ( state = initialState, action ) => {
  console.log( state, action );
  switch ( action.type ) {
    case CALCULATE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    default:
      return state;
  }
};

export const store = createStore( boxApp );

const renderBoxApp = () => {
  console.log( 'store.getState()', store.getState() );
  render(
    <BoxApp volume={store.getState()} />,
    document.getElementById( 'box-app' ),
  );
};

store.subscribe( renderBoxApp );
renderBoxApp();
