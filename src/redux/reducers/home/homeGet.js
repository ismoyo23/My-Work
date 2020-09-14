let initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let homeGet = (state = initialState, action) => {
  switch (action.type) {
    case 'HOME_GET_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'HOME_GET_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'HOME_GET_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    default: {
      return state;
    }
  }
};

export default homeGet;
