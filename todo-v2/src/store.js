import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cnt: null,
    list: null,
    listBase: [
      { text: 'study: vue', id: 1 },
      { text: 'study: react', id: 2 },
      { text: 'study: ui', id: 3 }
    ],

    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    getList() {
      const dbList = JSON.parse(localStorage.list)
      if (dbList && dbList.length != 0) {
        state.list = [...dbList]
      } else {
        state.list = [...state.listBase]
      }
      state.cnt = state.list.length + 1
    }
  },
  actions: {
    addTodo() {},
    delTodo() {}
  }
})
