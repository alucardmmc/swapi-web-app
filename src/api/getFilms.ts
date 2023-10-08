import BaseQueryData from '../types/baseQueryData';
import FilmsData from '../types/films/filmsData';

const getFilms = async (search: string): Promise<BaseQueryData<FilmsData>> => {
    const response = await fetch(
        `https://swapi.dev/api/films/?search=${search}`
    );
    const data = await response.json();

    console.log('getFilms => ', data);

    return data;
};

export default getFilms;
