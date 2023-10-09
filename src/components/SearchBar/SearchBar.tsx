import { FC, useRef } from 'react';

import styles from './SearchBar.module.css';

interface SearchBarProps {
    searchDisabled: boolean;
    handleSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch, searchDisabled }) => {
    const inputElement = useRef<HTMLInputElement>(null);

    const onSearch = () => {
        if (inputElement.current != null) {
            handleSearch(inputElement.current.value);
        }
    };

    return (
        <div className={styles.container}>
            <input
                id="searchInput"
                className={styles['search-bar']}
                type="text"
                placeholder="Search by Name"
                ref={inputElement}
            />
            <button
                className={styles.button}
                onClick={onSearch}
                disabled={searchDisabled}>
                Search
            </button>
        </div>
    );
};

export default SearchBar;
