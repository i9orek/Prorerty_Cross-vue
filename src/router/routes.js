import Search from '../components/Search.vue';
import SearchList from '../components/SearchList.vue';  
import ChosenLocation from '../components/ChosenLocation.vue';

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
    path:'/location/:title',
    name:'location',
    component: ChosenLocation,
  }
];
