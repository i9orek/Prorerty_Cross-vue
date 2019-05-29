<template>
  <div>
    <v-container>
      <h2>search result ( {{currentSearchList.total_pages}} of {{currentListings.length}} matches)</h2>
      <v-layout row wrap class="mt-1">
        <v-flex
          tag="a"
          class="ma-1"
          v-for="(el,index) in currentListings"
          :key="index"
          @click="goToItemRoute(el)"
        >
          <v-card>
            <v-responsive class="pa-2">
              <v-img height="200px" :src="el.img_url" />
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
      getLists: types.SEARCH_LISTS
    }),
    currentSearchList() {
      return this.getLists.find(el => el.listId === this.id);
    },
    currentListings() {
      return this.currentSearchList.listings;
    }
  },
  methods: {
    ...mapActions({
      setChosenLocation: types.SET_CHOSEN_LOCATION
    }),
    goToItemRoute(el) {
      this.setChosenLocation(el);
      this.$router.push({ name: "location", params: { title: el.title } });
    }
  }
};
</script>