import api from '../../api/memoAPI'
import { async } from 'q'

const uri = '/api/memos'
const type = {
  getList: 'getList',
  addMemo: 'addMemo'
}

// state
const state = {
  list: [],
  id: 1
}

// getters
const getters = {}

// mutations
const mutations = {
  [type.getList]: ({ state }) => {}
}

// actions
const actions = {
  [type.getList]: async () => {
    try {
    } catch (e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true
}
