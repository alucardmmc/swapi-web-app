import BaseQueryData from '../types/baseQueryData';
import PeopleData from '../types/people/peopleData';

const getPeople = async (
    page: number,
    search: string
): Promise<BaseQueryData<PeopleData>> => {
    const response = await fetch(
        `https://swapi.dev/api/people/?search=${search}&page=${page}`
    );
    const data = await response.json();

    console.log('getPeople => ', data);

    return data;
};

export default getPeople;
