<template>
  <ul>
    <li>
      <div>
        <div class="container">
          <h2>search result ({{currentListings.length}} of {{currentSearchList.total_pages}} matches)</h2>
          <div
            class="content"
            v-for="(el,index) in currentListings"
            :key="index"
            @click="goToItemRoute(el)"
          >
            <img :src="el.img_url">
            <h3>{{el.price_formatted}}</h3>
            <h4>{{el.title}}</h4>
          </div>
        </div>
      </div>
    </li>
  </ul>
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

<style>
li {
  list-style: none;
}
img {
  width: 180px;
}
.container {
  display: flex;
  flex-flow: column nowrap;
}
</style>