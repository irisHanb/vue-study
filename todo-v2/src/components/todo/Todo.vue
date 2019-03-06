<template>
  <div class="todo">
    <TodoInput></TodoInput>
    <TodoList :list="list"></TodoList>
  </div>
</template>
<script>
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";

import { eventBus } from "@/main";

export default {
  data() {
    return {
      cnt: 0,
      list: []
    };
  },
  components: { TodoInput, TodoList },
  created() {
    eventBus.$on("addTodo", this.addTodo);
    eventBus.$on("removeTodo", this.removeTodo);

    this.list = JSON.parse(localStorage.list) || [];
    this.cnt = localStorage.cnt || 0;
  },
  methods: {
    addTodo(todoText) {
      this.cnt++;
      this.list.push({ text: todoText, id: this.cnt });
      this.saveList();
    },
    removeTodo(id) {
      this.list = this.list.filter(ele => id != ele.id);
      this.saveList();
    },
    saveList() {
      localStorage.list = JSON.stringify(this.list);
      localStorage.cnt = this.cnt;
      // console.log("addTodo>", localStorage.list);
    }
  }
};
</script>



