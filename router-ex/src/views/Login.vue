<template>
  <v-container fill-height style="max-width: 500px">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card>
          <div class="pa-3">
            <v-text-field type="text" v-model="id" label="아이디를 입력하세요." required :rules="[(v) => !!v || '아이디 입력은 필수 사항입니다.']"></v-text-field>
            <v-text-field name="password" type="password" v-model="password" label="비밀번호를 입력하세요." required :rules="[(v) => !!v || '비밀번호 입력은 필수 사항입니다.']"></v-text-field>
          </div>
          <v-btn flat @click="checkMember({id, password})">LogIn</v-btn>
          <v-btn flat>Sign up</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    console.log('>>', this.isMembers)
  },
  data: () => ({
    id: null,
    password: null
  }),
  computed: {
    ...mapState(['isMembers'])
  },
  methods: {
    ...mapActions(['checkMember'])
  }
}
</script>

