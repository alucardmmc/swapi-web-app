import { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorMessage: FC = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="container">
            <p>Image</p>
            <div className="message">
                <h1>Oops! There has been an error</h1>
                <div className="text-message">
                    <p>
                        We couldn't find the page you were looking for. Please
                        click this link to go back to the main page!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
