import { FC } from 'react';
import SpinningGif from '../../assets/gif/spinning.gif';

import styles from './Loading.module.css';

const Loading: FC = () => {
    return (
        <div className={styles.container}>
            <img src={SpinningGif} alt="loading" className={styles.spinner} />
            <p className={styles.message}>Loading...</p>
        </div>
    );
};

export default Loading;
