import Vue from 'vue'
import App from "./App.vue"
import router from './router/routes'
import store from './store.js'
import {
  fb
} from './firebase'

import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})
// Vue.use(VueFirestore)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import 'bootstrap'
import 'popper.js'
import './assets/app.scss'

import Swal from 'sweetalert2'
window.Swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
  // timerProgressBar: true,
  // didOpen: (toast) => {
  //   toast.addEventListener('mouseenter', Swal.stopTimer)
  //   toast.addEventListener('mouseleave', Swal.resumeTimer)
  // }
})
window.Toast = Toast

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.component('NavBar', require('./components/NavBar.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('ProductsList', require('./sections/ProductList.vue').default);
Vue.component('MiniCart', require('./components/MiniCart.vue').default);

Vue.config.productionTip = false

var app = ''
fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});