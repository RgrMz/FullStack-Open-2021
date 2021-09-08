import React, {useState, useEffect} from 'react';
import axios from "axios";

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
        countriesToShow.map(country => <div key={country.alphacode2}>{country.name}</div>)}
      {countriesToShow.length === 1 ?
        <div>
          <br/>
          <div>Capital: {countriesToShow[0].capital}</div>
          <div>Population : {countriesToShow[0].population}</div>
          <h2>languages</h2>
          <ul>
            {countriesToShow[0].languages.map(language => 
              <li key={language.iso639_1}>{language.name}</li>)}
          </ul>
          <img src={countriesToShow[0].flag} height='300px' width='500px'/>
        </div> : ''}
    </div>
  );
}

export default App;
