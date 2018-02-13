import axios from 'axios';
import { FETCH_SIGHTINGS } from './types';
import { CREATE_SIGHTING } from './types';

// Forward ajax request to the reducers and dispatch
// action when promise resolved
export const fetchSightings = () => async dispatch => {
  const res = await axios.get('/sightings');

  dispatch({ type: FETCH_SIGHTINGS, payload: res.data });
};

// Values will contain the new sighting
export const createSighting = (values, history) => async dispatch => {
  const res = await axios.post('/sightings', values);

  history.push('/surveys');

  dispatch({ type: CREATE_SIGHTING, payload: res.data });
};
