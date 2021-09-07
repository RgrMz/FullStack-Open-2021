import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNumberChange = (event) =>
    setNewName(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, id: persons.lenght + 1}
    setPersons(persons.concat(newPerson))
    setNewName('')
    console.log(persons)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.id}>{person.name}</div>)}
    </div>
  )
}

export default App