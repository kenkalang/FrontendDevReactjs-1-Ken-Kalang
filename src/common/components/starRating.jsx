import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key={filledStars} icon={faStarHalfAlt} />);
    }

    while (stars.length < 5) {
        stars.push(
            <FontAwesomeIcon
                key={stars.length}
                icon={faStar}
                style={{ opacity: '0.25' }}
            />,
        );
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
