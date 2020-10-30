import Vue from 'vue'
import App from "./App.vue"
import router from './router/routes'

import 'bootstrap'
import 'popper.js'
import './assets/app.scss'

import jQuery from 'jquery' 
window.$ = window.jQuery = jQuery

Vue.component('NavBar', require('./components/NavBar.vue').default);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
