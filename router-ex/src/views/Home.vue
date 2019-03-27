<template>
  <div class="home">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="$router.push({name: 'intro'})">Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
.home {
  width: 100%;
  height: 100%;

  background-image: url(https://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>


