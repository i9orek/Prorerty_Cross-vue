<template>
  <div>
    <v-layout row nowrap class="mt-4">
      <h2>There was a problem with your search </h2>
      <v-btn icon class="ma-0 ">
        <v-icon small color="white" @click="showOrHideError">help</v-icon>
      </v-btn>
    </v-layout>
    <p v-if="showError">( Error #{{error.status_code}} : "{{error.status_text}}" )</p>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      toggleError: false
    };
  },
  computed: {
    ...mapState({
      error: types.CURRENT_REQUEST_ERROR
    })
  },
  methods: {
    showOrHideError() {
      !this.toggleError ? true : false;
    }
  }
};
</script>

