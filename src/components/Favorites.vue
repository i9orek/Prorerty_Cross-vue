<template>
  <div>
    <my-menu></my-menu>
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
import Menu from './Menu';
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters({
      favorites: types.FAVORITES
    })
  },
  components:{
    "my-menu":Menu
  }
};
</script>
