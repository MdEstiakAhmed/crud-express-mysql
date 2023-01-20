import { createContext, useReducer } from "react";
import userReducer, { handleUser } from "./user/reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [userState, userDispatch] = useReducer(userReducer, null);
    const userAction = handleUser(userDispatch);

    let contextValue = {
        userState, userAction
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };