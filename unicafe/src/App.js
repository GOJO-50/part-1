import React, { useState } from 'react'

const Statistics = (props) => {
    const {good , bad , neutral} = props
    return(
        <>
    <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {bad + neutral + good}</p>
      <p>Average {(bad + neutral + good)/3}</p>
      <p>Positive {(good + neutral) / 100}</p>
        </>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

    <Statistics  good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App