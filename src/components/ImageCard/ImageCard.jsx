import { conteinerImg, galleryImage } from './ImageCard.module.css';
import { useRef } from 'react';

export default function ImageCard({ list: { urls, alt_description }, onClickPhoto, onOpenModal }) {
    const photoRenderRef = useRef();
    const handClickPhoto = () => {
        onClickPhoto(photoRenderRef.current);
        onOpenModal(true);
    };

    return (
        <div className={conteinerImg}>
            <img
                onClick={handClickPhoto}
                srcSet={urls.regular}
                ref={photoRenderRef}
                className={galleryImage}
                src={urls.small}
                alt={alt_description}
            />
        </div>
    );
}
