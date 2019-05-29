<template>
  <div>
    <v-container>
      <v-list class="light-blue">
        <v-list-tile-title class="white--text mb-1">Please select the location below:</v-list-tile-title>
        <v-list-tile
        tag="a"
          class="light-blue--text white my-1"
          v-for="(el,index) in getLocLists"
          :key="index"
        >
          <v-list-tile-title>location #{{index+1}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types.js";
export default {
  computed: {
    ...mapGetters({
      getLocLists: types.LOCATION_BELOW
    })
  }
};
</script>