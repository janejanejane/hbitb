import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let Dimension = ( props ) => {
  console.log( 'this.props:', props );
  const { handleSubmit, values } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      <div>{values}</div>
    </div>
  );
};

Dimension = reduxForm( {
  form: 'dimension', // a unique name for this form
} )( Dimension );

const selector = formValueSelector( 'dimension' );
Dimension = connect(
  ( state ) => {
    const { width, height, length } = selector( state, 'width', 'height', 'length' );

    console.log( width, height, length );

    return {
      values: `width: ${width}, height: ${height}, length: ${length}`,
    };
  } )( Dimension );

Dimension.propTypes = {
  handleSubmit: PropTypes.func,
  values: PropTypes.string,
};

export default Dimension;
