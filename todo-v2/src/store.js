import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: localStorage.todos ? JSON.parse(localStorage.todos).list : [],
    id: localStorage.todos ? JSON.parse(localStorage.todos).id : 0
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
    dragDoneTodo(state, { id, isDone }) {
      state.todos = state.todos.map(ele => {
        if (ele.id == id) ele.done = isDone
        return ele
      })
    },
    setLocal(state) {
      const obj = { list: [...state.todos], id: state.id }
      localStorage.todos = JSON.stringify(obj)
    }
  },
  actions: {}
})
