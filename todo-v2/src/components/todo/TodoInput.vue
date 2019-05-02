<template>
  <div class="todo-input">
    <form @submit.prevent="addTodo">
      <input type="text" placeholder="할일을 입력해주세요. " v-model="txt">
      <button type="submit">
        <i class="fas fa-plus-circle"></i>
      </button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      txt: null
    }
  },
  computed: {},

  created() {},

  methods: {
    ...mapActions('todos', ['addTodo']),
    addTodo() {
      if (!this.txt) {
        alert('할일을 입력하세요.')
        this.txt = null
        return
      }
      this.$store.dispatch('todos/addTodo', this.txt)
      this.txt = null
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


