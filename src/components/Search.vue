<template>
  <div>
    <v-container>
      <v-layout row justify-space-between nowrap>
        <h2>Property Cross</h2>
        <v-btn small dark color="green" @click="goToItemRoute">my favorites</v-btn>
      </v-layout>
      <v-layout column>
        <div
          class="body-1 my_instruction_input"
        >“Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!”</div>
        <v-flex>
          <v-text-field
            autofocus="autofocus"
            dark
            ref="searchInput"
            type="text"
            v-model="query"
            @keyup.enter="onInputChange"
            @input="sameSearchToggle"
          />
        </v-flex>
      </v-layout>
        <v-alert v-if="sameSearch" :value="true" color="white" icon="info" outline>"YOU HAD ALREADY BEEN SEARCHING FOR THIS"</v-alert>
      <v-layout row justify-end>
        <v-btn color="primary" small @click="onInputChange">Go</v-btn>
        <v-btn color="primary" small @click="myGpsSearch(gps)">My location</v-btn>
      </v-layout>
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </v-container>
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
      gps: "51.684183,-3.431481",
      // autofocus: true,
      sameSearch:false
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
    onInputChange() {
      if (this.query === "") {
        return;
      }
      const searchQuery = this.query.toLowerCase();
      if (
        !this.searchLists.some(
          el => getProperty(["locations"], el)[0].place_name === searchQuery
        )
      ) {
        this.updateData(this.query);
      } else {
        this.sameSearch = true;
      }
      this.query = "";
    },
    myGpsSearch(gps) {
      this.updateByGps(gps);
      this.sameSearch = false;
    },
    goToItemRoute() {
      this.$router.push({ name: "favorites" });
    },
    sameSearchToggle(){
      this.sameSearch = false;
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

<style>
.my_instruction_input {
  margin: 25px 0;
}
</style>
