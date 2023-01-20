import { useContext } from "react";
import { Context } from "../store/store";

const useGetContext = () => {
    const { userState, userAction } = useContext(Context);
    return { userState, userAction };
}

export default useGetContext;