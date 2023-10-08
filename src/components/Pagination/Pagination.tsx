import { FC } from 'react';

interface PaginationProps {
    current: number;
    next: string | null;
    prev: string | null;
    handleClick: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
    current,
    next,
    prev,
    handleClick,
}) => {
    return (
        <div className="container">
            <button
                onClick={() => handleClick(current - 1)}
                disabled={prev === null ? true : false}>
                Previous Page!
            </button>
            <button
                onClick={() => handleClick(current + 1)}
                disabled={next === null ? true : false}>
                Next Page!
            </button>
        </div>
    );
};

export default Pagination;
