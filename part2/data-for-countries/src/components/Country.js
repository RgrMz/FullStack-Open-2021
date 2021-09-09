import React, { useState, useEffect } from 'react';
import CountryDetails from './CountryDetails';
import axios from 'axios';

const Country = ({ country }) => {

  const [showDetails, setShowDetails] = useState(false)
  const [weather, setWeather] = useState({})

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
      .then(response => {
        setWeather(response.data)
        // Displays undefined, setState functions are async
        console.log(weather)
      })
  }, [])

  return (
    <div>
      <div>
        {country.name} <button onClick={() =>
          setShowDetails(!showDetails)}>show</button>
      </div>
      <div>
          {showDetails ? <CountryDetails country={country} weather={weather} /> : null}
      </div>
    </div>
  )
}

export default Country;