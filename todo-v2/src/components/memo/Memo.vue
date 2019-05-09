
<template>
  <!-- list component 없이 진행해 봄 -->
  <div class="comp memos">
    <MemoInput/>
    <ul class="memos-list">
      <Memo v-for="item in list" :key="item.id" :memoItem="item"></Memo>
    </ul>
    <transition name="fade">
      <div class="memo__dimmed" v-show="onEdit"></div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import MemoInput from '@/components/memo/MemoInput'
import Memo from '@/components/memo/MemoItem'

export default {
  components: { MemoInput, Memo },

  created() {
    this.getList()
  },
  computed: {
    ...mapState('memos', { list: 'list', onEdit: 'onEdit' })
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
.dimmed {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: red;
}
</style>




