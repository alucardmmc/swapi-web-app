import { FC } from 'react';
import { Link } from 'react-router-dom';
import DeathStarSvg from '../../assets/svg/death-star.svg';

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <div className={styles.container}>
            <div className="logo">
                <img src={DeathStarSvg} alt="logo" />
            </div>
            <ul className={styles['nav-list']}>
                <li className={styles['nav-item']}>
                    <Link to="/films" className={styles['nav-text']}>
                        Films
                    </Link>
                </li>
                <li className={styles['nav-item']}>
                    <Link to="/people" className={styles['nav-text']}>
                        People
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
