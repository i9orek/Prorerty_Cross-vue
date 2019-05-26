<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  max-width: 800px;
}
</style>

<script>
import getFromlocalStorage from "./store/getFromlocalStorage";

export default {
  created: getFromlocalStorage
};
</script>

