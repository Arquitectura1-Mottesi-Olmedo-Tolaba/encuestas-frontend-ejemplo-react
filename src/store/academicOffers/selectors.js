export function getParams(state) {
  return state.academicOffers.params;
}

export function getAcademicOffer(state, id) {
  return state.academicOffers.byId[id];
}

export function getAcademicOffers(state) {
  return Object.values(state.academicOffers.byId)
}
