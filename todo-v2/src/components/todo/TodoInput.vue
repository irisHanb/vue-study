<template>
  <div class="todo-input">
    <form @submit.prevent="addTodo(todoText)">
      <input type="text" placeholder="할일을 입력해주세요. " v-model="todoText">
      <button type="submit">
        <i class="fas fa-plus-circle"></i>
      </button>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('todos', ['txt']),
    todoText: {
      get() {
        return this.txt
      },
      set(st) {
        this.$store.commit('todos/setCurrentTxt', st)
      }
    }
  },

  created() {},

  methods: {
    ...mapActions('todos', ['addTodo']),
    updateList() {
      if (!this.todoText) {
        alert('할일을 입력하세요.')
        this.todoText = null
        return
      }
      // this.addTodo(this.todoText)
      this.todoText = null
    }
  }
}
</script>
<style lang="scss">
form {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
.todo-input {
  display: flex;
  justify-content: space-between;

  input {
    width: 80%;
    padding: 0.3em;
    margin-right: 0.5em;
  }
}
</style>


