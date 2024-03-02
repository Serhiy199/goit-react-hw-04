import Modal from 'react-modal';
import { content, photoImg } from './ImageModal.module.css';

export default function ImageModal({ onOpen, onClickPhoto: { alt, srcset }, onCloseModal }) {
    const modalStyle = {
        overlay: {
            backgroundColor: 'rgba(5, 5, 5, 0.75)',
        },
        content: {
            position: 'static',
            inset: '0',
            border: '0',
            overflow: 'hidden',
            padding: '0px',
            top: '50%',
            left: '50%',
            borderRadius: '0px',
            Overflow: 'none',
        },
    };
    function closeModal() {
        onCloseModal(false);
    }
    return (
        <Modal isOpen={onOpen} onRequestClose={closeModal} ariaHideApp={false} style={modalStyle}>
            <div className={content}>
                <img className={photoImg} src={srcset} alt={alt} />
            </div>
        </Modal>
    );
}
