import { combineReducers } from 'redux';

import trendReducer from './trend/trend.reducer';

export default combineReducers({
  trend: trendReducer
});