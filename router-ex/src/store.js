import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{ id: 'hanb', password: '1111' }],
    user: null,
    isLogin: false,
    isLoginSuccess: false,
    isMembers: false
  },
  mutations: {},
  actions: {
    checkMember({ state, commit }, info) {
      let tgUser = null
      state.users.forEach(ele => {
        if (ele.id === info.id) tgUser = { ...info }
      })
      if (tgUser) {
        console.log(tgUser)
      } else {
        console.log('haveto. sign up>  ', tgUser)
      }
    }
  }
})
