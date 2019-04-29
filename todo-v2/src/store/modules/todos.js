import todoApi from '../../api/todoAPI'
import * as types from './todosType'

// initial state
const state = {
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
  updateText(state, todo) {
    console.log('updateText> ', todo)
    state.list = state.list.map(obj => {
      if (obj.id === todo.id) {
        obj.text = todo.text
      }
      return obj
    })    
  },
  // load todos
  initInfo(state, info) {
    state.list = [...info]
    state.id = ++info.length
  },
  // add todos
  [types.ADD_TODO](state, info) {
    todoApi.addTodo(
      { id: info.id, text: info.text, done: info.done },
      todos => {
        state.list = [...todos]
      }
    )
    state.id++
  },
  // delete todos
  removeTodo(state, todo) {
    todoApi.delTodo(
      { id: todo.id, text: todo.text, done: todo.done },
      todos => {
        state.list = [...todos]
      }
    )
  },
  updateTodo(state, todo) {
    // console.log('update> ', todo)
    // const tgId = todo.id
    // state.list.splice(state.list.findIndex(el => el.id == tgId), 1, todo)
    todoApi.updateTodo(
      { id: todo.id, text: todo.text, done: todo.done },
      todos => {
        state.list = [...todos]
      }
    )
  },
  updateTodoDone(state, { id, isDone }) {
    console.log('drop>> ', id, isDone)
    const tgIdx = state.list.findIndex(ele => ele.id == id)
    const temp = state.list.splice(tgIdx, 1)
    state.list.push({ ...temp[0], done: isDone })
  }
}

// actions
const actions = {
  initInfo({ state, commit }) {
    todoApi.getTodos(info => commit('initInfo', info))
  },
  [types.ADD_TODO]({ state, commit, dispatch }, todoText) {
    const info = {
      id: state.id,
      text: todoText,
      done: false
    }
    commit(types.ADD_TODO, info)
    dispatch('setLocal')
  },
  removeTodo({ state, commit, dispatch }, todo) {
    commit('removeTodo', todo)
    // dispatch('setLocal')
  },
  updateTodo({ state, commit, dispatch }, todo) {
    commit('updateTodo', todo)
    // dispatch('setLocal')
  },
  updateTodoDone({ state, commit, dispatch }, info) {
    commit('updateTodoDone', info)
    dispatch('setLocal')
  },
  setLocal() {
    // console.log('fn: setLocal')
    // todoApi.setList({ id: state.id, list: state.list })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
