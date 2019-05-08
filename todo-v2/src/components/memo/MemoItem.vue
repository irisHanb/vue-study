<template>
  <div class="memo" :class="{'fix': item.onFix}">
    <div v-if="item.title" class="memo__title">{{item.title}}</div>
    <div class="memo__text">{{item.text}}</div>  
    <div class="memo__btns">
    <button @click="del(item.id)"><i class="fas fa-trash-alt"></i></button>
    </div>  
  </div>
</template>
<script>
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
  props: ['memoItem'],
  data: () => {
    return {
      item: null
    }
  },
  created() {
    this.item = { ...this.memoItem }
  },
  methods:{
    ...mapActions({
      del: 'memos/delete'
    })
  }
}
</script>

<style lang="scss" scoped>
.memo {
  width: 200px;
  padding: 1em;
  margin: 0.5em;

  background-color: #fff;
  border-radius: 0.3em;
  border: 1px solid #f1f1f1;

  transition: all .3s ease-in-out;
  &__title{
    font-weight: 700;    

  }
  &__text{
    margin-top: 1em;
    font-size: 13px;    
  }
  &.fix{
    background-color: #ff0;
  }
  
}
</style>




