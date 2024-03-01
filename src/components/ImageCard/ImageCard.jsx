import { conteinerImg, galleryImage } from './ImageCard.module.css';
export default function ImageCard({ list: { urls, alt_description } }) {
    return (
        <div className={conteinerImg}>
            <img className={galleryImage} src={urls.small} alt={alt_description} />
        </div>
    );
}
