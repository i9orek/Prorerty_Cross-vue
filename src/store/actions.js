/* eslint-disable */

import * as types from './types';
import * as constants from '../constants/constants';
import axios from 'axios-jsonp-pro';

const setIdToList = function (item) {
  const id = Math.floor(Math.random()*10000);
  return item.listId = id;
}

export default {
  [types.UPDATE_SEARCH_LISTS]: ({
    commit
  }, payload) => {
    axios.jsonp(
        `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&place_name=${payload}`
      )
      .then(({response}) => {
        const list = setIdToList(response);
        const code = response.application_response_code;
        if (code === constants.AMBIGUOUS_LOCATION || code === constants.MISSPELLED_LOCATION) {
          commit(types.MUTATE_UPDATE_LOCATION_BELOW, response);
          commit(types.CURRENT_COMPONENT_NAME, 'location-list');
        } else if (code === constants.LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION || code === constants.LISTINGS_OF_BEST_AMBIGUOUS_LOCATION || code === constants.LISTINGS_LARGE_LOCATION) {
          commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
          commit(types.CURRENT_COMPONENT_NAME, 'search-lists');

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
        const list = setIdToList(response);
        commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
        commit(types.CURRENT_COMPONENT_NAME, 'search-lists');
      })
  },
  [types.UPDATE_CHOSEN_SEARCH_LIST]: ({commit}, payload) => {
    commit(types.CHOSEN_SEARCH_LIST, payload);
  }
}