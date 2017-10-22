import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import degrees from './degrees/reducer';
import academicOffers from './academicOffers/reducer';

export default combineReducers({
  auth,
  degrees,
  academicOffers,
  routing: routerReducer,
});
