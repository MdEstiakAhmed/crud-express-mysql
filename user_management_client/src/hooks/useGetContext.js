import { useContext } from "react";
import { Context } from "../store/store";

const useGetContext = () => {
    const { userState, userAction, authState, authAction } = useContext(Context);
    return { userState, userAction, authState, authAction };
}

export default useGetContext;