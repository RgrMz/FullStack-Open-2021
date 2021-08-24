import React, { useState } from 'react'

const Button = props => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Feedback = props => {
  return (
    <>
      <h1>Give feedback</h1>
      <Button text={props.buttons_text[0]} onClick={props.updateGood} />
      <Button text={props.buttons_text[1]} onClick={props.updateNeutral} />
      <Button text={props.buttons_text[2]} onClick={props.updateBad} />
    </>
  )
}

const Statistics = props => {
  let totalVotes = props.votesGood + props.votesNeutral + props.votesBad
  let average = (props.votesGood - props.votesBad) / totalVotes
  let positive = `${((props.votesGood / totalVotes) * 100)} %`
  if (totalVotes > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <thead>
            <tr>
              <th>Statistic</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <StatisticLine text={props.votes_text[0]}
                  votes={props.votesGood} />
            </tr>
            <tr>
                <StatisticLine text={props.votes_text[1]}
                  votes={props.votesNeutral} />
            </tr>
            <tr>
                <StatisticLine text={props.votes_text[2]}
                  votes={props.votesBad} />
            </tr>
            <tr>
                <StatisticLine text="all"
                  votes={totalVotes} />
            </tr>
            <tr>
                <StatisticLine text="average" votes={average} />
            </tr>
            <tr>
                <StatisticLine text="positive" votes={positive} />
            </tr>
          </tbody>
        </table>
      </>
    )
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

}

const StatisticLine = props => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.votes}</td>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const FEEDBACK_TEXT = ['good', 'neutral', 'bad']

  const updateGood = () => setGood(good + 1)
  const updateNeutral = () => setNeutral(neutral + 1)
  const updateBad = () => setBad(bad + 1)
  return (
    <div>
      <Feedback buttons_text={FEEDBACK_TEXT} updateGood={updateGood}
        updateNeutral={updateNeutral} updateBad={updateBad} />
      <Statistics votes_text={FEEDBACK_TEXT} votesGood={good}
        votesNeutral={neutral} votesBad={bad} />
    </div>
  )
}

export default App