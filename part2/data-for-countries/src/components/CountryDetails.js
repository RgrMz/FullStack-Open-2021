import React from 'react';

const CountryDetails = ({country}) => {

  return (
    <div>
      <div>Capital: {country.capital}</div>
      <div>Population : {country.population}</div>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.iso639_1}>{language.name}</li>)}
      </ul>
      <img src={country.flag} height='300px' width='500px' />
    </div>
  )
}

export default CountryDetails;