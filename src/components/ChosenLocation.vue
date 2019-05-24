<template>
  <div>
    <h1>Property details</h1>
    <button>add to favorites</button>
    <div>
      <h2>{{location.price_formatted}}</h2>
      <h3>{{location.title}}</h3>
      <img :src="location.img_url">
      <h4>{{location.bedroom_number}} bed, {{location.bathroom_number}} bathroom</h4>
      <p>{{location.summary}}</p>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      location: types.CHOSEN_LOCATION
    })
  }
};
</script>