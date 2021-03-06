import todoApi from '../../api/todoAPI'
import * as types from './todosType'

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
  async [types.GET_TODOS]({ commit }) {
    try {
      const res = await todoApi.getTodos()
      commit(types.GET_TODOS, res.data)
    } catch (e) {
      console.log(e)
    }
  },
  // add todo
  async [types.ADD_TODO]({ state, commit, dispatch }, todoText) {
    const todo = {
      id: state.id,
      text: todoText,
      done: false
    }
    try {
      const res = await todoApi[types.ADD_TODO](todo)
      if (res) dispatch(types.GET_TODOS)
    } catch (e) {
      console.log(e)
    }
  },
  // delete todo
  async [types.DELETE_TODO]({ dispatch }, id) {
    try {
      await todoApi[types.DELETE_TODO](id)
      dispatch(types.GET_TODOS)
    } catch (e) {
      console.log(e)
    }
  },
  async updateTodo({ state, commit, dispatch }, todo) {
    try {
      await todoApi.updateTodo({
        id: todo.id,
        text: todo.text,
        done: todo.done
      })
      dispatch(types.GET_TODOS)
    } catch (e) {
      console.log(e)
    }
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
