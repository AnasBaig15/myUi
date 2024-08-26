import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
  },
});

export const {login, logout, initializeAuth} = authSlice.actions;

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

export default authSlice.reducer;
