import * as types from './types';

export default {
  [types.MUTATE_UPDATE_DATA]: (state, payload) => {
    state.responceData = [...state.responceData, ...payload]
  }
}
