<template>
  <v-container fill-height>
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-card>
          <input v-validate="'required'" name="myinput" type="text">
          <span>{{ errors.first('myinput') }}</span>

          <v-card-actions>
            <span>{{ errors.first('myId') }}id 입력해라</span>

            <div class="pa-3">
              <v-text-field
                type="text"
                v-model="id"
                label="아이디를 입력하세요."
                v-validate="'required'"
                name="myId"
              ></v-text-field>
              <v-text-field
                name="password"
                type="password"
                v-model="password"
                v-validate="'required'"
                label="비밀번호를 입력하세요."
              ></v-text-field>
            </div>
          </v-card-actions>

          <v-btn flat>LogIn</v-btn>
          <v-btn flat v-if="!isMembers">Sign up</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    id: null,
    password: null
  }),
  computed: {
    ...mapState({
      isMembers: state => state.isMembers
    })
  },
  methods: {
    ...mapActions(['checkMember'])
  }
}
</script>

