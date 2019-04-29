<template>
  <div id="app" class="app">
    <main class="main">
      <router-view></router-view>
    </main>
    <!-- <Todo></Todo> -->
  </div>
</template>
<script>
// import Todo from '@/components/todo/Todo'
import './assets/scss/style.scss'

export default {
  // components: { Todo }
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
