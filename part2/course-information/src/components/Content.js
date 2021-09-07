import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = ({ course }) => {
    return (
      <div>
        <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} />
        <Total course={course} />
      </div>
    )
}

export default Content;