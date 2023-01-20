const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const fetchReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                hasError: false
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false,
                data: action.payload.data,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                hasError: true,
                error: action.payload.error
            };
        default:
            throw new Error();
    }
};

export default fetchReducer;