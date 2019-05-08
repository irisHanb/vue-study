<template>
  <div class="todos">
    <h2>TODO</h2>
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
  components: { TodoInput, TodoList },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      todos: 'todos/list'
    }),
    ...mapGetters({
      todosOn: 'todos/listOn',
      todosDone: 'todos/listDone'
    })
  },
  created() {
    this.getTodos()
  },
  methods: {
    ...mapActions({ getTodos: 'todos/getTodos' })
  }
}
</script>
<style lang="scss">
.todos {
  padding: 1.5em;
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



