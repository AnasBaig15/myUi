import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  email: null,
  trips: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Auth reducers
    login: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
    },
    logout: state => {
      state.isLoggedIn = false;
      state.email = null;
    },
    initializeAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.email = action.payload.email;
    },

    // Trip reducers
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    clearTripHistory: state => {
      state.trips = [];
    },
  },
});

// Exporting actions
export const {login, logout, initializeAuth, addTrip, clearTripHistory} =
  userSlice.actions;

// Thunk to initialize auth state
export const initializeAuthState = () => async dispatch => {
  try {
    const storedEmail = await AsyncStorage.getItem('userEmail');
    if (storedEmail) {
      dispatch(initializeAuth({isLoggedIn: true, email: storedEmail}));
    }
  } catch (error) {
    console.error('Error initializing auth state', error);
  }
};

// Exporting the reducer
export default userSlice.reducer;
