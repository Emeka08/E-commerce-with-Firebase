// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import 'popper.js'
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
