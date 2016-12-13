const SUBMIT_VOLUME = 'SUBMIT_VOLUME';

const initialState = {
  volume: 0,
};

export function dimension( state = initialState, action ) {
  switch ( action.type ) {
    case SUBMIT_VOLUME:
      return action.volume;
    default:
      return state;
  }
}
