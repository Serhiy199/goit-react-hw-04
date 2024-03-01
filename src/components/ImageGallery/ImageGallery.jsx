import ImageCard from '../ImageCard/ImageCard';
import { list, listPhoto } from './ImageGallery.module.css';

export default function ImageGallery({ listPhoto }) {
    return (
        <ul className={list}>
            {listPhoto.map(list => {
                return (
                    <li key={list.id}>
                        <ImageCard list={list} />
                    </li>
                );
            })}
        </ul>
    );
}
