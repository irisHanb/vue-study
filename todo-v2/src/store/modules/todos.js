import todoApi from '../../api/todoAPI'
import * as types from './todosType'

const dbUrl = 'http://localhost:3000/todos'

// initial state
const state = {
  onDragingTodo: null,
  list: [],
  id: 1
}

// getters
const getters = {
  listOn(state) {
    return state.list.filter(ele => !ele.done)
  },
  listDone(state) {
    return state.list.filter(ele => ele.done)
  }
}

// mutations
const mutations = {
  [types.GET_TODOS](state, todos) {
    console.log('get todos...')
    state.list = [...todos]
    state.id = ++todos.length
    state.txt = ''
  },

  // 현재 드래깅중인 todo 저장해두고 drop 일때 변경~
  setOnDragTodo(state, todo) {
    state.onDragingTodo = { ...todo }
  }
}

//=== actions
const actions = {
  // get todos
  [types.GET_TODOS]({ commit }) {
    todoApi[types.GET_TODOS](todos => commit(types.GET_TODOS, todos))
  },
  // add todo
  [types.ADD_TODO]({ state, commit, dispatch }, todoText) {
    console.log(todoText)
    const todo = {
      id: state.id,
      text: todoText,
      done: false
    }
    todoApi[types.ADD_TODO](todo, () => dispatch(types.GET_TODOS))
  },
  // delete todo
  [types.DELETE_TODO]({ dispatch }, id) {
    todoApi[types.DELETE_TODO](id, () => dispatch(types.GET_TODOS))
  },
  updateTodo({ state, commit, dispatch }, todo) {
    todoApi.updateTodo({ id: todo.id, text: todo.text, done: todo.done }, () =>
      dispatch(types.GET_TODOS)
    )
  },
  applyUpdate({ state, dispatch }) {
    dispatch('updateTodo', state.onDragingTodo)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
