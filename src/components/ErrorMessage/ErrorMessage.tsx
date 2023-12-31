import { FC } from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage: FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles['error-title']}>404</div>
            </div>
            <div>
                <p className={styles['message-title']}>
                    Oops! There has been an error
                </p>
                <p className={styles['message-subtitle']}>
                    We couldn't find the page you were looking for!
                </p>
            </div>
        </div>
    );
};

export default ErrorMessage;
