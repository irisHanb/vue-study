<template>
  <div class="memo-item">
    <div class="memo-item__header">
      <div
        class="memo-item__title"
        contenteditable="true"
        placeholder="제목을 입력해주세요."
        ref="title"
        @input="updateTitle"
      ></div>
    </div>
    <div
      class="memo-item__body"
      contenteditable="true"
      placeholder="메모내용을 입력해주세요."
      ref="text"
      @input="updateText"
    ></div>
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

export default {
  data: () => {
    return {
      title: '',
      text: ''
    }
  },

  created() {},

  computed: {
    ...mapState('memos', { id: 'idNext' })
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
      if (this.title.length == 0 || this.text.length == 0) {
        alert('제목과 내용을 입력해 주세요.')
        return
      }
      const data = {
        id: this.id,
        title: this.title,
        text: this.text,
        onEdit: false,
        onFix: false
      }
      this.add(data)
      this.reset()
    },
    reset() {
      this.title = ''
      this.text = ''
      this.$refs.title.innerText = ''
      this.$refs.text.innerText = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


