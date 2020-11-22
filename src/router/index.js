import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
// import LoginSignup from '../views//LoginSignup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/loginSignup',
    //   name: 'LoginSignup',
    //   component: LoginSignup
    // }
  ]
})
