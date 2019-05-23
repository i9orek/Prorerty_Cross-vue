import Search from '../components/Search.vue';
import SearchList from '../components/SearchList.vue';  
import CurrentItem from '../components/CurrentItem.vue';

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
  {
    path:'/item/:title',
    name:'item',
    component: CurrentItem,
  }
];
