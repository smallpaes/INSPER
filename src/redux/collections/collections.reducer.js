import { addCollection } from './collections.utils';

const INITIAL_STATE = {
  collections: []
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        collections: addCollection(state.collections, action.payload)
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        collections: state.collections.filter(collection => collection !== action.payload)
      }
    default:
      return state;
  }
};

export default collectionsReducer;