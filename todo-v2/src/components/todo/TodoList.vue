<template>
  <div class="todo-list">
    <div class="todo-list__on">
      <h3>진행중인 할일 목록</h3>
      <hr>
      <ul>
        <Item v-for="item in todosOn" :item="item" :key="item.id" :id="`item`+item.id"></Item>
      </ul>
    </div>
    <div class="todo-list__done">
      <h3>완료된 할일 목록</h3>
      <hr>
      <ul class="todo-done">
        <Item v-for="item in todosDone" :item="item" :key="item.id" :id="`item`+item.id"></Item>
      </ul>
    </div>
  </div>
</template>
<script>
import Item from '@/components/todo/TodoItem'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: { Item },

  computed: {
    ...mapState(['todos']),
    ...mapGetters({
      todosDone: 'todosDone',
      todosOn: 'todosOn'
    })
  },

  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.todo-list {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5em;

  [class^='todo-list__'] {
    &:first-child {
      margin-right: 2.3em;
    }
    width: 100%;
  }

  h3 {
    color: #c2255c;
    margin-top: 3em;
    font-weight: bold;
    text-align: left;
  }
}
.todo-done {
  margin-top: 1em;
}
</style>


