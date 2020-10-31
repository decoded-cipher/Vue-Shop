import Vue from 'vue'
import App from "./App.vue"
import router from './router/routes'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

import 'bootstrap'
import 'popper.js'
import './assets/app.scss'

import Swal from 'sweetalert2'
window.Swal = Swal

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.component('NavBar', require('./components/NavBar.vue').default);

Vue.config.productionTip = false

var app = ''
fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});