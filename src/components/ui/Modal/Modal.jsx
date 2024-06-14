import styles from './modal.module.scss';
import Button from '../Button/Button';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modal} onClick={handleModalClick}>
                {children}
                <Button label={'close'} size={'small'} handleBtnClick={onClose} color={'secondary'} />
            </div>
        </div>
    )
}

export default Modal