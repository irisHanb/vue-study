<template>
  <div>
    <h1>Users Detail</h1>
    <p>{{userId}}</p>
    <v-btn small @click="$router.push({name: 'users-edit'})">수정</v-btn>
  </div>
</template>
<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
};
</script>

