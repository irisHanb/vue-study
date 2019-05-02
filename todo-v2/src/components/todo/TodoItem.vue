<template>
  <li class="todo-item" draggable="true" @dragstart="dragStart" @dragend="dragEnd">
    {{todo.id}}
    <input type="checkbox" v-model="todo.done" @change="update">
    <input
      type="text"
      class="todo-item__text"
      :id="inputId"
      v-model="todo.text"
      :disabled="!editable"
      @blur="update"
      @keyup.enter="update"
    >
    <!-- edit button -->
    <button @click="editOn" class="todo-item-edit" :class="{off: todo.done || editable }">
      <i class="fas fa-edit"></i>
    </button>
    <!-- delete todo -->
    <button @click="deleteTodo">
      <i class="fas fa-trash-alt"></i>
    </button>
  </li>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import { constants } from 'fs'
export default {
  props: ['item'],
  data() {
    return {
      todo: null,
      editable: false
    }
  },
  watch: {},
  computed: {
    inputId() {
      return `input` + this.todo.id
    }
  },
  created() {
    this.todo = { ...this.item }
  },
  methods: {
    ...mapMutations({ setOnDragTodo: 'todos/setOnDragTodo' }),
    ...mapActions('todos', ['deleteTodo', 'updateTodo']),

    deleteTodo() {
      this.$store.dispatch('todos/deleteTodo', this.todo.id)
    },
    editOn() {
      this.editable = true
      setTimeout(() => document.getElementById(this.inputId).focus(), 0)
    },
    // update
    update() {
      this.editable = false
      this.updateTodo({ ...this.todo })
    },
    //--- done: true, false 간 이동
    dragStart(e) {
      this.setOnDragTodo({ ...this.todo, done: !this.todo.done })
      e.dataTransfer.setData('text', this.todo.id)
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
  }
  &-edit {
    &.off {
      visibility: hidden;
    }
  }
}
</style>


