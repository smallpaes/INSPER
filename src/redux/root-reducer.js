import { combineReducers } from 'redux';

import trendReducer from './trend/trend.reducer';
import collectionsReducer from './collections/collections.reducer';

export default combineReducers({
  trend: trendReducer,
  collections: collectionsReducer
});