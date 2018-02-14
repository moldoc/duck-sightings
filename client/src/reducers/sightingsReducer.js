import { FETCH_SIGHTINGS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SIGHTINGS:
      return action.payload;
    default:
      return state;
  }
}
