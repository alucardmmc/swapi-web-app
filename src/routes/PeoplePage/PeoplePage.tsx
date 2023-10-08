import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../../components/Card/Card';
import Query from '../../api/enums/query';
import getPeople from '../../api/getPeople';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';

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
        console.log('query => ', peopleQuery);

        return (
            <div className="container">
                <SearchBar handleSearch={handleSearch} />
                {peopleQuery.isFetching ? (
                    <div>Loading...</div>
                ) : (
                    <div className="cards">
                        {peopleQuery.data.results.map(({ name }) => (
                            <Card key={`id-${name}`} title={name} />
                        ))}
                    </div>
                )}
                <Pagination
                    current={page}
                    prev={peopleQuery.data.previous}
                    next={peopleQuery.data.next}
                    handleClick={handlePageChange}
                />
            </div>
        );
    }

    return <p>Loading...</p>;
};

export default PeoplePage;
