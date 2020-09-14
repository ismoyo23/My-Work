import {showData} from '../../actions/author';

let initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: [],
};

let searchGet = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'SEARCH_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SEARCH_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action,
      };
    default: {
      return state;
    }
  }
};

export default searchGet;
