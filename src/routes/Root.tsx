import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

const Root: FC = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
