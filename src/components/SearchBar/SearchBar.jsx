import toast, { Toaster } from 'react-hot-toast';
import { header, form, input, button } from './SearchBar.module.css';
export default function SearchBar({ onSubmit }) {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const inputValue = form.elements.inputValue.value;
        if (form.elements.inputValue.value.trim() === '') {
            toast.error('Text must be entered to search for images!!!!');
            return;
        }
        onSubmit(inputValue);
        form.reset();
    };
    return (
        <header className={header}>
            <form className={form} onSubmit={handleSubmit}>
                <input
                    className={input}
                    type="text"
                    name="inputValue"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={button} type="submit">
                    Search
                </button>
            </form>
            <Toaster position="top-center" />
        </header>
    );
}
