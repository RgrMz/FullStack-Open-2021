import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ country, weather }) => {

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
      <h3>Weather in {country.capital}</h3>
      <div>
        <div><b>temperature:{weather.current.temperature} Celsius</b></div>
        <div><img src={weather.current.weather_icons[0]} /></div>
        <div><b>wind: </b> {weather.current.wind_speed} mph direction {weather.current.direction}</div>
      </div>
    </div>
  )
}

export default CountryDetails;