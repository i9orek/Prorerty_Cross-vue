<template>
  <div>
    <h2>Favourites</h2>
    <ul class="favourite-list">
      <li v-for="item in favorites" :key="item.listId">
        <div>
          <img :src="item.img_url">
          <h3>{{item.price_formatted}}</h3>
          <h4>{{item.title}}</h4>
        </div>
      </li>
    </ul>
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
  }
};
</script>

<style>
.favourite-list {
  list-style: none;
}
.favourite-list li {
  border: 1px solid lightgray;
  padding: 10px 0;
}
</style>
