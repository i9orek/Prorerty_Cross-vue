<template>
  <div id="app" class="container">
      <search-page></search-page>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Search from "./components/Search.vue";
import SearchList from "./components/SearchList.vue";
import LocationList from "./components/LocationList.vue";
import SearchError from "./components/SearchError.vue";

export default {
  computed: {
    ...mapState({
      currentComponent: state => state.currentComponent
    })
  },
  components: {
    "search-page": Search,
    "search-list": SearchList,
    "location-list": LocationList,
    "error-page": SearchError
  }
};
</script>

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
