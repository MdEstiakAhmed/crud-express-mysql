import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetContext from "../hooks/useGetContext";

const NotFound = () => {
    const {userState} = useGetContext()
    const navigate = useNavigate();

    useEffect(() => {
        if(userState === null){ 
            navigate("/login");
        }
        else if(Object.keys(userState || {}).length) {
            navigate("/users");
        }
    }, []);
    return (
        <></>
    )
}
export default NotFound;