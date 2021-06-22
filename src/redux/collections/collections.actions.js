export const addCollection = collectionName => ({
  type: 'ADD_ITEM',
  payload: collectionName
});

export const removeCollection = collectionName => ({
  type: 'REMOVE_ITEM',
  payload: collectionName
});