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
    toolName: '' // todo 부터~
  },
  getters: {},
  mutations: {
    setToolName(state, name) {
      console.log(name)
      state.toolName = name
    }
  },
  actions: {}
})
