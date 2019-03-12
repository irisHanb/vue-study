<template>
  <div class="todo">
    <h2>ToDo</h2>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>
<script>
import TodoInput from '@/components/todo/TodoInput'
import TodoList from '@/components/todo/TodoList'
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {},
  data() {
    return {}
  },
  components: { TodoInput, TodoList },
  created() {},
  methods: {}
}
</script>
<style lang="scss">
.todo {
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
  div {
    // outline: 1px dotted red;
  }
}
</style>



