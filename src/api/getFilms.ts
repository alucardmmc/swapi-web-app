import BaseQueryData from '../types/baseQueryData';
import FilmsData from '../types/films/filmsData';

const getFilms = async (
    page: number,
    search: string
): Promise<BaseQueryData<FilmsData>> => {
    const response = await fetch(
        `https://swapi.dev/api/films/?search=${search}&page=${page}`
    );
    const data = await response.json();

    return data;
};

export default getFilms;
