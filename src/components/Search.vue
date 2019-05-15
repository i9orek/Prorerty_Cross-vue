<template>
  <div class="search-wrapper">
    <h2>Property Cross</h2>
    <button>Faves</button>
    <p>“Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location', to search in your current location!”</p>
    <input type="text">
    <button @click='updateData("posts")'>Go</button>
    <button>My location</button>
    <div class="recent_searches"></div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      updateData: types.UPDATE_DATA,
    })
  }
};
</script>

<style>
</style>
