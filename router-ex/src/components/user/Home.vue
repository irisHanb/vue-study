<template>
  <v-container dark>
    <div>
      <h1>{{$route.params.id}} HOME</h1>
    </div>
  </v-container>
</template>
<script>
export default {
  created() {
    console.log('user home')
  }
}
</script>

