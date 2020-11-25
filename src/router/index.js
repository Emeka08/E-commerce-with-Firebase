import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Products from '../views/Products'
import AdminPage from '../views/AdminPage'
import Users from '../views/Users'
import Buyers from '../components/admin-components/Buyers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: ':id',
      name: 'Products',
      component: Products
    },
    {
      path: '/adminpage',
      name: 'AdminPage',
      component: AdminPage,
      children: [
        {
          path: '/adminpage/users',
          name: 'Users',
          component: Users
        },
        {
          path: '/adminpage/buyers',
          name: 'Buyers',
          component: Buyers
        }
      ]
    }
  ]
})
