import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import memos from './modules/memos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    memos
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
