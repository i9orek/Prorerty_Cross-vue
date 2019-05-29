<template>
  <v-app class="main_container light-blue white--text" >
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import getFromlocalStorage from "./store/getFromlocalStorage";
export default {
  created: getFromlocalStorage
};
</script>

<style>
  .main_container{
    max-width: 800px;
    margin: 0 auto;
  }
</style>
