import style from "./modal.module.css";

const Modal = ({ title, onClose, children, maxWidth }) => {

    const handleCloseModal = () => {
        onClose(false, null);
    }
    return (
        <div class={style["modal"]}>
            <div class={style["modal-content"]} style={{maxWidth: maxWidth}}>
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