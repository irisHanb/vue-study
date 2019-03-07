<template>
  <div class="todo-input">
    <input type="text" placeholder="할일을 입력해주세요. " v-model="todoText" @keyup.enter="addTodo">
    <button @click="addTodo">할일입력</button>
  </div>
</template>
<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      todoText: null
    };
  },
  created() {
    // console.log(eventBus);
  },
  methods: {
    addTodo() {
      if (!this.todoText) {
        alert("할일을 입력해 주세요~");
        return;
      }
      eventBus.addTodo(this.todoText);
      this.todoText = null;
    }
  }
};
</script>
<style lang="scss">
.todo-input {
  display: flex;
  justify-content: space-between;

  & > * {
    // height: 2em;
  }
  input {
    width: 80%;
    padding: 0.3em;
    margin-right: 0.5em;
  }
  button {
  }
}
</style>


