import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class Dimension extends Component {

  volumeSubmit() {
    console.log( 'inside submit!!!' );
  }


  render() {
    console.log( 'this.props:', this.props );
    const { handleSubmit, pristine, submitting, values } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit( this.volumeSubmit )}>
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
          <div>
            <button disabled={pristine || submitting}>Calculate</button>
          </div>
        </form>
        <div>{values}</div>
      </div>
    );
  }
}

Dimension.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  values: PropTypes.string,
};


const selector = formValueSelector( 'dimension' );
export default connect(
  ( state ) => {
    const { width, height, length } = selector( state, 'width', 'height', 'length' );

    console.log( width, height, length );

    return {
      values: `width: ${width}, height: ${height}, length: ${length}`,
    };
  } )(
    reduxForm( {
      form: 'dimension', // a unique name for this form
    } )( Dimension ),
);
