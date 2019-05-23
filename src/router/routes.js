import Search from '../components/Search.vue';
import SearchList from '../components/SearchList.vue';  

export const routes = [{
    path: '/',
    component: Search
  },
  {
    path: '/search/:id',
    name:'list', 
    component: SearchList,
    props:true,
  },
];
