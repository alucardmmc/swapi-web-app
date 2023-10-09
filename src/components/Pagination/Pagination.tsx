import { FC } from 'react';

import styles from './Pagination.module.css';

interface PaginationProps {
    current: number;
    top: number;
    prevDisabled: boolean;
    nextDisabled: boolean;
    handleClick: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
    current,
    top,
    prevDisabled,
    nextDisabled,
    handleClick,
}) => {
    return (
        <div className={styles.container}>
            <button
                className={styles['arrow-button']}
                onClick={() => handleClick(current - 1)}
                disabled={prevDisabled}>
                ← PREV
            </button>
            <span className={styles['page-number']}>
                {current} | {top}
            </span>
            <button
                className={styles['arrow-button']}
                onClick={() => handleClick(current + 1)}
                disabled={nextDisabled}>
                NEXT →
            </button>
        </div>
    );
};

export default Pagination;
