<template>
  <div class="memo-item">
    <div class="memo-item__header">
      <div class="memo-item__title" contenteditable="true" placeholder="제목을 입력해주세요." ref="title"></div>
      <!-- <div class="memo-item__btns">
        <button>
          <i class="fas fa-times-circle"></i>
        </button>
      </div>-->
    </div>
    <div
      class="memo-item__body"
      ref="text"
      contenteditable="true"
      aria-multiline="true"
      placeholder="메모내용을 입력해주세요."
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
    return {}
  },

  created() {},

  computed: {
    ...mapState('memos', { id: 'idNext' })
  },

  methods: {
    ...mapActions('memos', ['add']),
    addMemo() {
      const data = {
        id: this.id,
        title: this.$refs.title.innerText,
        text: this.$refs.text.innerText,
        onFix: false
      }
      this.add(data)
      this.$refs.title.innerText = ''
      this.$refs.text.innerText = ''
    }
  }
}
</script>
<style lang="scss" scoped>
</style>


