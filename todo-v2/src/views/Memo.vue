<template>
  <div>
    <MemoInput></MemoInput>
    <Memo></Memo>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import MemoInput from '@/components/memo/MemoInput'
import Memo from '@/components/memo/MemoItem'

export default {
  components: { MemoInput, Memo },
  created() {},
  methods: {
    ...mapState('memos', ['getList'])
  }
}
</script>



