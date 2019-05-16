/* eslint-disable */

import * as types from './types';
import axios from 'axios-jsonp-pro';

export default {
  [types.UPDATE_SEARCH_LISTS]: ({commit}, payload) => {
    axios.jsonp(
      `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&place_name=${payload}`
      )
      .then(({response}) => {
        // if(response.)
        console.log(response);
        commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}