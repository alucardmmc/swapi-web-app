import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../../components/Card/Card';
import Query from '../../api/enums/query';
import getFilms from '../../api/getFilms';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

import styles from './FilmsPage.module.css';

const FilmsPage: FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const filmsQuery = useQuery(
        [Query.Films, page, query],
        () => getFilms(page, query),
        {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            keepPreviousData: true,
        }
    );

    const handlePageChange = (_page: number) => {
        setPage(_page);
    };

    const handleSearch = (_query: string) => {
        setQuery(_query);
    };

    if (filmsQuery.isSuccess) {
        const prevDisabled =
            filmsQuery.isFetching || filmsQuery.data.previous === null;
        const nextDisabled =
            filmsQuery.isFetching || filmsQuery.data.next === null;

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Films</h1>
                <SearchBar
                    handleSearch={handleSearch}
                    searchDisabled={filmsQuery.isFetching}
                />
                {filmsQuery.isFetching ? (
                    <Loading />
                ) : (
                    <div className={styles.cards}>
                        {filmsQuery.data.results.map(({ title, director }) => (
                            <Card
                                key={`id-${title}`}
                                title={title}
                                subtitle={director}
                            />
                        ))}
                    </div>
                )}
                <Pagination
                    current={page}
                    top={Math.ceil(filmsQuery.data.count / 10)}
                    prevDisabled={prevDisabled}
                    nextDisabled={nextDisabled}
                    handleClick={handlePageChange}
                />
            </div>
        );
    }

    return <Loading />;
};

export default FilmsPage;
