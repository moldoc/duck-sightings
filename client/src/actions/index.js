import axios from 'axios';
import { FETCH_SIGHTINGS } from './types';
import { CREATE_SIGHTING } from './types';
import { FETCH_SPECIES } from './types';

// Forward ajax request to the reducers and dispatch
// action when promise resolved
export const fetchSightings = () => async dispatch => {
  const res = await axios.get('/sightings');

  dispatch({ type: FETCH_SIGHTINGS, payload: res.data });
};

export function createSighting(values, callback) {
  // After the API request has been successfully completed, execute the function
  // that calls the callback we passed in
  const request = axios.post('/sightings', values).then(() => callback());

  return {
    type: CREATE_SIGHTING,
    payload: request
  };
}

export const fetchSpecies = () => async dispatch => {
  const res = await axios.get('/species');

  dispatch({ type: FETCH_SPECIES, payload: res.data });
};
