export const fetchTrendStart = page => ({
  type: 'FETCH_TREND_START',
  payload: page
});

export const fetchTrendSuccess = trendData => ({
  type: 'FETCH_TREND_SUCCESS',
  payload: trendData
});

export const fetchTrendFailure = errorMessage => ({
  type: 'FETCH_TREND_FAILURE',
  payload: errorMessage
});