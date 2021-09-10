import React from 'react'

const Header = (props) => {
    return(
   <>
   <h1>{props.course}</h1>
   </>
  )
  }
  const Part = (props) => {
    return(
      <p> {props.part}  {props.exercise}</p>
    )
  }
  const Content = (props) => {
    return(
      <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercise1}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercise2}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercise3}/>
      </>
    )
  }
  const Total = (props) => {
    return(
      <>
      <p>Number of exercise {props.parts[0].exercise1 + props.parts[1].exercise2 +props.parts[2].exercise3}</p>
      </>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name:'Fundamentals of React',
      exercise1: 10},
    {
      name: 'Using props to pass data',
      exercise2: 7},

    {
      name:'State of a component',
      exercise3: 14}
   
  ]
  
  return(
  <>
   <Header course={course}/>
   <Content parts = {parts}/>
   <Total parts={parts}/>
  </>
  )
 }
 

export default App;