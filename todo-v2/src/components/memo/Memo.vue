
<template>
  <!-- list component 없이 진행해 봄 -->
  <div class="comp memos">
    <div class="memos__header">
      <MemoInput/>
    </div>
    <ul class="memo-list">
      <Memo v-for="item in list" :key="item.id" :memoItem="item" :editMode="false"></Memo>
    </ul>
    <transition name="fade">
      <Memo v-if="onEditItem" :memoItem="onEditItem" :editMode="true"></Memo>
    </transition>
    <transition name="fade">
      <div class="memo__dimmed" v-show="onEdit" @click="updateItem(onEditItem)"></div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import MemoInput from '@/components/memo/MemoInput'
import Memo from '@/components/memo/MemoItem'

export default {
  components: { MemoInput, Memo },

  created() {
    this.getList()
  },
  computed: {
    ...mapState('memos', ['list', 'onEdit', 'onEditItem'])
  },
  methods: {
    ...mapMutations('memos', ['changeEditMode']),
    ...mapActions('memos', { getList: 'getList', updateItem: 'update' })
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
    transition: opacity 0.3s;
  }
  &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>




