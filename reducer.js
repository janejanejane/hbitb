const SUBMIT_VOLUME = 'SUBMIT_VOLUME';

const initialState = {
  volume: 0,
};

export function dimension( state = initialState, action ) {
  console.log( 'state:', state );
  switch ( action.type ) {
    case SUBMIT_VOLUME:
      return action.volume;
    default:
      return state;
  }
}
