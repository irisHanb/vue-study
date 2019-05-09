<template>
  <div id="app" class="app">
    <button @click="toggleOnEdit">toggle Edit</button>
    <Nav :list="links"></Nav>
    <main class="main">
      <h2 class="comp__title">{{toolName}}</h2>
      <router-view></router-view>
    </main>
    <transition name="fade">
      <div class="app__dimmed" v-show="onEdit"></div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Nav from '@/components/Nav'
import './assets/scss/style.scss'

export default {
  components: { Nav },
  data: () => {
    return {
      links: [
        { link: '/todos', title: 'todo' },
        { link: '/memos', title: 'memo' }
      ]
    }
  },
  created() {
    // 시작시 처음은 todo
    this.setToolName('todo')
  },
  computed: {
    ...mapState({
      memoOnEdit: 'memos/onEdit',
      toolName: 'toolName'
    }),
    onEdit: {
      get() {
        return this.memoOnEdit
      },
      set(bool) {
        this.setOnEdit(bool)
      }
    }
  },

  methods: {
    ...mapMutations({
      setOnEdit: 'memos/setOnEdit',
      setToolName: 'setToolName'
    }),

    toggleOnEdit() {
      this.onEdit = !this.onEdit
      console.log('>> ', this.onEdit)
    }
  }
}
</script>

<style lang="scss">
.app {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 3em;
  &__dimmed {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #424949;
    // opacity: 0.7;

    &.fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
}
.main {
  padding: 10px;
  margin: 10px;
  min-height: 90vh;

  background-color: #f5e1da;
  // outline: 1px dotted red;
  .comp__title {
    text-transform: uppercase;
  }
}
</style>
