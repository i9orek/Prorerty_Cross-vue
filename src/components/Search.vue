<template>
  <div class="search-wrapper">
    <h2>Property Cross</h2>
    <button>Faves</button>
    <p>“Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!”</p>
    <input ref="searchInput" type="text" v-model="query" @keyup.enter="onInputChange(query)">
    <button @click="onInputChange(query)">Go</button>
    <button @click="updateByGps(gps)">My location</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/types";
import SearchLists from "./SearchLists";
import LocationList from "./LocationList.vue";
import SearchError from "./SearchError.vue";
import SearchList from "./SearchList";

export default {
  data: function() {
    return {
      query: "",
      gps: "51.684183,-3.431481" //default prop , need to change
    };
  },
  computed: {
    ...mapGetters({
      currentComponent: types.CURRENT_COMPONENT,
      searchLists: types.SEARCH_LISTS
    })
  },
  methods: {
    ...mapActions({
      updateData: types.UPDATE_SEARCH_LISTS,
      updateByGps: types.UPDATE_SEARCH_BY_GPS
    }),
    clearInput() {
      this.$refs.searchInput.value = "";
    },
    onInputChange(query) {
      if (this.searchLists.some(el=>el.locations[0].place_name === this.query.toLowerCase()) === false) {
        this.updateData(query);
        this.clearInput();
        console.log(this.$store.state.searchLists);
        console.log('NEW SEARCH');
      }
      else{
        this.clearInput();
        alert("YOU ALREADY FIND THIS ");
        return
      }        
    },
  },
  components: {
    "search-lists": SearchLists,
    "location-list": LocationList,
    "error-page": SearchError,
    "search-list": SearchList
  }
};
</script>