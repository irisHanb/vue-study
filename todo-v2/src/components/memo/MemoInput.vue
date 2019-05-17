<template>
  <div class="memo-item">
    <div class="memo-item__header">
      <div
        class="memo-item__title"
        contenteditable="true"
        placeholder="제목을 입력해주세요."
        ref="addItemTitle"
        @input="updateTitle"
      >{{title}}</div>
    </div>
    <div
      class="memo-item__body"
      contenteditable="true"
      placeholder="메모내용을 입력해주세요."
      ref="addItemText"
      @input="updateText"
    >{{text}}</div>
    <div class="memo-item__footer">
      <div class="memo-item__btns">
        <!-- add -->
        <button @click="addMemo">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { constants } from 'crypto'
export default {
  data: () => {
    return {}
  },

  created() {},

  computed: {
    ...mapState('memos', { id: 'idNext' }),
    title: {
      get() {
        this.$refs.addItemTitle
      },
      set(st) {
        this.$refs.addItemTitle.innerText = st
      }
    },
    text: {
      get() {
        this.$refs.addItemText
      },
      set(st) {
        this.$refs.addItemText.innerText = st
      }
    }
  },

  methods: {
    ...mapActions('memos', ['add']),
    updateTitle(e) {
      this.title = e.target.innerText
    },
    updateText(e) {
      this.text = e.target.innerText
    },
    addMemo() {
      const data = {
        id: this.id,
        title: this.title,
        text: this.text,
        onEdit: false,
        onFix: false
      }
      this.add(data)
      this.title = ''
      this.text = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


