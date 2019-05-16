<template>
  <div class="memo memo-item" :class="[{'fix': item.onFix, 'onEdit': item.onEdit}]">
    <div class="memo-item__header">
      <div v-if="item.title" class="memo__title">{{item.title}}</div>
      <!-- <div class="memo__btns">
        <button @click="close">
          <i class="fas fa-times-circle"></i>
        </button>
      </div>-->
    </div>
    <div class="memo-item__body">{{item.text}}</div>
    <div class="memo-item__footer">
      <div class="memo__btns">
        <!-- <button @click="add(item.id)">
          <i class="fas fa-plus-circle"></i>
        </button>-->
        <button @click="deleteItem(item.id)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  props: ['memoItem'],
  data: () => {
    return {
      item: null
    }
  },
  created() {
    this.item = { ...this.memoItem } //
  },
  computed: {
    // ...mapState('memos', ['mode'])
  },
  methods: {
    ...mapMutations('memos', ['setCurrent', 'setOnEdit', 'setEditItem']),
    ...mapActions('memos', { deleteItem: 'delete' }),
    changeModeEdit() {
      this.setEditMode(this.item)
    },
    // item 닫기
    close() {}
  }
}
</script>

<style lang="scss" scoped>
.memo {
  width: 300px;
  transition: all 0.5s ease-in-out;

  &__title {
    font-weight: 700;
  }

  &.fix {
    background-color: #ff0;
  }

  &.onEdit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

    width: 500px;
    z-index: 1;
  }
}
</style>




