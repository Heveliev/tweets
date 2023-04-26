import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from "redux/filter/filter-selector";
export const getTweets = state => state.tweets.items;
export const getIsLoading = state => state.tweets.isLoading;


export const statusFilters = {
    all: 'all',
    follow: 'follow',
    followings: 'followings',
  };

export const getVisibleTweets = createSelector(
    [getTweets, getFilter],
    (tweets, statusFilter) => {
      switch (statusFilter) {
        case statusFilters.follow:
          return tweets.filter(user => !user.isFollowed);
        case statusFilters.followings:
          return tweets.filter(user => user.isFollowed);
        default:
          return tweets;
      }
    }
  );