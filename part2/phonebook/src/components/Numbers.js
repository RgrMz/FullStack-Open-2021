import React from 'react'

const Numbers = ({ personsToShow, deletePerson }) => {
  return (
    <>
      {personsToShow.map(person =>
        <div key={person.id}>{person.name} {person.number}
          <button onClick={() => deletePerson(person.name, person.id)}>
            delete
          </button>
        </div>)}
    </>
  )
}

export default Numbers;
