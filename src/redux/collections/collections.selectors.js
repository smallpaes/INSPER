import { createSelector } from 'reselect';

const selectCollections = state => state.collections;

export const selectAllCollections = createSelector(
  [selectCollections],
  selections => selections['collections']
);