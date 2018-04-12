import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List/list';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: List,
    },
  ],
});
