import React, { useState } from 'react'

const Statistics = ({all, good, bad, neutral}) => {
    

    if (all === 0){
      return(
        <>
        <p>No feedback given</p>
        </>
      )
    }
     else{
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
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = () => {
  return good+neutral+bad
  }

  const clickOnGood = () => {
    setGood(good + 1)
  }
  const clickOnNeutral = () => {
    setNeutral(neutral + 1)
  }
  const clickOnBad = () => {
    setBad (bad + 1)
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={clickOnGood}>
        good
      </button>
      <button onClick={clickOnNeutral}>
        neutral
      </button>
      <button onClick={clickOnBad}>
        bad
      </button>

    <Statistics  good={good} neutral={neutral} bad={bad} all={all()}/>

    </div>
  )
}
export default App