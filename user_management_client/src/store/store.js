import { createContext, useReducer } from "react";
import userReducer, { handleUser } from "./user/reducer";
import authReducer, { handleAuth } from "./auth/reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, {});
    const userAction = handleUser(userDispatch);

    const [authState, authDispatch] = useReducer(authReducer, undefined);
    const authAction = handleAuth(authDispatch);

    let contextValue = {
        userState, userAction,
        authState, authAction
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };