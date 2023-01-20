import { getLocalStorage } from "../../utils/localStorage";

export const authChecker = () => {
    try {
        const user = getLocalStorage(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY);
        if (user) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
}