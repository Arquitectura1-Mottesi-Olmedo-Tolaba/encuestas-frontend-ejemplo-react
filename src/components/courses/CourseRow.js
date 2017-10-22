import React from 'react';
import { Link } from 'react-router';

export const CourseRow = ({course, addCourse}) => {
  return (
    <div className="panel panel-default" key={course.id}>
      <div className="panel-heading">
        <h3 className="panel-title">{course.id} - {course.subject.name}</h3>
      </div>
      <div className="panel-body">
        <p> Profesor: {course.professor.name}</p>
        {course.timelines.map(timeline => TimelineRow({timeline}))}
        <a onClick={addCourse.bind(this, course)} className="btn btn-primary">Agregar</a>
      </div>
    </div>
  )
};

const TimelineRow = ({timeline}) => {
  return (
    <p key={timeline.id}>
      Dia: {timeline.day} desde las {timeline.start} hasta las {timeline.end}
    </p>
  )
};
