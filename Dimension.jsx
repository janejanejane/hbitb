import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

let Dimension = () => {
  console.log( 'this.props:', this.props );
  return (
    <div>
      <form>
        <div>
          <label htmlFor="width">W</label>
          <div>
            <Field
              name="width"
              component="input"
              type="number"
            />
          </div>
        </div>
        <div>
          <label htmlFor="height">H</label>
          <div>
            <Field
              name="height"
              component="input"
              type="number"
            />
          </div>
        </div>
        <div>
          <label htmlFor="length">L</label>
          <div>
            <Field
              name="length"
              component="input"
              type="number"
            />
          </div>
        </div>
      </form>
      <div>{this.props}</div>
    </div>
  );
};

Dimension = reduxForm( {
  form: 'dimension', // a unique name for this form
} )( Dimension );

export default Dimension;
