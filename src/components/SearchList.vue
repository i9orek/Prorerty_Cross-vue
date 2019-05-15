<template>
    <ul class="search-list">
        <li v-for="(el,index) in getResponce" :key="index">
            {{el}}
        </li>
    </ul>    
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';
export default {
    computed:{
        ...mapGetters({
            getResponce:types.RESPONCE_DATA
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

