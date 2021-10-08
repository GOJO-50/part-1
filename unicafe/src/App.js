import React, { useState } from 'react'

const Button = ({click, text}) => {
return(
  <>
  <button onClick={click}>
        {text}
      </button>
  </>
)
}
const StatisticLine = ({text, value}) => {
  return(
    <>
    <table>
    <td>
      <tr>{text} {value}</tr>
    </td>
    </table>
    </>
  )
}

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
    <StatisticLine text= "Good" value={good} />
    <StatisticLine text= "Neutral" value={neutral} />
      <StatisticLine text= "Bad" value={bad} />
      <StatisticLine text= "All" value={all} />
      <StatisticLine text= "Average" value={all / 3} />
      <StatisticLine text= "Positive" value={((good+neutral) / 100) + '%'} />
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
      <Button text='Good'  click={clickOnGood}/>
      <Button text='Neutral'  click={clickOnNeutral}/>
      <Button text='Bad'  click={clickOnBad}/>

    <Statistics  good={good} neutral={neutral} bad={bad} all={all()}/>
   
    </div>
  )
}
export default App