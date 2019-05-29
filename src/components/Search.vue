<template>
  <div class="search-wrapper">
    <h2>Property Cross</h2>
    <button @click="goToItemRoute">Faves</button>
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
import getProperty from "../utils/getProperty";
import SearchLists from "./SearchLists";
import LocationList from "./LocationList.vue";
import SearchError from "./SearchError.vue";
import SearchList from "./SearchList";
import Favorites from "./Favorites";

export default {
  data: function() {
    return {
      query: "",
      gps: "51.684183,-3.431481"
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
      let searchQuery = this.query.toLowerCase();
      if (
        !this.searchLists.some(
          el => getProperty(["locations"], el)[0].place_name === searchQuery
        )
      ) {
        this.updateData(query);
      } else {
        alert("YOU ALREADY FOUND THIS ");
      }
      this.clearInput();
    },
    goToItemRoute() {
      this.$router.push({ name: "favorites" });
    }
  },
  components: {
    "search-lists": SearchLists,
    "location-list": LocationList,
    "error-page": SearchError,
    "search-list": SearchList,
    favorites: Favorites
  }
};
</script>