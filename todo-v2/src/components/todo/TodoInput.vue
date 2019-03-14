<template>
  <div class="todo-input">
    <input type="text" placeholder="할일을 입력해주세요. " v-model="todoText" @keyup.enter="updateTodoText">
    <button @click="addTodo">
      <i class="fas fa-plus-circle"></i>
    </button>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      todoText: null
    }
  },
  created() {},

  methods: {
    ...mapActions('todos', ['addTodo']),
    updateTodoText() {
      if (!this.todoText) {
        alert('할일을 입력하세요.')
        this.todoText = null
        return
      }
      this.addTodo(this.todoText)
      this.todoText = null
    }
  }
}
</script>
<style lang="scss">
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


