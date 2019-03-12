import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    id: 0
  },
  getters: {
    todosOn(state) {
      return state.todos.filter(ele => !ele.done)
    },
    todosDone(state) {
      return state.todos.filter(ele => ele.done)
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.id++
      const info = {
        text: payload.text,
        id: state.id,
        done: false,
        onEdit: false
      }
      state.todos.push(info)
      this.commit('setLocal')
    },
    removeTodo(state, { todoId }) {
      state.todos = state.todos.filter(el => el.id != todoId)
      this.commit('setLocal')
    },
    setLocal(state) {
      localStorage.todos = JSON.stringify(state.todos)
      localStorage.id = state.id
    }
  },
  actions: {}
})
