<template>
  <div>
    <v-layout class="mt-2">
      <v-flex md10 xs10 lg10  >
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
      <h2>Favorites</h2>
      <v-layout row wrap class="mt-1">
        <v-flex
          class="ma-1"
          v-for="item in favorites"
          :key="item.listId"
        >
          <v-card>
            <v-responsive class="pa-2">
              <v-img height="200px" :src="item.img_url"/>
            </v-responsive>
            <v-card-text class="light-blue--text">
              <h3 class="black--text mb-1">{{item.price_formatted}}</h3>
              <h4>{{item.title}}</h4>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters({
      favorites: types.FAVORITES
    })
  },
};
</script>
