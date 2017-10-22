import React from 'react';
import { AcademicOfferRow } from './AcademicOfferRow';

export const AcademicOfferList = ({academicOffers}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Año</th>
        <th>Cuatrimestre</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {academicOffers.map(academicOffer => AcademicOfferRow({academicOffer}))}
      </tbody>
    </table>
  )
};
