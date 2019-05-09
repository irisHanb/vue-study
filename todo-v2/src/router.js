import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'todos' }
    },
    {
      path: '/todos',
      name: 'todos',
      component: () =>
        import(/* webpackChunkName: "todo" */ './components/todo/Todo.vue')
    },
    {
      path: '/memos',
      name: 'memos',
      component: () =>
        import(/* webpackChunkName: "memo" */ './components/memo/Memo.vue')
    }
  ]
})
