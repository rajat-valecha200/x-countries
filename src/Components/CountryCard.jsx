const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const flagStyle = {
    width: '100%',
    height: 'auto'
};

const CountryCard = ({ name, flag, abbr }) => {
    return (
        <div style={cardStyle}>
        <img src={flag} alt={`${name} flag`} style={flagStyle} />
        <h2>{name}</h2>
        {/* <p>Abbreviation: {abbr}</p> */}
        </div>
    );
};

export default CountryCard;