import React, { useState } from 'react';
import CountryDetails from './CountryDetails';

const Country = ({ country }) => {

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      <div>
        {country.name} <button onClick={() =>
          setShowDetails(!showDetails)}>show</button>
      </div>
      <div>
          {showDetails ? <CountryDetails country={country} /> : null}
      </div>
    </div>
  )
}

export default Country;