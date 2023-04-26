import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6448e45bb88a78a8f0f6c848.mockapi.io';

export const fetchAllTweets = createAsyncThunk(
  'tweets/getTweets',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/tweets');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
