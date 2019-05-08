<template>
  <div class="write-wrap">
    <div class="write">
      <div class="write__title">
        <input type="text" placeholder="제목" v-model="memo.title">
        <button type="button">
          <i class="fas fa-thumbtack"></i>
        </button>
      </div>
      <div class="write__texts">
        <div ref="memoText" role="textbox" contenteditable="true" aria-placeholder="메모작성..."></div>
        <!-- <textarea role="textbox" placeholder="메모작성..." v-model="memo.texts"></textarea> -->
      </div>
      <div class="write__btns">
        <button @click="saveMemo">작성완료</button>
        <button @click="toggleEdit">닫기</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'
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
    saveMemo(){
      console.log( this.$refs.memoText.innerText)      
      this.add({...this.memo, text: this.$refs.memoText.innerText})
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
      width: 95%;
    }
  }
  &__texts {
    margin-top: 1em;
    textarea {
      width: 100%;
    }
  }
  &__btns{
    margin-top: 1rem;
    button{
      padding: .3em;
      background-color: #FEEFC3;
    }
  }

  input,
  textarea {
    padding: 0.5em;
    border: none;
  }
}
</style>


