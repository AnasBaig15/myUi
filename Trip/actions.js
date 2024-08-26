import {ADD_TRIP, CLEAR_TRIP_HISTORY} from './actionTypes';
export const addTrip = trip => ({
  type: ADD_TRIP,
  payload: trip,
});
export const clearTripHistory = () => ({
  type: CLEAR_TRIP_HISTORY,
});
