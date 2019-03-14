<template>
  <li class="todo-item" draggable="true" @dragstart="dragStart" @dragend="dragEnd">
    <!-- {{item.id}} -->
    <input type="checkbox" @change="changeDone" v-model="item.done">
    <input
      type="text"
      class="todo-item__text"
      :id="inputId"
      v-model="item.text"
      @keyup.enter="editDone"
      @blur="editDone"
      :disabled="!editable"
    >
    <button @click="editTodo" class="todo-item-edit" :class="{off: item.done }">
      <i class="fas fa-edit"></i>
    </button>
    <button @click="removeTodo">
      <i class="fas fa-trash-alt"></i>
    </button>
    <!-- <button>
      <i class="fas fa-list-ul"></i>
    </button>-->
  </li>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  data() {
    return {
      editable: false
    }
  },
  watch: {},
  computed: {
    inputId() {
      return `input` + this.item.id
    }
  },
  created() {
    console.log(this.item.id)
  },
  methods: {
    ...mapActions('todos', ['updateTodoDone']),
    removeTodo() {
      this.$store.dispatch('todos/removeTodo', { todoId: this.item.id })
    },
    editTodo(e) {
      this.editable = true
      document.getElementById(this.inputId).focus()
    },
    editDone() {
      this.editable = false
      document.getElementById(this.inputId).blur()
    },
    //--- done: true, false 간 이동
    dragStart(e) {
      const itemData = this.item.id
      console.log('dragStarg> ', itemData)
      console.log(e.target)
      e.dataTransfer.setData('text/plain', this.item.id)
    },
    dragEnd(e) {},
    changeDone(e) {
      // console.log('changeDone...', e.target.checked);
      this.$store.dispatch('todos/updateTodoDone', {
        id: this.item.id,
        isDone: e.target.checked
      })
    }
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


