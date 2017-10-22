import React from 'react';
import { Link } from 'react-router';

export const AcademicOfferRow = ({academicOffer}) => {
  return (
    <tr key={academicOffer.id}>
      <td>{academicOffer.period.year || ""}</td>
      <td>{academicOffer.period.quarter || ""}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/academicOffer/${academicOffer.id}`} className="btn btn-primary">Ofertas Academica</Link>
        </div>
      </td>
    </tr>
  )
};
