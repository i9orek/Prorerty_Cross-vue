// response CODES

export const AMBIGUOUS_LOCATION = '200';
export const MISSPELLED_LOCATION = '202';
export const LISTINGS_OF_ONE_UNAMBIGUOUS_LOCATION = '100';
export const LISTINGS_OF_BEST_AMBIGUOUS_LOCATION = '101';
export const LISTINGS_LARGE_LOCATION = '110';

//Getters

export const SEARCH_LISTS = 'searchLists';
export const LOCATION_BELOW = 'locationBelow';
export const CURRENT_COMPONENT = 'currentComponent';

//Mutations

export const MUTATE_UPDATE_SEARCH_LISTS = 'mutateUpdateSearchLists';
export const MUTATE_UPDATE_LOCATION_BELOW = 'mutateUpdateLocationBelow';
export const CURRENT_COMPONENT_NAME = 'curCompName';
export const CURRENT_REQUEST_ERROR = 'currentRequestError';
export const SEARCH_BY_GPS = 'searchByGPS';
export const CHOSEN_SEARCH_LIST = 'chosenSearchList';

//Actions

export const UPDATE_SEARCH_LISTS = 'updateSearchLists';
export const UPDATE_SEARCH_BY_GPS = 'updateSearchByGPS';
export const UPDATE_CURRENT_COMPONENT_NAME = 'updateCurCompName'
export const UPDATE_CHOSEN_SEARCH_LIST = 'updateChosenSearchList';