<template>
  <div
    class="memo memo-item"
    :class="[{'onEdit': editMode && memoItem.onEdit, 'onRead': !editMode && memoItem.onEdit}]"
    @click="onEditMode"
  >
    <div class="memo-item__header">
      <div
        class="memo-item__title memo__title"
        :contenteditable="onEdit"
        @input="updateTitle"
      >{{memoItem.title}}</div>
    </div>
    <div class="memo-item__body" :contenteditable="onEdit" @input="updateText">{{memoItem.text}}</div>
    <div class="memo-item__footer">
      <div class="memo__btns">
        <button @click="deleteItem(memoItem.id)" v-show="!memoItem.onEdit">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  props: ['memoItem', 'editMode'],
  data: () => {
    return {}
  },
  created() {},
  computed: {
    ...mapState('memos', ['onEdit', 'onEditItem'])
  },
  methods: {
    ...mapMutations('memos', ['changeEditMode', 'updateCurrent']),
    ...mapActions('memos', { deleteItem: 'delete', updateItem: 'update' }),

    updateTitle(e) {
      this.updateCurrent({ ...this.memoItem, title: e.target.innerText })
    },
    updateText(e) {
      this.updateCurrent({ ...this.memoItem, text: e.target.innerText })
    },
    updateEditMode(bool) {
      this.updateCurrent({ ...this.memoItem, onEdit: bool })
    },

    // 편집모드로 전환
    onEditMode(e) {
      if (e.target.tagName != 'DIV') return
      this.updateEditMode(true)
      this.changeEditMode(this.memoItem)
    },

    updateContents() {
      this.updateItem({ ...this.onEditItem })
      // this.editMode = false
    },
    close() {}
  }
}
</script>

<style lang="scss" scoped>
.memo {
  width: 300px;
  // transition: all 0.2s ease-in-out;

  &__title {
    font-weight: 700;
  }

  &.fix {
    background-color: #ff0;
  }

  &.onEdit {
    // opacity: 0.5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);

    width: 500px;
    z-index: 1;
  }
  &.onRead {
    opacity: 0.1;
  }
}
</style>




