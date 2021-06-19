import { all, call } from 'redux-saga/effects';

import { trendSagas } from './trend/trend.saga';

export default function* rootSaga() {
  yield all([
    call(trendSagas)
  ]);
}