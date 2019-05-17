<template>
  <div id="app" class="app">
    <Nav :list="links"></Nav>
    <main class="main">
      <h2 class="comp__title">{{tool}}</h2>
      <router-view></router-view>
    </main>
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
      memoStatus: null,
      links: [
        { link: '/todos', title: 'todo' },
        { link: '/memos', title: 'memo' }
      ]
    }
  },
  created() {},
  computed: {
    // 각 namespace별로 분리해서 참조해준다.
    // ...mapState(['toolName', 'memoOnEdit']),
    // ...mapState('memos', { memoOnEdit: 'onEdit' }),
    tool: {
      get() {
        return this.$route.path === '/memos' ? 'memo' : 'todo'
      },
      set() {}
    }
  },

  methods: {}
}
</script>

<style lang="scss">
.app {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 3em;
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
