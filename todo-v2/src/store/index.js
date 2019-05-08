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
  state: {
    viewNum: 0
  },
  getters: {},
  mutations: {
    setViewNum({ state }, num) {
      console.log(num)
      state.viewNum = num
    }
  },
  actions: {}
})
