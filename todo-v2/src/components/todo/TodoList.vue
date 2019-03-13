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
    <ul class="example">
      <Item v-for="item in list" :item="item" :key="item.id" :id="`item-` + item.id"></Item>
    </ul>
  </div>
</template>
<script>
import Item from '@/components/todo/TodoItem'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { constants } from 'fs'

export default {
  props: ['title', 'list', 'isDone'],
  data() {
    return {
      onDragOver: false,
      isSameDragArea: true
    }
  },

  components: { Item },

  computed: {},
  created() {},
  mounted() {
    // $('ul.example').sortable()
  },
  methods: {
    dragOver(e) {
      this.onDragOver = true
      // console.log('drageOver>', this.isDone)
    },
    dragLeave(e) {
      this.onDragOver = false
      // console.log('dragLeave>')
    },
    drop(e) {
      this.onDragOver = false
      this.$store.commit('todos/dragDoneTodo', {
        id: e.dataTransfer.getData('text').split('-')[1],
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


