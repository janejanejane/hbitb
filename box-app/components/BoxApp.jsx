import React from 'react';
import v4 from 'node-uuid';

import { ADD_BOX } from '../actions/index';

const BoxApp = ( { store } ) => {
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
            type: ADD_BOX,
            id: v4(),
            length: length.value,
            height: height.value,
            width: width.value,
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
