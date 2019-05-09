import api from '../../api/memoAPI'
import { async } from 'q'

const uri = '/api/memos'
const types = {
  getList: 'getList',
  addMemo: 'addMemo'
}

// state
const state = {
  current: {
    title: null,
    text: null
  },
  onEdit: false, // memo 한거 편집중일때
  onWrite: false, // memo 작성 중 일때
  list: [],
  id: 1
}

// getters
const getters = {}

// mutations
const mutations = {
  setList(state, list) {
    state.list = list
    console.log(state.list)
  },
  setOnEdit(state, bool) {
    console.log(bool)
    state.onEdit = bool
  }
}

// actions
const actions = {
  async getList({ commit }) {
    try {
      const res = await api.getList()
      commit('setList', res.data)
    } catch (e) {
      console.log(e)
    }
  },
  async add({ commit, dispatch }, data) {
    try {
      await api.add(data)
      dispatch('getList')
    } catch (e) {
      console.log(e)
    }
  },
  async delete({ dispatch }, id) {
    try {
      await api.delete(id)
      dispatch('getList')
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
