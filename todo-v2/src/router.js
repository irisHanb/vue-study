import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/todos'
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import(/* webpackChunkName: "todo" */ './views/Todo.vue')
    },
    {
      path: '/memos',
      name: 'memos',
      component: () => import(/* webpackChunkName: "todo" */ './views/Memo.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
