/* eslint-disable */

import * as types from './types';
import axios from 'axios-jsonp-pro';

export default {
  [types.UPDATE_SEARCH_LISTS]: ({
    commit
  }, payload) => {
    axios.jsonp(
        `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&place_name=${payload}`
      )
      .then(({
        response
      }) => {
        let code = response.application_response_code;
        if (code === '200' || code === '202') {
          commit(types.MUTATE_UPDATE_LOCATION_BELOW, response);
          commit(types.CURRENT_COMPONENT_NAME, 'location-list');
        } else if (code === '100' || code === '101' || code === '110') {
          commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
          commit(types.CURRENT_COMPONENT_NAME, 'search-list');
        } else {
          commit(types.CURRENT_COMPONENT_NAME, 'error-page');
          commit(types.CURRENT_REQUEST_ERROR, response.errors);
        }
      })
      .catch(function (error) {
        console.log('SOME WENT WRONG');
      });
  },
  [types.UPDATE_SEARCH_BY_GPS]: ({
    commit
  }, payload) => {
    axios.jsonp(
        `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&centre_point=${payload}`
      )
      .then(({
        response
      }) => {
        commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
        commit(types.CURRENT_COMPONENT_NAME, 'search-list');
      })
  },
}
