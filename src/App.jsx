import { useState, useEffect } from 'react';
import './App.css';
import photoApi from './photo-api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

function App() {
    const [arrPhoto, setArrPhoto] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [clickPhoto, setClickPhoto] = useState([]);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        async function getPhoto() {
            try {
                setError(false);
                setLoading(true);
                const data = await photoApi(query, page);
                setArrPhoto(oldPhoto => [...oldPhoto, ...data.results]);
                setTotalPages(data.total_pages);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getPhoto();
    }, [query, page]);

    const handClickForm = newQuery => {
        setQuery(newQuery);
        setPage(1);
        setArrPhoto([]);
    };
    const handClickLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <>
            <SearchBar onSubmit={handClickForm} />
            <ImageGallery
                listPhoto={arrPhoto}
                onClickPhoto={setClickPhoto}
                onOpenModal={setModalIsOpen}
            />
            {totalPages > 1 && !loading && totalPages !== page && (
                <LoadMoreBtn onClick={handClickLoadMore} />
            )}
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
            <ImageModal
                onOpen={modalIsOpen}
                onClickPhoto={clickPhoto}
                onCloseModal={setModalIsOpen}
            />
        </>
    );
}

export default App;
