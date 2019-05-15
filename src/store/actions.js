import * as types from './types';
import axios from 'axios';

export default {
  [types.UPDATE_DATA]: ({commit}, payload) => {
     axios.get(`https://jsonplaceholder.typicode.com/${payload}`)
     .then(({
           data
         }) => {
         let titles = data.map(el=>el.title);
         commit(types.MUTATE_UPDATE_DATA, titles)})
  }
}
