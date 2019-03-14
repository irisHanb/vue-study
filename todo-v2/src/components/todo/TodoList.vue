<template>
  <div
    class="todos-list"
    :class="{'on-drag-over': onDragOver}"
    @dragover.prevent="dragOver"
    @dragleave.prevent="dragLeave"
    @drop.prevent="drop"
  >
    <h3>{{title}}</h3>
    <hr>
    <draggable class="example" draggable=".todo-item">
      <Item v-for="item in list" :item="item" :key="item.id" :id="`item-` + item.id"></Item>
    </draggable>
  </div>
</template>
<script>
import Item from '@/components/todo/TodoItem'
import { mapState, mapGetters, mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import { constants } from 'fs'

export default {
  props: ['title', 'list', 'isDone'],
  data() {
    return {
      onDragOver: false,
      isSameDragArea: true
    }
  },

  components: { Item, draggable },

  computed: {},
  created() {},
  mounted() {},
  methods: {
    dragOver(e) {
      this.onDragOver = true
      // console.log('drageOver>', this.isDone)
    },
    dragLeave(e) {
      this.onDragOver = false
    },
    drop(e) {
      this.onDragOver = false
      this.$store.dispatch('todos/updateTodoDone', {
        id: e.dataTransfer.getData('text'),
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


