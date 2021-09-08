import React, { useState, useEffect } from 'react';
import axios from "axios";
import Country from './components/Country';

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [countriesToShow, setCountriesToShow] = useState([])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    let countriesToShow = countries.filter(country => {
      return new RegExp(`^${search.toLowerCase()}`).test(country.name.toLowerCase())
    })
    setCountriesToShow(countriesToShow)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  return (
    <div>
      <div>{console.log(countriesToShow.length)}</div>
      find countries: <input value={search} onChange={handleSearchChange} />
      {countriesToShow.length > 10 ?
        <div>Too many matches, specify another filter</div> :
        countriesToShow.map(country => <Country key={country.alphacode2} country={country} />)
      }
    </div >
  );
}

export default App;
