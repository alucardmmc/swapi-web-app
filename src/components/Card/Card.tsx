import { FC } from 'react';

interface CardProps {
    title: string;
}

const Card: FC<CardProps> = ({ title }) => {
    return (
        <div className="container">
            <p>{title}</p>
        </div>
    );
};

export default Card;
