import { ADD_BOX, CALCULATE_VOLUME } from '../actions';

export const box = ( state = {}, action ) => {
  console.log( 'inside here!!!', state, action );
  switch ( action.type ) {
    case ADD_BOX:
      return {
        id: action.id,
        length: action.length,
        height: action.height,
        width: action.width,
        unit: action.unit || 'cm',
      };
    case CALCULATE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    default:
      return state;
  }
};

export const boxes = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_BOX:
      return [
        ...state,
        box( undefined, action ),
      ];
    default:
      return state;
  }
};
