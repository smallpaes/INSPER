import { createSelector } from 'reselect';

const selectTrend = state => state.trend;

export const selectTrendImages = createSelector(
  [selectTrend],
  trend =>  trend.images
);

export const selectIsFetching = createSelector(
  [selectTrend],
  trend => trend.isFetching
);