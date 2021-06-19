import { takeLatest, call, all, put } from 'redux-saga/effects';

import { fetchTrendSuccess, fetchTrendFailure } from './trend.actions';

export function* fetchTrendAsync({ payload }) {
  try {
    const responseBody = yield fetch(`https://api.pexels.com/v1/curated?page=${payload}&per_page=9`, {
      method: 'Get',
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_PEXELS_API_KEY}`}
    });

    const { 
      page,
      per_page,
      photos,
      total_results
    } = yield responseBody.json();

    yield put(fetchTrendSuccess({
      images: photos,
      hasNextPage: Math.floor(total_results / per_page) < page
    }));
  } catch (error) {
    yield put(fetchTrendFailure(error));
  }
}


export function* onFetchTrendStart() {
  yield takeLatest(
    'FETCH_TREND_START',
    fetchTrendAsync
  );
}

export function* trendSagas() {
  yield all([
    call(onFetchTrendStart)
  ]);
}