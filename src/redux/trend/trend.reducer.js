const INITIAL_STATE = {
  images: [],
  hasNextPage: false,
  isFetching: false,
  errorMessage: null
}

const trendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TREND_START':
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      }
    case 'FETCH_TREND_SUCCESS':
      return {
        ...state,
        isFetching: false,
        hasNextPage: action.payload.hasNextPage,
        images: [...state.images, ...action.payload.images]
      }
    case 'FETCH_TREND_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default trendReducer;