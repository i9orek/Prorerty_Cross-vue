import * as types from './types';

export default {
  [types.MUTATE_UPDATE_SEARCH_LISTS]: (state, payload) => {
    state.searchLists = !state.searchLists.length ? [payload] : [...state.searchLists,payload];
  },
  [types.MUTATE_UPDATE_LOCATION_BELOW]: (state, payload) => {
    state.locationBelow = !state.locationBelow.length ? [payload] : [...state.locationBelow, payload];
  }
}