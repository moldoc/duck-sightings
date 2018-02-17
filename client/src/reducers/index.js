import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sightingReducer from './sightingsReducer';
import speciesReducer from './speciesReducer';

export default combineReducers({
  sightings: sightingReducer,
  species: speciesReducer,
  form: formReducer
});
