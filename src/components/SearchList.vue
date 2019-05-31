<template>
  <div>
    <v-layout class="mt-2">
      <v-flex md10 xs10 lg10>
        <v-btn icon @click="$router.go(-1)">
          <v-icon large color="white">arrow_back</v-icon>
        </v-btn>
      </v-flex>
      <v-flex md12 xs12 lg12  class="my_home">
        <v-btn icon to="/">
          <v-icon large color="white">home</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-container class="pt-1">
      <h2>search result ( {{currentListings.listings.length}} of {{currentListings.total_results}} matches)</h2>
      <v-layout row wrap class="mt-1">
        <v-flex
          tag="a"
          class="ma-1"
          v-for="(el,index) in currentListings.listings"
          :key="index"
          @click="goToItemRoute(el)"
        >
          <v-card>
            <v-responsive class="pa-2">
              <v-img height="200px" :src="el.img_url"/>
            </v-responsive>
            <v-card-text class="light-blue--text">
              <h3 class="black--text mb-1">{{el.price_formatted}}</h3>
              <h4>{{el.title}}</h4>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  props: ["id"],

  computed: {
    ...mapGetters({
      getLists: types.SEARCH_LISTS,
      currentListings:types.GET_CHOSEN_SEARCH_LIST
    }),
  },
  methods: {
    ...mapActions({
      setChosenLocation: types.SET_CHOSEN_LOCATION
    }),
    goToItemRoute(el) {
      this.setChosenLocation(el);
      this.$router.push({ name: "location", params: { title: el.title } });
    },
  }
};
</script>

<style>
  /* .my_home{
    position: relative;
    left: calc(100% - 66px)
  } */
</style>
