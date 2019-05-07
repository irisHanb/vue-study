<template>
  <div id="app" class="app">
    <Nav :list="links"></Nav>
    <main class="main">
      <router-view></router-view>
    </main>
    <!-- <Todo></Todo> -->
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import './assets/scss/style.scss'

export default {
  components: { Nav },
  data: () => {
    return {
      links: [
        { link: '/todos', label: '할일목록' },
        { link: '/memos', label: '메모' }
      ]
    }
  }
}
</script>

<style lang="scss">
.main {
  max-width: 1000px;
  min-width: 500px;
  outline: 1px dotted red;
  margin: 0 auto;
}
</style>
