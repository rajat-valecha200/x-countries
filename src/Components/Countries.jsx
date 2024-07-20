import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

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
    const searchBar = {
        display: 'flex',
        margin: 'auto',
        maxWidth: '500px',
        width: '100%',
        height: '35px'
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div style={{backgroundColor:"#f4f4f4", padding: '10px'}}>
                <input
                    style={searchBar}
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div style={containerStyle}>
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                        <CountryCard
                            name={country.name}
                            flag={country.flag}
                            abbr={country.abbr}
                            className="countryCard"
                        />
                    ))
                ) : (
                    searchTerm && <div></div>
                )}
            </div>
        </div>
    );
};

export default Countries;
