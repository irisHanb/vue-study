<template>
  <div id="app" class="app">
    <Nav :list="links"></Nav>
    <main class="main">
      <h2 class="comp__title">{{toolName}}</h2>
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
  created() {
    this.memoStatus = this.memoOnEdit

    // 시작시 처음은 todo
    this.setToolName('todo')
  },
  computed: {
    // 각 namespace별로 분리해서 참조해준다.
    ...mapState(['toolName', 'memoOnEdit']),
    ...mapState('memos', { memoOnEdit: 'onEdit' }),
    // Q: 여전히... 않된당... ㅜㅜ
    // ...mapState({
    //   memoOnEdit: 'memos/onEdit'
    // }),

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

    // memo 일때 edit memo UI 보이게 하기
    toggleOnEdit() {
      if (this.toolName != 'memo') return
      this.memoStatus = !this.memoStatus
    }
  }
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
