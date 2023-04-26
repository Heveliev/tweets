import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTweets} from './tweets-thunk';
import { isAnyOf } from '@reduxjs/toolkit';


const actions = [fetchAllTweets];

const handleFetchTweets = (state, action) => {
  state.items = action.payload;
};



export const tweetsSlice = createSlice({
    name: 'tweets',
    initialState:{
    items: [],
    isLoading: false,
    error: null
  },
  reducers: { toggleIsFollowed(state, action) {
    const user = state.items.find((user) => user.id === action.payload);
    if (user) {
      user.isFollowed = !user.isFollowed;
      user.followers += user.isFollowed ? 1 : -1;
    }
  }},
 extraReducers: builder =>
    builder
      .addCase(fetchAllTweets.fulfilled, handleFetchTweets)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),

})


export const { toggleIsFollowed } = tweetsSlice.actions;