<template>
    <ul class="search-list">
        Please select the location below:
        <li v-for="(el,index) in getLocLists" :key="index">
            <a>location #{{index+1}}</a>
        </li>
    </ul>    
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';
export default {
    computed:{
        ...mapGetters({
            getLocLists:types.LOCATION_BELOW,
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