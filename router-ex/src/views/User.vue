<template>
  <v-container>
    <v-toolbar>
      <v-spacer></v-spacer>
        <v-btn flat router :to="{name: 'user-home'}" exact>User</v-btn>
        <v-btn flat router :to="{name: 'user-profile'}" exact>User post</v-btn>
        <v-btn flat @click="logout" router-link>Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout>     
       
      <router-view></router-view>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    console.log(this.$route.params.id)
  },
  data: () => ({}),
  methods: {
    ...mapActions(['logout'])
  }
}
</script>


