import {ADD_TRIP, CLEAR_TRIP_HISTORY} from './actionTypes';

const initialState = {
  trip: [],
};
const tripHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRIP:
      return {
        ...state,
        trips: [...state.trip, action.payload],
      };
    case CLEAR_TRIP_HISTORY:
      return {
        ...state,
        trip: [],
      };
    default:
      return state;
  }
};
export default tripHistoryReducer;
