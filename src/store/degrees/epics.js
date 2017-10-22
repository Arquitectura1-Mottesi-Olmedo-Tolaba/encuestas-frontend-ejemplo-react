import { keyBy } from 'lodash';
import axios from 'axios';
import querystring from 'querystring';
import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';

import * as actionTypes from './actionTypes';
import * as degreesActions from './actionCreators';

export function fetchDegree(action$) {
  return action$.ofType(actionTypes.FETCH_ONE)
    .map(action => action.payload)
    .switchMap(id => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/degrees/${id}`)
      ).map(res => degreesActions.fetchDegreeSuccess(res.data));
    });
}

export function fetchDegrees(action$) {
  return action$.ofType(actionTypes.FETCH_COLLECTION)
    .map(action => action.payload)
    .switchMap(params => {
      return Observable.fromPromise(
        axios.get(`http://localhost:8081/degrees?${querystring.stringify(params)}`)
      ).map(res => degreesActions.fetchDegreesSuccess(res.data, params));
    });
}

export function updateDegree(action$) {
  return action$.ofType(actionTypes.UPDATE)
    .map(action => action.payload)
    .switchMap(degree => {
      return Observable.merge(
        Observable.fromPromise(
          axios.put(`http://localhost:8081/degrees/${degree.id}`, degree)
        ).map(res => degreesActions.updateDegreeSuccess(res.data)),
        Observable.of(push('/degrees'))
      );
    });
}

export function createDegree(action$) {
  return action$.ofType(actionTypes.CREATE)
    .map(action => action.payload)
    .switchMap(degree => {
      return Observable.merge(
        Observable.fromPromise(
          axios.post(`http://localhost:8081/degrees`, degree)
        ).map(res => degreesActions.createDegreeSuccess(res.data)),
        Observable.of(push('/degrees'))
      );
    });
}

export function deleteDegree(action$) {
  return action$.ofType(actionTypes.DELETE)
    .map(action => action.payload)
    .switchMap(degree => {
      return Observable.fromPromise(
        axios.delete(`http://localhost:8081/degrees/${degree.id}`)
      ).map(res => degreesActions.deleteDegreeSuccess(degree));
    });
}
