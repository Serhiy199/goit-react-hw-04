import { button } from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
    return (
        <button className={button} type="button" onClick={onClick}>
            Load more
        </button>
    );
}
