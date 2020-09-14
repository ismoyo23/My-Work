let initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let skillGet = (state = initialState, action) => {
  switch (action.type) {
    case 'SKILL_DATA_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SKILL_DATA_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SKILL_DATA_FULFILLED':
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

export default skillGet;
