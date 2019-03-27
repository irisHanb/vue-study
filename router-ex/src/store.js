import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{ id: 'hanb', password: '1111' }],
    user: null,
    isLogin: false,    
    isMembers: false
  },
  mutations: {
    login(state, userInfo){
      state.user = userInfo;
      state.isLogin = true;
      state.isMembers = true;
    }
  },
  actions: {
    checkMember({ state, commit }, info) {
      let tgUser = null
      state.users.forEach(ele => {
        if (ele.id === info.id) tgUser = {...ele};
      })
      if (tgUser) {
        commit('login', tgUser);
        this.$router.push({name: 'home'});
      } else {
        alert( '가입된 회원이 아닙니다. 회원가입을 해주세요~');
      }
    }
  }
})
