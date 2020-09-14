let initialState = {
    isLoading: false,
    isError: false,
    errorMsg: "",
    data: []
}

let deleteBooks = (state = initialState, action) => { 
    switch (action.type) {
        case 'DELETE_HOME_PENDING':
        return{
            ...state,
            isLoading: true,
            isError: false
        }
        case 'DELETE_HOME_REJECTED':
        return{
            ...state,
            isLoading: false,
            isError: true
        }
        case 'DELETE_HOME_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data
            }
            default: {
                return state
            }
    }
}

export default deleteBooks