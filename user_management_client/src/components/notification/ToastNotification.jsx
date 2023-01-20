import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={true}
                closeButton={true}
                transition={Slide}
                theme={'light'}
                autoClose={false}
                limit={1}
            />
        </>
    );
};

export default ToastNotification;