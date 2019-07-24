import Vue from 'vue'
import axios from 'axios'
import Home from './pages/Home.vue';
import Page from './pages/Page.vue';
import NotFound from './pages/404.vue';
import VueRouter from 'vue-router'


Vue.use(axios)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    {
        path: '/page/:id',
        component: Page,
        name: 'page'
    },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
  el: '#app',
  router: router
})
