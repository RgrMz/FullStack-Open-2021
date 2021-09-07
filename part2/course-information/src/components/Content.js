import React from 'react'
import Part from './Part'
import Total from './Total'
import Header from './Header'

const Content = ({ courses }) => {
  let parts = courses.map(course => 
    course.parts.map((part => <Part key={part.id} part={part} />))
  )
  let headers = courses.map(course => <Header key={course.id} course={course} />)
  let totals = courses.map(course => <Total key={course.id} course={course} />)
  return (
    <div>
      {headers[0]}
      {parts[0]}
      {totals[0]}
      {headers[1]}
      {parts[1]}
      {totals[1]}
    </div>
  )
}

export default Content;