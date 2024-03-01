import { useState, useEffect } from 'react';
import './App.css';
import photoApi from './photo-api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';

function App() {
    const [arrPhoto, setArrPhoto] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getPhoto() {
            try {
                setError(false);
                setLoading(true);
                const data = await photoApi(query, page);
                setArrPhoto(oldPhoto => [...oldPhoto, ...data]);
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
    console.log(arrPhoto);
    return (
        <>
            <SearchBar onSubmit={handClickForm} />
            <ImageGallery listPhoto={arrPhoto} />
            {arrPhoto.length > 9 && !loading && <LoadMoreBtn onClick={handClickLoadMore} />}
            {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
            {loading && <Loader />}
        </>
    );
}

export default App;
