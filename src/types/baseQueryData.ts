export default interface BaseQueryData<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}
