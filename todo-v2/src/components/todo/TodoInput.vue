<template>
  <div>
    <input type="text" placeholder="할일을 입력해주세요. " v-model="todoText">
    <button @click="addTodo">할일입력</button>
  </div>
</template>
<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      todoText: ""
    };
  },
  created() {
    // console.log(eventBus);
  },
  methods: {
    addTodo() {
      // eventBus.$emit("addTodo", this.todoText);
      eventBus.addTodo(this.todoText);

      this.todoText = "";
    }
  }
};
</script>

