<template>
  <div>
    <v-container>
      <v-layout row nowrap>
        <h1 class="mb-1">Property details</h1>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-card>
            <v-card-text>
              <h2>{{location.price_formatted}}</h2>
              <h3 class="light-blue--text">{{location.title}}</h3>
            </v-card-text>
            <v-responsive class="pa-2">
              <v-img height="300px" :src="location.img_url"/>
            </v-responsive>
            <v-layout row nowrap justify-space-between>
              <v-card-text>
                <h4>{{location.bedroom_number}} bed, {{location.bathroom_number}} bathroom</h4>
                <div>{{location.summary}}</div>
              </v-card-text>
              <v-card-actions class="mb-3 mr-3">
                <v-btn icon class="mt-2" v-if="typeOfBtn" @click="pushToFavorites(location)">
                  <v-icon x-large>favorite</v-icon>
                </v-btn>
                <v-btn icon class="mt-2" v-else @click="removeFromFavorites(location)">
                  <v-icon x-large color="red">favorite</v-icon>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters, mapActions } from "vuex";
import getProperty from "../utils/getProperty";
export default {
  computed: {
    ...mapGetters({
      location: types.CHOSEN_LOCATION,
      favorites: types.FAVORITES
    }),
    typeOfBtn() {
      if (!this.favorites.length) {
        return true;
      }
      return !this.favorites.some(
        ({ title }) => title == getProperty(["title"], this.location)
      );
    }
  },
  methods: {
    ...mapActions({
      addToFavorites: types.UPDATE_FAVORITES,
      deleteFromFavorites: types.UPDATE_DELETE_FROM_FAVORITES
    }),
    filteredFavorites({ title }) {
      const updatedFavorites = this.favorites.filter(el => {
        return el.title !== title;
      });
      return updatedFavorites;
    },
    pushToFavorites(location) {
      this.addToFavorites(location);
    },
    removeFromFavorites(location) {
      this.deleteFromFavorites(this.filteredFavorites(location));
    }
  }
};
</script>