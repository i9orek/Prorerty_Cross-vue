<template>
  <div class="search-wrapper">
    <h2>Property Cross</h2>
    <button>Faves</button>
    <p>“Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!”</p>
    <input ref="searchInput" type="text" v-model="query" @keyup.enter = "onInputChange(query)"/>
    <button @click="onInputChange(query)">Go</button>
    <button @click="updateByGps(gps)">My location</button>
    <div class="recent_searches"></div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      query: "",
      gps:'51.684183,-3.431481',//default prop , need to change 
    };
  },
  methods: {
    ...mapActions({
      updateData: types.UPDATE_SEARCH_LISTS,
      updateByGps:types.UPDATE_SEARCH_BY_GPS
    }),
    clearInput() {
      this.$refs.searchInput.value = "";
    },
    onInputChange(query){
      this.updateData(query);
      this.clearInput();
    }
  }
};
</script>

<style>
</style>
