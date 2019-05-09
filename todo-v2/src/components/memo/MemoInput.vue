<template>
  <div class="write-wrap">
    <div class="write">
      <div class="write__header">
        <div class="write__col">
          <input class="write__title" type="text" placeholder="제목" v-model="memo.title">
        </div>
        <div class="write__col">
          <button type="button">
            <i class="fas fa-thumbtack"></i>
          </button>
        </div>
      </div>
      <div class="write__main">
        <div class="write__texts">
          <div ref="memoText" role="textbox" contenteditable="true" aria-placeholder="메모작성..."></div>
        </div>
      </div>
      <div class="write__footer">
        <div class="comp__col">
          <button>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div class="comp__col">
          <button @click="saveMemo">작성완료</button>
          <button @click="toggleEdit">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      onEdit: false,
      memo: {
        title: null,
        text: null,
        onFix: false
      }
    }
  },

  methods: {
    ...mapActions({
      add: 'memos/add'
    }),
    saveMemo() {
      console.log(this.$refs.memoText.innerText)
      this.add({ ...this.memo, text: this.$refs.memoText.innerText })
    },
    toggleEdit() {
      this.onEdit = !this.onEdit
    }
  }
}
</script>
<style lang="scss" scoped>
.write {
  width: 60%;
  margin: 0 auto;
  background-color: #fff;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  &__title {
    display: flex;
    justify-content: space-between;

    input {
      padding: 0.3em 0;
      width: 95%;
      font-size: 18px;
      font-weight: 700;
    }
  }
  &__texts {
    margin-top: 1em;
    font-size: 13px;

    textarea {
      width: 100%;
    }
  }
  &__btns {
    width: 100%;
    margin-top: 1rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ecf0f1;
    button {
      padding: 0.3em;
      background-color: #f1f3f4;
      border: 1px solid #ecf0f1;
      border-radius: 0.5em;
      padding: 0.3em 0.5em;
      &:first-child {
        margin-right: 1em;
      }
    }
  }

  input,
  textarea {
    // padding: 0.5em;
    border: none;
  }
}
</style>


