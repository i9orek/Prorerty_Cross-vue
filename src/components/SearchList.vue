<template>
  <div>
    <my-menu></my-menu>
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
import Menu from './Menu';
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
  },
  components:{
    "my-menu":Menu
  }
};
</script>

<style>
  /* .my_home{
    position: relative;
    left: calc(100% - 66px)
  } */
</style>
