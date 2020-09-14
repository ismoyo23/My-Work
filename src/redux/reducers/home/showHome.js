let initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let showHome = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_DATA_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SHOW_DATA_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SHOW_DATA_FULFILLED':
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

export default showHome;
