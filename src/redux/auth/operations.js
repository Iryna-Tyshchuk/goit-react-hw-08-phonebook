import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/api';

export const loginRequest = createAsyncThunk(
  'user/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.login(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const registerRequest = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutRequest = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.logOut();
      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCurrentUserRequest = createAsyncThunk(
  'user/getCurrent',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.getUserDetails();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
