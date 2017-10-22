import React from 'react';
import { DegreeRow } from './DegreeRow';

export const DegreeList = ({degrees, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {degrees.map(degree => DegreeRow({degree, onDelete}))}
      </tbody>
    </table>
  )
};
