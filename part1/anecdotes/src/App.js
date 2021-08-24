import React, { useState } from 'react'

let points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

const Button = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(anecdotes[0])
  const [votes, setVotes] = useState(points)
  const [mostVoted, setMostVoted] = useState(0)

  const randomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(anecdotes[randomIndex])
  }

  const updateVotes = () => {
    let key = anecdotes.findIndex(anecdote => anecdote === selected)
    const newVotes = { ...votes }
    newVotes[key] += 1
    setVotes(newVotes)
    let votesArray = Object.values(votes)
    let maxVotes = Math.max(...votesArray)
    setMostVoted(Object.keys(votes).find(key => votes[key] === maxVotes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {selected}
      <p>has {votes[anecdotes.findIndex(anecdote => anecdote === selected)]} votes</p>
      <Button text="next anecdote" onClick={randomAnecdote} />
      <Button text="vote" onClick={updateVotes} />
      <h1>Anecdote with ther most votes</h1>
      {anecdotes[mostVoted]}
      <p>has {votes[anecdotes.findIndex(anecdote => anecdote === anecdotes[mostVoted])]} votes</p>
    </div>
  )
}

export default App
