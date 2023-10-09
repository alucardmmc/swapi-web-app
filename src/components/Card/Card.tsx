import { FC } from 'react';
import R2d2Svg from '../../assets/svg/r2d2.svg';

import styles from './Card.module.css';

interface CardProps {
    title: string;
    subtitle: string;
}

const Card: FC<CardProps> = ({ title, subtitle }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={R2d2Svg} alt="not found" />
            </div>
            <div className={styles.details}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
