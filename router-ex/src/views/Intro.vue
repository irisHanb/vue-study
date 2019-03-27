<template>
  <div class="intro">
    <Login></Login>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'
import Login from '../components/Login'

export default {
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  height: 100%;

  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>


