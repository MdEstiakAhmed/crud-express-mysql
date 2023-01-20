import { toast } from 'react-toastify';

const showAlert = {
    successAlert: (msg) => {
        toast.success(msg, {
            autoClose: 1500,
            progress: 0,
            className: "successAlert",
        });
    },

    errorAlert: (msg) => {
        toast.error(msg, {
            autoClose: 1500,
            progress: 0,
            className: "errorAlert",
        });
    }
}

export const showAlertPopup = (type, message) => {
    if (type === 'success') {
        showAlert.successAlert(message);
    }
    else if (type === 'error') {
        showAlert.errorAlert(message);
    }
}