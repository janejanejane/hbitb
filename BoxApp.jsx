import React from 'react';

import { store, CALCULATE_VOLUME } from './app';

const BoxApp = () => {
  let length = 0;
  let width = 0;
  let height = 0;

  return (
    <div>
      <div>
        <label htmlFor="length">Length:</label>
        <input
          id="length"
          ref={( node ) => {
            length = node;
          }}
        />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          ref={( node ) => {
            width = node;
          }}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          ref={( node ) => {
            height = node;
          }}
        />
      </div>
      <button
        onClick={() => {
          store.dispatch( {
            type: CALCULATE_VOLUME,
            volume: length.value + width.value + height.value,
          } );

          // reset input values
          length.value = '';
          width.value = '';
          height.value = '';
        }}
      >Calculate</button>
      <div>{store.getState().volume}</div>
    </div>
  );
};

export default BoxApp;
