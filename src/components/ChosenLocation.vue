<template>
  <div>
    <h1>Property details</h1>
    <button @click="filterAndPushToLocalStorage(location)">add to favorites</button>
    <div>
      <h2>{{location.price_formatted}}</h2>
      <h3>{{location.title}}</h3>
      <img :src="location.img_url">
      <h4>{{location.bedroom_number}} bed, {{location.bathroom_number}} bathroom</h4>
      <p>{{location.summary}}</p>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters, mapActions } from "vuex";
import getProperty from '../utils/getProperty';
export default {
  computed: {
    ...mapGetters({
      location: types.CHOSEN_LOCATION,
      favorites: types.FAVORITES
    }),
  },
  methods: {
    ...mapActions({
      addToFavorites: types.UPDATE_FAVORITES,
      removeFromFavorites:types.MINUS_FROM_FAVORITES
    }),
      filteredFavorites(location){
        const updatedFavorites = this.favorites.filter(el=>{
         return el.title !== location.title
        });
        return updatedFavorites;
      },
      filterAndPushToLocalStorage(location){
        if(this.favorites.some(el=>el.title === getProperty(['title'],location))){
          this.removeFromFavorites(this.filteredFavorites(location));
          this.addToFavorites(location);
          console.log(this.favorites);       
        }
        else{
          this.addToFavorites(location);
          console.log(this.favorites);
        }   
      }
    //---------------------------------------------------------------------
  }
};
</script>