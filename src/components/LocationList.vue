<template>
    <ul class="search-list">
        <li v-for="(el,index) in getLists" :key="index">
            <a>search #{{index+1}} ({{el.total_pages}})</a>
        </li>
    </ul>    
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';
export default {
    computed:{
        ...mapGetters({
            getLists:types.SEARCH_LISTS,
        })
    }
}
</script>

<style>
    .search-list{
        list-style: none;
    }
    .search-list li{
        border:1px solid lightgray;
        padding: 10px 0;
    }
</style>

