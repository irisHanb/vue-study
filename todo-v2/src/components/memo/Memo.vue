
<template>
  <!-- list component 없이 진행해 봄 -->
  <div class="comp memos">
    <div class="memos__header">
      <MemoInput/>
    </div>
    <ul class="memo-list">
      <Memo v-for="item in list" :key="item.id" :memoItem="item"></Memo>
    </ul>
    <transition name="fade">
      <div class="memo__dimmed" v-show="mode == 'edit'" @click="update"></div>
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
    ...mapState('memos', ['list', 'mode'])
    // ...mapState({ list: 'memos/list' }) // Q: 이건 왜 않될까? todo 에서는 이렇게 참조했는데...
  },
  methods: {
    ...mapActions('memos', ['getList', 'update'])
  }
}
</script>
<style lang="scss" scoped>
.memos {
  &__header {
    display: flex;
    justify-content: center;
  }
}
.memo {
  &-list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
.memo__dimmed {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  &.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>




