// initial state
const state = {
  list: localStorage.todos ? JSON.parse(localStorage.todos).list : [],
  id: localStorage.todos ? JSON.parse(localStorage.todos).id : 0
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
  addTodo(state, { todoInfo }) {
    state.id++
    state.list.push(todoInfo)
  },
  removeTodo(state, { todoId }) {
    state.list = state.list.filter(el => el.id != todoId)
  },
  updateTodoDone(state, { id, isDone }) {
    const tgIdx = state.list.findIndex(ele => ele.id == id)
    const temp = state.list.splice(tgIdx, 1)
    state.list.push({ ...temp[0], done: isDone })
  }
}

// actions
const actions = {
  addTodo({ state, commit, dispatch }, { text }) {
    const info = {
      text: text,
      id: state.id,
      done: false
    }
    commit('addTodo', { todoInfo: info })
    dispatch('setLocal')
  },
  removeTodo({ state, commit, dispatch }, { todoId }) {
    commit('removeTodo', { todoId })
    dispatch('setLocal')
  },
  updateTodoDone({ state, commit, dispatch }, { id, isDone }) {
    commit('updateTodoDone', { id, isDone })
    dispatch('setLocal')
  },
  setLocal({ state }) {
    const info = { list: state.list, id: state.id }
    localStorage.todos = JSON.stringify(info)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
