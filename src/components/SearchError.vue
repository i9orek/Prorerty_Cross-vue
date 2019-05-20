<template>
  <div>
    <search></search>
    <p>{{errorText}}</p>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      errorText: types.CURRENT_REQUEST_ERROR
    })
  },
};
</script>

