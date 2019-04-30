import todoApi from '../../api/todoAPI'
import * as types from './todosType'

const dbUrl = 'http://localhost:3000/todos'

// initial state
const state = {
  txt: '',
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
  setCurrentTxt(state, txt) {
    console.log('setCurrent> ', txt)
    state.txt = txt
  },
  [types.GET_TODOS](state, todos) {
    console.log('get todos...')
    state.list = [...todos]
    state.id = ++todos.length
    state.txt = ''
  },

  updateText(state, todo) {
    console.log('updateText> ', todo)
    state.list = state.list.map(obj => {
      if (obj.id === todo.id) {
        obj.text = todo.text
        obj.done = toto.done
      }
      return obj
    })
  },

  // load todos
  initInfo(state, todos) {
    state.list = [...todos]
    state.id = ++todos.length
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

//=== actions
const actions = {
  // get todos
  [types.GET_TODOS]({ commit }) {
    todoApi[types.GET_TODOS](todos => commit(types.GET_TODOS, todos))
  },
  // add todo
  [types.ADD_TODO]({ state, commit, dispatch }, todoText) {
    const todo = {
      id: state.id,
      text: todoText,
      done: false
    }
    todoApi[types.ADD_TODO](todo, () => dispatch(types.GET_TODOS))
  },
  // delete todo
  [types.DELETE_TODO](id) {
    console.log('del> ', id)
    // todoApi[types.DELETE_TODO](id, () => dispatch(types.GET_TODOS))
  },

  initInfo({ state, commit }) {
    todoApi.getTodos(todos => commit('initInfo', todos))
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
