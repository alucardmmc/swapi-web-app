import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../../components/Card/Card';
import Query from '../../api/enums/query';
import getPeople from '../../api/getPeople';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loading from '../../components/Loading/Loading';

import styles from './PeoplePage.module.css';

const PeoplePage: FC = () => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');

    const peopleQuery = useQuery(
        [Query.People, page, query],
        () => getPeople(page, query),
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
        setPage(1);
    };

    if (peopleQuery.isSuccess) {
        const prevDisabled =
            peopleQuery.isFetching || peopleQuery.data.previous === null;
        const nextDisabled =
            peopleQuery.isFetching || peopleQuery.data.next === null;

        return (
            <div className={styles.container}>
                <h1 className={styles.title}>People</h1>
                <SearchBar
                    handleSearch={handleSearch}
                    searchDisabled={peopleQuery.isFetching}
                />
                {peopleQuery.isFetching ? (
                    <Loading />
                ) : (
                    <div className={styles.cards}>
                        {peopleQuery.data.results.map(
                            ({ name, birth_year }) => (
                                <Card
                                    key={`id-${name}`}
                                    title={name}
                                    subtitle={birth_year}
                                />
                            )
                        )}
                    </div>
                )}
                <Pagination
                    current={page}
                    top={Math.ceil(peopleQuery.data.count / 10)}
                    prevDisabled={prevDisabled}
                    nextDisabled={nextDisabled}
                    handleClick={handlePageChange}
                />
            </div>
        );
    }

    return <Loading />;
};

export default PeoplePage;
