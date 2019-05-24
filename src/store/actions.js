/* eslint-disable */

import * as types from './types';
import {
  AMBIGUOUS_LOCATION,
  MISSPELLED_LOCATION,
  LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION,
  LISTINGS_OF_BEST_AMBIGUOUS_LOCATION,
  LISTINGS_LARGE_LOCATION
} from '../constants/constants';
import axios from 'axios-jsonp-pro';

const setIdToList = (item) => {
  const id = Math.floor(Math.random() * 10000);
  return item.listId = id;
};

const toLocalStorage = (getterName, locStorageItemName) => {
  const itemValue = JSON.stringify(getterName);
  localStorage.setItem(locStorageItemName, itemValue);
};

export default {
  [types.UPDATE_SEARCH_LISTS]: ({
    commit,
    getters
  }, payload) => {


    axios.jsonp(
        `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&place_name=${payload}`
      )
      .then(({
        response
      }) => {
        const list = setIdToList(response);
        const code = response.application_response_code;
        if (code === AMBIGUOUS_LOCATION || code === MISSPELLED_LOCATION) {
          commit(types.MUTATE_UPDATE_LOCATION_BELOW, response);
          commit(types.CURRENT_COMPONENT_NAME, 'location-list');
        } else if (code === LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION || code ===
          LISTINGS_OF_BEST_AMBIGUOUS_LOCATION || code === LISTINGS_LARGE_LOCATION) {
          commit(types.MUTATE_UPDATE_SEARCH_LISTS, response);
          commit(types.CURRENT_COMPONENT_NAME, 'search-lists');
          toLocalStorage(getters[types.SEARCH_LISTS], 'searchLists');
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
    commit,
    getters
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
        toLocalStorage(getters[types.SEARCH_LISTS], 'searchLists');
      })
  },
  [types.UPDATE_CHOSEN_SEARCH_LIST]: ({
    commit
  }, payload) => {
    commit(types.CHOSEN_SEARCH_LIST, payload);
  },
  [types.SET_CHOSEN_LOCATION]: ({
    commit
  }, payload) => {
    const list = setIdToList(payload);
    commit(types.MUTATE_CHOSEN_LOCATION, payload);
  },
  [types.UPDATE_FAVORITES]: ({
    commit,
    getters
  }, payload) => {
    commit(types.SAVE_TO_FAVORITES, payload);
    toLocalStorage(getters[types.FAVORITES], 'favorites');
  },
  // [types.DELETE_FROM_FAVORITES]:({commit,getters},payload)=>{

  // }
}
