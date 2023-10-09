import { FC } from 'react';

import styles from './WelcomePage.module.css';

const WelcomePage: FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome!</h1>
            <p className={styles.message}>
                This website uses data from the Star Wars Api. Currently only 2
                endpoints can be checked right now: Films and People
            </p>
            <p className={styles.message}>
                You can filter by title/name and there's also pagination. The
                API shows 10 items per page.
            </p>
        </div>
    );
};

export default WelcomePage;
