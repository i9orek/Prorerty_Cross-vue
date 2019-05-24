import * as types from './types';

export default {
  [types.MUTATE_UPDATE_SEARCH_LISTS]: (state, payload) => {
    state.searchLists = !state.searchLists.length ? [payload] : [...state.searchLists, payload];
  },
  [types.MUTATE_UPDATE_LOCATION_BELOW]: (state, payload) => {
    state.locationBelow = !state.locationBelow.length ? [payload] : [...state.locationBelow,
      payload
    ];
  },
  [types.CURRENT_COMPONENT_NAME]: (state, payload) => {
    state.currentComponent = payload;
  },
  [types.CURRENT_REQUEST_ERROR]: (state, payload) => {
    state.currentRequestError = payload;
  },
  [types.SEARCH_BY_GPS]: (state, payload) => {
    state.gpsSearchItem = payload;
  },
  [types.CHOSEN_SEARCH_LIST]: (state, payload) => {
    state.chosenSearchList = payload;
  },
  [types.MUTATE_CHOSEN_LOCATION]: (state, payload) => {
    state.chosenLocation = payload;
  }
}
