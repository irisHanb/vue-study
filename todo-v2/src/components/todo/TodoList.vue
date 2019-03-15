<template>
  <div
    class="todos-list"
    :class="{'on-drag-over': onDragOver}"
    @drop.prevent="drop"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
  >
    <h3>{{title + '( ' + list.length + '/' + all.length + ' )'}}</h3>
    <hr>
    <draggable class="example" draggable=".todo-item">
      <Item v-for="item in list" :item="item" :key="item.id" :id="`item-` + item.id"></Item>
    </draggable>
  </div>
</template>
<script>
import Item from '@/components/todo/TodoItem'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import draggable from 'vuedraggable'

export default {
  props: ['title', 'list', 'isDone'],
  data() {
    return {
      onDragOver: false,
      isSameDragArea: true
    }
  },

  components: { Item, draggable },

  computed: {
    ...mapState('todos', { all: 'list' })
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions('todos', ['updateTodo', 'updateTodoDone']),
    dragOver(e) {
      this.onDragOver = true
    },
    dragLeave(e) {
      this.onDragOver = false
    },
    drop(e) {
      this.onDragOver = false
      this.updateTodoDone({
        id: e.dataTransfer.getData('text/plain'),
        isDone: this.isDone
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.todos-list {
  width: 100%;
  margin-top: 1.5em;
  &:first-child {
    margin-right: 1.5em;
  }
  &.on-drag-over {
    outline: 2px dotted #087f5b;
  }
  h3 {
    color: #c2255c;
    margin-top: 0.2em;
    font-weight: bold;
    text-align: left;
  }
}
</style>


