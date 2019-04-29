<template>
  <li class="todo-item" draggable="true" @dragstart="dragStart" @dragend="dragEnd">
    {{item.id}}
    <input type="checkbox" v-model="isDone">
    <input
      type="text"
      class="todo-item__text"
      :id="inputId"
      v-model="todoText"
      :disabled="!editable"
      @blur="editDone"
      @keyup.enter="editDone"
    >
    <!-- edit button -->
    <button @click="editOn" class="todo-item-edit" :class="{off: isDone || editable }">
      <i class="fas fa-edit"></i>
    </button>
    <!-- removebutton -->
    <button @click="removeTodo">
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
      editable: false
    }
  },
  watch: {},
  computed: {
    ...mapMutations('todos', ['updateText']),
    isDone: {
      get() {
        return this.item.done
      },
      set(bool) {
        this.updateTodo({ ...this.item, done: bool })
      }
    },
    todoText: {
      get() {
        return this.item.text
      },
      set(txt) {
        this.$store.commit('todos/updateText', { ...this.item, text: txt })
      }
    },
    inputId() {
      return `input` + this.item.id
    }
  },
  created() {
    // console.log(this.item.id)
  },
  methods: {
    ...mapActions('todos', ['updateTodo']),
    removeTodo() {
      // this.$store.dispatch('todos/removeTodo', { todoId: this.item.id })
      console.log(this.item)
      this.$store.dispatch('todos/removeTodo', this.item)
    },
    editOn() {
      this.editable = true
      // this.$store.dispatch('todos/removeTodo', this.item)
      setTimeout(() => document.getElementById(this.inputId).focus(), 0)
    },
    // update
    editDone() {
      this.editable = false
      this.$store.dispatch('todos/updateTodo', {
        ...this.item,
        text: this.todoText
      })
      // setTimeout(() => document.getElementById(this.inputId).blur(), 0)
    },
    //--- done: true, false 간 이동
    dragStart(e) {
      console.log(this.item.id)
      e.dataTransfer.setData('text/plain', this.item.id)
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


