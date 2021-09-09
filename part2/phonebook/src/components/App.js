import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Numbers from './Numbers'
import personsService from '../services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState(persons)

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
      setPersonsToShow(initialPersons)
    })

  }, [])

  const handleNameChange = (event) =>
    setNewName(event.target.value)

  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) => {
    if (filter.length === 0)
      setPersonsToShow(persons)
    setFilter(event.target.value)
    const personsFiltered = persons.filter(person => {
      return new RegExp(`^${filter.toLowerCase()}`).test(person.name.toLowerCase())
    })
    if (personsFiltered.length !== 0)
      setPersonsToShow(personsFiltered)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const duplicated = persons.find(person => person.name === newName)
    if (typeof duplicated !== 'undefined') {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number?`)) {
        const changedPerson = { ...duplicated, number: newNumber }
        console.log(changedPerson)
        personsService
          .update(changedPerson)
          .then(updated => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : updated))
            setPersonsToShow(persons.map(person => person.id !== changedPerson.id ? person : updated))
            setNewName('')
            setNewNumber('')
            alert('NNumber changed correctly')
          })
      }
    }

    else {
      const newPerson = { name: newName, id: persons[persons.length - 1].id + 1, number: newNumber }
      personsService.create(newPerson).then(newPerson => {
        setPersons(persons.concat(newPerson))
        setPersonsToShow(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        alert('New person and number added correctly')
      })
    }
  }

  const deletePerson = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService.deletePerson(id).then(confirmation => {
        console.log(confirmation)
        setPersons(persons.map(person => person.id !== id))
        setPersonsToShow(persons.map(person => person.id !== id))
        setNewName('')
        setNewNumber('')
        alert('Person and number deleted correctly')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber}
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
        addPerson={addPerson} />
      <h2>Numbers</h2>
      <div>
        <Numbers personsToShow={personsToShow} deletePerson={deletePerson} />
      </div>
    </div>
  )
}

export default App