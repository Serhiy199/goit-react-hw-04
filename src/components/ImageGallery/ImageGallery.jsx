import ImageCard from '../ImageCard/ImageCard';
import { list } from './ImageGallery.module.css';

export default function ImageGallery({ listPhoto, onClickPhoto, onOpenModal }) {
    return (
        <ul className={list}>
            {listPhoto.map(list => {
                return (
                    <li key={list.id}>
                        <ImageCard
                            list={list}
                            onClickPhoto={onClickPhoto}
                            onOpenModal={onOpenModal}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
