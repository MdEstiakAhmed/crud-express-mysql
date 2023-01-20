import style from "./modal.module.css";

const Modal = ({ title, onClose, children }) => {

    const handleCloseModal = () => {
        onClose(false, null);
    }
    return (
        <div class={style["modal"]}>
            <div class={style["modal-content"]}>
                <div className={style["modal-header"]}>
                    <h4>{title}</h4>
                    <span className={style["close"]} onClick={handleCloseModal}>X</span>
                </div>
                <div className={style["modal-body"]}>
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;