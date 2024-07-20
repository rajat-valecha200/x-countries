import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://xcountries-backend.azurewebsites.net/all')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err); 
                setError(err);
                setLoading(false);
            });
    }, []);

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px'
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div style={containerStyle}>
            {countries.map((country) => (
                <CountryCard key={country.abbr} name={country.name} flag={country.flag} abbr={country.abbr} />
            ))}
        </div>
    );
};

export default Countries;
