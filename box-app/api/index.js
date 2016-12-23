const delay = ( ms ) => {
  return new Promise( ( resolve ) => {
    return setTimeout( resolve, ms );
  } );
};

export const calculateVolume = ( measurements = {} ) => {
  return delay( 500 ).then( () => {
    console.log( 'in here calculateVolume!!!' );
    return measurements.length * measurements.width * measurements.height;
  } );
};
