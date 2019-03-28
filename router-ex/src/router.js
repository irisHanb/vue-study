import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
const Home = () => import(/* webpackChunkName: "login" */ './views/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ './views/Login.vue')

//--- user
const User = () => import(/* webpackChunkName: "user" */ './views/User.vue')
const UserHome = () =>
  import(/* webpackChunkName: "user-home" */ './components/user/Home.vue')
const UserProfile = () =>
  import(/* webpackChunkName: "user-profile" */ './components/user/Profile.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path: '',
          name: 'user-home',
          component: UserHome
        },
        {
          path: 'user-profile',
          name: 'user-profile',
          component: UserProfile
        }
      ]
    }
  ]
})
