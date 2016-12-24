import React, { Component } from 'react';

import geometry, { camera, renderer, scene } from '../util/draw-cube';

class ThreeRender extends Component {
  componentDidMount() {
    const { length, width, height } = this.props.geometry;
    console.log( length, width, height );
    if ( ( length && width && height ) ) {
      geometry( this.props.geometry );
      renderer.render( scene, camera );
      this.threeDiv = renderer.domElement;
    }
  }

  render() {
    console.log( this.props.geometry );
    return (
      <div>
        <h3>3d here!</h3>
        <div
          ref={( node ) => {
            this.threeDiv = node;
          }}
        />
      </div>
    );
  }
}

export default ThreeRender;
