import React from 'react';
import { OfferList } from './OfferList';
import { UserDegreeList } from './UserDegreeList';

export const UserTabs = ({offers, addOffer, deleteOffer, degrees, deleteDegree}) => {
  return (
    <div>
      <ul className="nav nav-tabs" role="tablist">
        <li role="presentation" className="active">
          <a href="#offers" aria-controls="home" role="tab" data-toggle="tab">Ofertas</a>
        </li>
        <li role="presentation">
          <a href="#degrees" aria-controls="profile" role="tab" data-toggle="tab">Materias Cursadas</a>
        /li>
      </ul>

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="offers">
          {
            offers.length > 0 &&
            <OfferList offers={offers} addOffer={addOffer} onDelete={deleteOffer}/>
          }
        </div>
        <div role="tabpanel" className="tab-pane" id="degrees">
          {
            degrees.length > 0 &&
            <UserDegreeList degrees={degrees} onDelete={deleteDegree}/>
          }
        </div>
      </div>
    </div>
  )
};
