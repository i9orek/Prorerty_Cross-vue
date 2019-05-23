<template>
  <div>
    <h1>Property details</h1>
    <button>add to favorites</button>
    <div>
      <h2>{{item.price_formatted}}</h2>
      <h3>{{item.title}}</h3>
      <img :src="item.img_url">
      <h4>{{item.bedroom_number}} bed, {{item.bathroom_number}} bathroom</h4>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      item: types.CHOSEN_ITEM
    })
  }
};
</script>

<style>
</style>
