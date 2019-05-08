<template>
  <div class="nav-wrap">
    <h1>Hello~ Vue!!!</h1>
    <nav class="nav">
      <router-link
        v-for="(nav, idx) in list"
        :key="idx"
        :to="nav.link"
        @click.prevent="setViewNum(idx)"
      >{{nav.label}}</router-link>
    </nav>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['list'],
  computed: {},
  methods: {
    ...mapMutations(['setViewNum'])
  }
}
</script>

<style lang="scss" scoped>
.nav-wrap {
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-size: 20px;
  font-weight: 700;
}
.nav {
  a {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #085f63;
    opacity: 0.5;
    color: #fff;

    &:first-child {
      margin-right: 10px;
    }
    &.router-link-active {
      opacity: 1;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>



