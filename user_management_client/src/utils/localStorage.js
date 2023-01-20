export const getLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (error) {
        return undefined;
    }
}

export const setLocalStorage = (key, value) => {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    }
    catch (error) {
        console.log(error);
    }
}

export const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    }
    catch (error) {
        console.log(error);
    }
}