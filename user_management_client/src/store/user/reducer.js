import { removeLocalStorage, setLocalStorage } from "../../utils/localStorage";

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export const handleUser = (dispatch) => ({
    setUser: (value) => dispatch({
        type: SET_USER,
        payload: value
    }),
    unsetUser: () => dispatch({
        type: UNSET_USER,
    })
});

const userReducer = (state, action) => {
    switch (action.type) {
        case SET_USER:
            setLocalStorage(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY, action.payload)
            return action.payload;
        case UNSET_USER:
            removeLocalStorage(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY)
            return {};
        default:
            return state;
    }
}

export default userReducer;