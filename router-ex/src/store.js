import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{ id: 'hanb', password: '1111' }],
    user: null,
    isLogin: true,
    isMembers: true
  },
  mutations: {
    login(state, userInfo) {
      state.user = userInfo
      state.isLogin = true
      state.isMembers = true
    },
    logout(state) {
      state.isLogin = false
      state.isMembers = false
    }
  },
  actions: {
    // app load 시 로그인했었는지 확인
    checkLoged({ dispatch }) {
      console.log('>>> checkUser ', localStorage.user)
      if (localStorage.user) {
        const userInfo = JSON.parse(localStorage.user)
        router.push({ name: 'user-home', params: { id: userInfo.id } })
        dispatch('login', userInfo)
      } else {
        router.push({ name: 'login' })
      }
    },
    login({ commit }, userInfo) {
      console.log('login> ', userInfo)
      commit('login', userInfo)
      localStorage.user = JSON.stringify(userInfo)
      router.push({ name: 'user-home', params: { id: userInfo.id } })
    },
    logout({ commit }) {
      commit('logout')
      localStorage.removeItem('user')
      router.push({ name: 'login' })
    },
    checkMember({ state, dispatch }, info) {
      let tgUser = null
      state.users.forEach(ele => {
        if (ele.id === info.id) tgUser = { ...ele }
      })
      if (tgUser) {
        dispatch('login', tgUser)
        // commit('login', tgUser)
        // router.push({ name: 'user', params: { id: tgUser.id } })
      } else {
        alert('가입된 회원이 아닙니다. 회원가입을 해주세요~')
      }
    }
  }
})
