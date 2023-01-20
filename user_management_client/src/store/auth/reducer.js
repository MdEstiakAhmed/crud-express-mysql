export const SET_AUTH = 'SET_AUTH';
export const UNSET_AUTH = 'UNSET_AUTH';

export const handleAuth = (dispatch) => ({
    setAuth: () => dispatch({
        type: SET_AUTH,
    }),
    unsetAuth: () => dispatch({
        type: UNSET_AUTH,
    })
});

const userReducer = (state, action) => {
    switch (action.type) {
        case SET_AUTH:
            return true;
        case UNSET_AUTH:
            return false;
        default:
            return state;
    }
}

export default userReducer;