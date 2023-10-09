import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

import styles from './Root.module.css';

const Root: FC = () => {
    return (
        <div className="container">
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
