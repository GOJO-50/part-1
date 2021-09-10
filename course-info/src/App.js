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
      <Part part={props.part1} exercise={props.exercise1}/>
      <Part part={props.part2} exercise={props.exercise2}/>
      <Part part={props.part3} exercise={props.exercise3}/>
      </>
    )
  }
  const Total = (props) => {
    return(
      <>
      <p>Number of exercise {props.total}</p>
      </>
    )
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name:'Fundamentals of React',
    exercise1: 10}
  const part2 = {
    name: 'Using props to pass data',
    exercise2: 7}
  const part3 = {
    name:'State of a component',
    exercise3: 14}
 
  return(
  <>
   <Header course={course}/>
   <Content 
        part1={part1.name} exercise1={part1.exercise1}
        part2={part2.name} exercise2={part2.exercise2} 
        part3={part3.name} exercise3={part3.exercise3}
    />
   <Total total={part1.exercise1+part2.exercise2+part3.exercise3}/>
  </>
  )
 }
 

export default App;