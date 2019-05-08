<template>
  <div id="app" class="app">
    <Nav :list="links"></Nav>
    <main class="main">
      <h2></h2>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav'
import './assets/scss/style.scss'

export default {
  components: { Nav },
  data: () => {
    return {
      links: [
        { link: '/todos', label: 'TODO' },
        { link: '/memos', label: 'MEMO' }
      ]
    }
  },
  computed: {
    ...mapState(['viewNum'])
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
}
</style>
