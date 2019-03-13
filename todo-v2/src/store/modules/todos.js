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
  addTodo(state, payload) {
    state.id++
    const info = {
      text: payload.text,
      id: state.id,
      done: false,
      onEdit: false
    }
    state.list.push(info)
    // this.commit('setLocal')
    const obj = { list: [...state.list], id: state.id }
    localStorage.todos = JSON.stringify(obj)
  },
  removeTodo(state, { todoId }) {
    state.list = state.list.filter(el => el.id != todoId)
    // this.commit('setLocal')
    const obj = { list: [...state.list], id: state.id }
    localStorage.todos = JSON.stringify(obj)
  },
  dragDoneTodo(state, { id, isDone }) {
    state.list = state.list.map(ele => {
      if (ele.id == id) ele.done = isDone
      return ele
    })
  },
  setLocal(state) {
    // console.log(state)
    const obj = { list: [...state.list], id: state.id }
    localStorage.todos = JSON.stringify(obj)
  }
}

// actions
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
