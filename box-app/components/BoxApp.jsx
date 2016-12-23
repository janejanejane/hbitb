import React, { Component } from 'react';
import v4 from 'node-uuid';

import { ADD_BOX, CALCULATE_VOLUME } from '../actions';
import * as api from '../api';

class BoxApp extends Component {

  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe( () => {
      console.log( 'inside componentDidMount!!!' );
      this.forceUpdate();
    } );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.props;
    const state = store.getState();

    let length = 0;
    let width = 0;
    let height = 0;

    console.log( 'state:', state, 'props:', this.props );

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
        <div>
          <label htmlFor="Unit">Unit:</label>
          <select
            id="unit"
          >
            <option id="cm">cm</option>
            <option id="in">in</option>
          </select>
        </div>
        <br />
        <button
          onClick={() => {
            store.dispatch( {
              type: ADD_BOX,
              id: v4(),
              length: length.value,
              height: height.value,
              width: width.value,
            } );

            // calculate the volume and dispatch action
            api.calculateVolume( {
              length: length.value,
              height: height.value,
              width: width.value,
            } ).then( ( response ) => {
              console.log( response );
              store.dispatch( {
                type: CALCULATE_VOLUME,
                volume: response,
              } );
            } );

            // reset input values
            length.value = '';
            width.value = '';
            height.value = '';
          }}
        >Calculate</button>
        <br />
        <br />
        <div>
          Length: {state.length}
          <br />
          Width: {state.width}
          <br />
          Height: {state.height}
        </div>
        <br />
        <div>
          Volume: {state.volume}
        </div>
      </div>
    );
  }
}

export default BoxApp;
