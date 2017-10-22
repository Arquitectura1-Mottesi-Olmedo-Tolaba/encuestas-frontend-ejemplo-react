import { keyBy } from 'lodash';
import * as actionTypes from './actionTypes';

export function fetchDegree(payload) {
  return {type: actionTypes.FETCH_ONE, payload};
}

export function fetchDegreeSuccess(payload) {
  const byId = {[payload.id]: payload};
  return {type: actionTypes.FETCH_ONE_SUCCESS, payload: {byId}};
}

export function fetchDegrees(payload) {
  return {type: actionTypes.FETCH_COLLECTION, payload};
}

export function fetchDegreesSuccess(degrees, params) {
  const byId = keyBy(degrees, (degree) => degree.id);
  return {type: actionTypes.FETCH_COLLECTION_SUCCESS, payload: {byId, params}};
}

export function createDegree(payload) {
  return {type: actionTypes.CREATE, payload};
}

export function createDegreeSuccess(payload) {
  return {type: actionTypes.CREATE_SUCCESS, payload};
}

export function updateDegree(payload) {
  return {type: actionTypes.UPDATE, payload};
}

export function updateDegreeSuccess(payload) {
  return {type: actionTypes.UPDATE_SUCCESS, payload};
}

export function deleteDegree(payload) {
  return {type: actionTypes.DELETE, payload};
}

export function deleteDegreeSuccess(payload) {
  return {type: actionTypes.DELETE_SUCCESS, payload};
}
