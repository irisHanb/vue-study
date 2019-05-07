<template>
  <ul>
    <Memo v-for="memo in list" :key="memo.id" :item="item"></Memo>
  </ul>
</template>
<script>
import { mapStatus } from 'vuex'

import Memo from './MemoItem'

export default {
  components: { Memo },
  computed: {
    ...mapStatus('memos', ['list'])
  }
}
</script>

