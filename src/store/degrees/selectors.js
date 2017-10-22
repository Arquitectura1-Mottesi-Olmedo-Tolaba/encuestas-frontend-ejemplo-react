export function getParams(state) {
  return state.degrees.params;
}

export function getDegree(state, id) {
  return state.degrees.byId[id];
}

export function getDegrees(state) {
  return Object.values(state.degrees.byId);
}

export function getAcademicOffers(state) {
  return Object.values(state.degrees.byId)
}
