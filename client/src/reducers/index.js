import { combineReducers } from 'redux';
import sightingReducer from './reducer_sightings';

export default combineReducers({
  sightings: sightingReducer
});
