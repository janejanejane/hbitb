import React, { Component } from 'react';
import { render } from 'react-dom';
import { Field, reduxForm } from 'redux-form';

class Test extends Component {

  render() {
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
      </div>
    );
  }
}


render(
  <Test />,
  document.getElementById( 'app' ),
);
