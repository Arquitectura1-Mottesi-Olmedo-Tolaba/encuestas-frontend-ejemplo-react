import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as academicOffersActions from './actionCreators';

export function fetchAcademicOffer(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/academicOffer/${id}`)
      ).map(res => academicOffersActions.fetchAcademicOfferSuccess(res.data));
    });
}

export function fetchAcademicOfferFromDegree(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/academicOffers/${id}`)
      ).map(res => academicOffersActions.fetchAcademicOfferFromDegreeSuccess(res.data))
    });
}

export function submitAcademicOffer(action$) {
  return action$.ofType(actionTypes.SUBMIT_ACADEMIC_OFFER)
    .map(action => action.payload)
    .switchMap(courseSelected => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8081/academicOffer`, courseSelected)
        ).map(res => academicOffersActions.submitAcademicOfferSuccess(res.data)),
        Observable.of(push('/degrees'))
      );
    });
}
