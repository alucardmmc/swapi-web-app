import { FC, useRef } from 'react';

interface SearchBarProps {
    handleSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch }) => {
    const inputElement = useRef<HTMLInputElement>(null);

    const onSearch = () => {
        if (inputElement.current != null) {
            handleSearch(inputElement.current.value);
        }
    };

    console.log(inputElement);

    return (
        <div className="container">
            <label>Search by Title</label>
            <input
                id="searchInput"
                name="SearchInput"
                type="text"
                ref={inputElement}
            />
            <button onClick={onSearch}>SEARCH ICON</button>
        </div>
    );
};

export default SearchBar;
