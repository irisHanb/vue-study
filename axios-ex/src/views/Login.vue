<template>
  <div>
    <button @click="test">test</button>
    <button @click="testPost">test::post</button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  methods: {
    test() {
      // Make a request for a user with a given ID
      axios
        .get('https://reqres.in/api/users?page=2')
        .then(res => {
          // handle success
          console.log(res);
        })
        .catch(err => {
          // handle error
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    },
    testPost() {
      axios
        .post('https://reqres.in/api/register', {
          email: 'sydney@fife',
          password: 'pistol',
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

