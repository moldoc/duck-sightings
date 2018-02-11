import { combineReducers } from 'redux';
import sightingReducer from './sightingsReducer';

export default combineReducers({
  sightings: sightingReducer
});
