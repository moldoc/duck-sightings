import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sightingReducer from './sightingsReducer';

export default combineReducers({
  sightings: sightingReducer,
  form: formReducer
});
