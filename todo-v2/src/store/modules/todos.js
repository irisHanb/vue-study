import todoApi from '../../api/todoAPI'

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
  initInfo(state, info) {
    state.list = [...info.list]
    state.id = info.id
  },
  addTodo(state, info) {
    state.list.push(info)
    state.id++
  },
  removeTodo(state, { todoId }) {
    state.list = state.list.filter(el => el.id != todoId)
    if (state.list.length === 0) state.id = 1
  },
  updateTodo(state, todo) {
    const tgId = todo.id
    state.list.splice(state.list.findIndex(el => el.id == tgId), 1, todo)
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
    todoApi.getInfo(info => commit('initInfo', info))
  },
  addTodo({ state, commit, dispatch }, todoText) {
    const info = {
      id: state.id,
      text: todoText,
      done: false
    }
    commit('addTodo', info)
    dispatch('setLocal')
  },
  removeTodo({ state, commit, dispatch }, { todoId }) {
    commit('removeTodo', { todoId })
    dispatch('setLocal')
  },
  updateTodo({ state, commit, dispatch }, todo) {
    commit('updateTodo', todo)
    dispatch('setLocal')
  },
  updateTodoDone({ state, commit, dispatch }, info) {
    commit('updateTodoDone', info)
    dispatch('setLocal')
  },
  setLocal() {
    console.log('fn: setLocal')
    todoApi.setList({ id: state.id, list: state.list })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
