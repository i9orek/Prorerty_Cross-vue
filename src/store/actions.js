/* eslint-disable */

import * as types from './types';
import {
  AMBIGUOUS_LOCATION,
  MISSPELLED_LOCATION,
  LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION,
  LISTINGS_OF_BEST_AMBIGUOUS_LOCATION,
  LISTINGS_LARGE_LOCATION,
  API_REQUEST_URL
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

const mutateSearchLists = (res, curCompName, getterName, commit, getters) => {
  commit(types.MUTATE_UPDATE_SEARCH_LISTS, res)
  commit(types.CURRENT_COMPONENT_NAME, curCompName);
  toLocalStorage(getters[types.SEARCH_LISTS], getterName);
}

export default {
  [types.UPDATE_SEARCH_LISTS]: async ({
    commit,
    getters
  }, payload) => {
    try {
      const {response} = await axios.jsonp(
        `${API_REQUEST_URL}&place_name=${payload}`
      );
      const code = response.application_response_code;
      setIdToList(response);
      if (code === AMBIGUOUS_LOCATION || code === MISSPELLED_LOCATION) {
        commit(types.MUTATE_UPDATE_LOCATION_BELOW, response);
        commit(types.CURRENT_COMPONENT_NAME, 'location-list');
      } else if (code === LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION || code ===
        LISTINGS_OF_BEST_AMBIGUOUS_LOCATION || code === LISTINGS_LARGE_LOCATION) {
        mutateSearchLists(response, 'search-lists', 'searchLists', commit, getters);
      } else {
        commit(types.CURRENT_COMPONENT_NAME, 'error-page');
        commit(types.CURRENT_REQUEST_ERROR, response);
      }
    } catch (e) {
      alert(e)
    }
  },

  [types.UPDATE_SEARCH_BY_GPS]: async ({
    commit,
    getters
  }, payload) => {
    try {
      const {response} = await axios.jsonp(
        `${API_REQUEST_URL}&centre_point=${payload}`
      );
      setIdToList(response);
      mutateSearchLists(response, 'search-lists', 'searchLists', commit, getters);
    } catch (e) {
      alert(e)
    }
  },
  [types.UPDATE_CHOSEN_SEARCH_LIST]: ({
    commit
  }, payload) => {
    commit(types.CHOSEN_SEARCH_LIST, payload);
  },
  [types.SET_CHOSEN_LOCATION]: ({
    commit
  }, payload) => {
    setIdToList(payload);
    commit(types.MUTATE_CHOSEN_LOCATION, payload);
    
  },
  [types.UPDATE_FAVORITES]: ({
    commit,
    getters
  }, payload) => {
    commit(types.SAVE_TO_FAVORITES, payload);
    toLocalStorage(getters[types.FAVORITES], 'favorites');
  },
  [types.UPDATE_DELETE_FROM_FAVORITES]: ({
    commit,
    getters
  }, payload) => {
    commit(types.DELETE_FROM_FAVORITES, payload);
    toLocalStorage(getters[types.FAVORITES], 'favorites');
  }
}