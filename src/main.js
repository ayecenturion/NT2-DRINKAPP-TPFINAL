import Vue from 'vue'
import App from './App.vue'
 


import 'jquery';
import 'popper.js';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { router } from './router'

import './form';

import store from './store';

import './globalMixin';
import './httpClient';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
