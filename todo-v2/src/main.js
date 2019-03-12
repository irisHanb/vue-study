import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.config.productionTip = false
export const eventBus = new Vue({
  methods: {
    addTodo(todoText) {
      this.$emit('addTodo', todoText)
    },
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
