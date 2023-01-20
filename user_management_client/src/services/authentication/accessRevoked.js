const { removeLocalStorage } = require("../../utils/localStorage");

const accessRevoked = (response) => {
    if(response.data.accessRevoked){
        removeLocalStorage(process.env.REACT_APP_USER_LOCAL_STORAGE_KEY);
        window.location.href = `${window.location.origin}/login`;
        return;
    }
    else {
        return;
    }
}

module.exports = {
    accessRevoked,
};