
<template>
  <!-- list component 없이 진행해 봄 -->
  <div class="comp">
    <h2 class="comp__title">MEMO</h2>
    <MemoInput/>
    <ul class="memos">
      <Memo v-for="item in list" :key="item.id" :memoItem="item"></Memo>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import MemoInput from '@/components/memo/MemoInput'
import Memo from '@/components/memo/MemoItem'
import { constants } from 'crypto'

export default {
  components: { MemoInput, Memo },

  created() {
    this.getList()
  },
  computed: {
    ...mapState('memos', { list: 'list' })
    // ...mapState({ list: 'memos/list' }) // Q: 이건 왜 않될까? todo 에서는 이렇게 참조했는데...
  },
  methods: {
    ...mapActions({ getList: 'memos/getList' })
  }
}
</script>
<style lang="scss" scoped>
.memos {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>




