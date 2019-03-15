<template>
  <div class="todos">
    <h2>ToDo</h2>
    <TodoInput></TodoInput>
    <div class="todos-wrap">
      <TodoList :title="`Have to do`" :list="todosOn" :isDone="false"></TodoList>
      <TodoList :title="`Done`" :list="todosDone" :isDone="true"></TodoList>
    </div>
  </div>
</template>
<script>
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('todos', {
      todos: 'list'
    }),
    ...mapGetters('todos', {
      todosOn: 'listOn',
      todosDone: 'listDone'
    })
  },

  components: { TodoInput, TodoList },
  created() {
    this.initInfo()
    // console.log(JSON.stringify(this.todos))
  },
  methods: {
    ...mapActions('todos', ['initInfo'])
  }
}
</script>
<style lang="scss">
.todos {
  max-width: 80%;
  min-width: 700px;
  margin: 0 auto;
  padding: 1.5em;
  background: #fff9db;
  h2 {
    padding: 1em;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  &-wrap {
    display: flex;
  }
}
</style>



