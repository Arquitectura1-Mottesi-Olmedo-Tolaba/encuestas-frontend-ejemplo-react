import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchAcademicOffer(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchAcademicOfferSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchAcademicOfferFromDegree(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchAcademicOfferFromDegreeSuccess(academicOffers) {
  const byId = keyBy(academicOffers, (academicOffer) => academicOffer.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId}};
}

export function submitAcademicOffer(payload) {
  return {type: actionTypes.SUBMIT_ACADEMIC_OFFER, payload};
}

export function submitAcademicOfferSuccess(payload) {
  return {type: actionTypes.SUBMIT_ACADEMIC_OFFER_SUCCESS, payload};
}
