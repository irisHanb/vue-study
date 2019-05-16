import api from '../../api/memoAPI'
import { async } from 'q'

/****
 * creaet: add
 * read: show
 * update: update
 * delete: delete
 */

const uri = '/api/memos'
const types = {
  getList: 'getList',
  addMemo: 'addMemo'
}

// state
const state = {
  list: [],
  idNext: 1,
  onPending: false,

  current: null, // 현재 선택된 memo
  mode: null, // edit
  onEdit: false, // memo 한거 편집중일때
  onWrite: false // memo 작성 중 일때
}

// getters
const getters = {}

// mutations
const mutations = {
  // 현재 선택한 메모
  setCurrent(state, memo) {
    if (state.current) state.current = null
    state.current = memo
    state.mode = 'edit'
    // console.log('current', state.current.id, state.mode)
  },
  changeMode(state, mode) {
    state.mode = mode
  },
  // 받아온 list 저장
  setList(state, list) {
    state.list = list
    state.idNext = state.list.length + 1
    state.onPending = false
  },
  setOnEdit(state, bool) {
    console.log(bool)
    state.onEdit = bool
  },
  setEditItem: (state, item) => {
    if (state.current) {
      state.current.onEdit = false
      state.current = null
    }
    state.current = item
    item.onEdit = true
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

  // create: add
  async add({ commit, dispatch }, data) {
    try {
      console.log(data)
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
  },
  update({ commit, dispatch }) {
    console.log('fnupdate')
    commit('changeMode', '')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
