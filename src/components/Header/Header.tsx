import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    const title = 'Swapi here!';

    return (
        <div className="container">
            <div className="logo">{title}</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
