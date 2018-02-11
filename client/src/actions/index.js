import axios from 'axios';
import { FETCH_SIGHTINGS } from './types';

// Forward ajax request to the reducers and dispatch
// action when promise resolved
export const fetchSightings = () => async dispatch => {
  const res = await axios.get('/sightings');

  dispatch({ type: FETCH_SIGHTINGS, payload: res.data });
};
