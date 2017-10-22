import React from 'react';
import { CourseRow } from './CourseRow';

export const CourseList = ({courses, addCourse}) => {
  return (
    <div>
      {courses.map(course => CourseRow({course, addCourse}))}
    </div>
  )
};
//
