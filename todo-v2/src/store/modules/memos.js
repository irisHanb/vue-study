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
  list: [], // memo list
  idNext: 1, // will give id

  // 편집관련
  onEditItem: null,
  onEdit: false // memo 한거 편집중일때
}

// getters
const getters = {}

// mutations
const mutations = {
  //=== 편집
  // 현재 편집중인 memo 내용 업데이트
  updateCurrent(state, item) {
    state.onEditItem = item
  },
  // 편집중인 메모 설정
  changeEditMode(state, item) {
    item.onEdit = true
    console.log(item.id, item.title, item.text)
    state.onEdit = true
    state.onEditItem = item
  },

  // 받아온 list 저장
  setList(state, list) {
    state.list = list
    state.idNext = Math.max(state.list.map(el => el.id)) + 1
    // 초기화( 이 시점이 맞는거 같음)
    state.onEdit = false
    state.onEditItem = null
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
  async update({ commit, dispatch }, item) {
    try {
      console.log('update>>> ', item)
      await api.update(item)
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
