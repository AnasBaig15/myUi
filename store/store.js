import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import tripHistoryReducer from '../Trip/reducer';
const store = configureStore({
  reducer: {
    auth: authReducer,
    tripHistory: tripHistoryReducer,
  },
});

export default store;
