import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import {routes} from './routes'
import NProgress from 'vue-nprogress'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(NProgress)
const nprogress = new NProgress({ new: '.nprogress-container' })

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({
  nprogress,
  el: '#app',
  router,
  render: h => h(App)
})