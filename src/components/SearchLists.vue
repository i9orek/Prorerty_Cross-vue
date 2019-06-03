<template>
  <div>
    <v-container>
      <v-list class="light-blue">
        <v-list-tile-title class="white--text mb-1">Recent searches:</v-list-tile-title>
        <v-list-tile
        class="light-blue--text white my-1"
        v-for="(el,index) in getLists" 
        :key="index" 
        @click="doWithSearchList(el)">
          <v-list-tile-title>search #{{index+1}} ({{el.total_results}})</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import Menu from './Menu';
import { mapGetters, mapActions } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      getLists: types.SEARCH_LISTS
    })
  },
  methods: {
    ...mapActions({
      chosenSearchList: types.UPDATE_CHOSEN_SEARCH_LIST
    }),
    doWithSearchList(el) {
      this.$router.push({ name: "list", params: { id: el.listId } });
      this.chosenSearchList(el);
    }
  },
};
</script>