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
  dragDoneTodo(state, { id, isDone }) {
    console.log('fitId>', id)
    const tgIdx = state.list.findIndex((ele, idx, list) => {
      if (ele.id == id) return idx
    })
    console.log(tgIdx)

    state.list = state.list.map(ele => {
      if (ele.id == id) ele.done = isDone
      return ele
    })
  }
}

// actions
const actions = {
  addTodo({ state, commit, dispatch }, { text }) {
    const info = {
      text: text,
      id: state.id,
      done: false,
      onEdit: false
    }
    commit('addTodo', { todoInfo: info })
    dispatch('setLocal')
  },
  removeTodo({ state, commit, dispatch }, { todoId }) {
    commit('removeTodo', { todoId })
    dispatch('setLocal')
  },
  dragDoneTodo({ state, commit, dispatch }, { id, isDone }) {
    commit('dragDoneTodo', { id, isDone })
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
