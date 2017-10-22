import React from 'react';
import { Link } from 'react-router';

export const DegreeRow = ({degree, onDelete}) => {
  return (
    <tr key={degree.id}>
      <td>{degree.id}</td>
      <td>{degree.name}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/academicOffers/${degree.id}`} className="btn btn-primary">Ofertas Academicas</Link>
        </div>
      </td>
    </tr>
  )
};
