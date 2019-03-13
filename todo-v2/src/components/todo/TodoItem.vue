<template>
  <li class="todo-item" draggable="true" @dragstart="dragStart" @dragend="dragEnd">
    <input type="checkbox" v-model="item.done">
    <input
      type="text"
      class="todo-item__text"
      :class="{'on-edit': item.onEdit }"
      v-model="item.text"
      @keyup.enter="editDone"
      @blur="editDone"
      @focus="editTodo"
      :disabled="!item.onEdit"
    >
    <button @click="editTodo" v-if="!item.onEdit">
      <i class="fas fa-edit"></i>
    </button>
    <button @click="removeTodo">
      <i class="fas fa-trash-alt"></i>
    </button>
    <button>
      <i class="fas fa-list-ul"></i>
    </button>
  </li>
</template>
<script>
export default {
  props: ['item'],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  methods: {
    removeTodo() {
      this.$store.commit('removeTodo', { todoId: this.item.id })
    },
    editTodo() {
      this.item.onEdit = true
    },
    editDone() {
      this.item.onEdit = false
    },
    //--- done: true, false 간 이동
    dragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id)
    },
    dragEnd(e) {}
  }
}
</script>
<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;

  margin-top: 0.5em;
  padding: 0.3em 0;

  &__text {
    width: 95%;
    padding: 0.3em;
    border-bottom: 1px dotted #adb5bd;
    border: none;
    background: none;
    transition: all 0.2s;

    &.on-edit {
      border-bottom: 1px dotted #ddd;
      background-color: #fff;
    }
  }
}
</style>


