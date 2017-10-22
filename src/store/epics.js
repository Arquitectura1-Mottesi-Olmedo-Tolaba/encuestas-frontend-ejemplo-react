import { combineEpics } from 'redux-observable';
import { values } from 'lodash';

import * as degreesEpics from './degrees/epics';
import * as academicOffersEpics from './academicOffers/epics';

export default combineEpics(
  ...values(degreesEpics),
  ...values(academicOffersEpics)
);
