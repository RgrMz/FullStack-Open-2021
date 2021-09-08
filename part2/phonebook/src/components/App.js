import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Numbers from './Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0, number: '644 87 89 94' },
    { name: 'Ada Lovelace', id: 1, number: '648 58 95 03'},
    {name: 'Dan Ahrk', id: 2, number: '634 89 95 05'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)
  
  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) => {
    if(filter.length === 0)
      setPersonsToShow(persons)
    setFilter(event.target.value)
    const personsFiltered = persons.filter(person => {
      return new RegExp(`^${filter.toLowerCase()}`).test(person.name.toLowerCase())
    })
    if(personsFiltered.length !== 0)
      setPersonsToShow(personsFiltered)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const duplicated = persons.find(person => person.name === newName)
    if (typeof duplicated !== 'undefined')
      alert(`${newName} is already added to the phonebook`)
    else {
      const newPerson = { name: newName, id: persons.length + 1, number: newNumber }
      setPersons(persons.concat(newPerson))
      setPersonsToShow(persons)
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} 
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} 
        addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Numbers personsToShow={personsToShow} />
    </div>
  )
}

export default App