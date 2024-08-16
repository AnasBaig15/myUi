import { createSlice } from '@reduxjs/toolkit';
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
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loginUser = (email, password) => async dispatch => {
  try {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        dispatch(login({ email }));
      } else {
        alert('Invalid email or password');
      }
    } else {
      alert('User not found');
    }
  } catch (error) {
    console.error('Login error', error);
  }
};

export const signupUser = (email, password) => async dispatch => {
  try {
    const user = { email, password };
    await AsyncStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! You can now log in.');
  } catch (error) {
    console.error('Signup error', error);
  }
};

export default authSlice.reducer;
