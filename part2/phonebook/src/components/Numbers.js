import React from 'react'

const Numbers = ({personsToShow}) => {
  return (
    <>
      {personsToShow.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
    </>
  )
}

export default Numbers;
