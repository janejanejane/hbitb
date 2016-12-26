import * as THREE from 'three';

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(
  75,
  window.innderWidth / window.innerHeight,
  1,
  10000,
);
export const renderer = new THREE.WebGLRenderer();
const geometry = ( measurements = {} ) => {
  // THREE.BoxGeometry( width of side on x axis,
  // height of side on y axis,
  // depth of side on z axis,
  // [number of segmented faces, default 1])
  return new THREE.BoxGeometry(
    measurements.width,
    measurements.height,
    measurements.length,
    10, 10, 10,
  );
};
const material = new THREE.MeshBasicMaterial( {
  color: 0xfffff,
  wireframe: true,
} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 1000;

renderer.setSize( window.innderWidth, window.innderHeight );
// document.body.appendChild( renderer.domElement );
// renderer.render( scene, camera );

export default geometry;
