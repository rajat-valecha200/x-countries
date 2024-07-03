import React from 'react';
import './CountryCard.css';

const CountryCard = ({ name, flag, abbr }) => {
    return (
        <div className="card">
            <img src={flag} alt={`${name} flag`} className="flag" />
            <h2>{name}</h2>
        </div>
    );
};

export default CountryCard;