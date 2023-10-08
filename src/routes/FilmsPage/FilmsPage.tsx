import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../../components/Card/Card';
import Query from '../../api/enums/query';
import getFilms from '../../api/getFilms';

const FilmsPage: FC = () => {
    const [query, setQuery] = useState('');

    const filmsQuery = useQuery([Query.Films, query], () => getFilms(query), {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    if (filmsQuery.isSuccess) {
        console.log('query => ', filmsQuery);

        return (
            <div className="container">
                <div className="cards">
                    {filmsQuery.data.results.map(({ title }) => (
                        <Card key={`id-${title}`} title={title} />
                    ))}
                </div>
            </div>
        );
    }

    return <p>Loading</p>;
};

export default FilmsPage;
