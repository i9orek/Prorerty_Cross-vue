<template>
  <div id="app" class="container">
    <search-page></search-page>
    <search-list></search-list>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import SearchList from './components/SearchList.vue';

export default {
  components:{
    'search-page':Search,
    'search-list':SearchList
  }
}
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container{
        margin: 0 auto;
        max-width:800px; 
    }
</style>
