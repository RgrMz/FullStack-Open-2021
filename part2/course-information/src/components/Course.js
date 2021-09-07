import React from 'react';
import Content from "./Content";

const Course = ({ courses }) => {

    return (
        <>
          <Content courses={courses} />
        </>
    )
}

export default Course;