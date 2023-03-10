import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authChecker } from "../services/authentication/authChecker";

const AuthWrapper = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = authChecker();
        if(!isAuthenticated) {
            navigate("/login");
        }
        else {
            return children;
        }
    }, []);
}
export default AuthWrapper;