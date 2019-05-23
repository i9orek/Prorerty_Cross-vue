<template>
  <div>
    <ul class="search-list">
      Recent searches:
      london
      <li v-for="(el,index) in getLists" :key="index" @click="doWithSearchList(el)">
        <p>search #{{index+1}} ({{el.total_pages}}) </p>
      </li>
    </ul>
  </div>
</template>

<script>
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
      setChosenItemId:types.UPDATE_CHOSEN_SEARCH_LIST,
    }),
    doWithSearchList({listId}){
      this.$router.push({name:'list',params:{id:listId}});
      this.setChosenItemId(listId);
    }
  }
};
</script>

<style>
.search-list {
  list-style: none;
}
.search-list li {
  border: 1px solid lightgray;
  padding: 10px 0;
}
</style>