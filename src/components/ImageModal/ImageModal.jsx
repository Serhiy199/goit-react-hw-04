import Modal from 'react-modal';
import { modal, content, photoImg } from './ImageModal.module.css';

export default function ImageModal({ onOpen, onClickPhoto: { src, alt, srcset }, onOpenModal }) {
    console.log(srcset);
    console.log(src);
    function closeModal() {
        onOpenModal(false);
    }
    return (
        <Modal
            className={modal}
            isOpen={onOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            shouldCloseOnOverlayClick={closeModal}
        >
            <div className={content}>
                <img className={photoImg} src={srcset} alt={alt} />
            </div>
        </Modal>
    );
}
