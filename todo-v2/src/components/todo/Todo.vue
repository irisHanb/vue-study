<template>
  <div class="todo">
    <h2>ToDo</h2>
    <TodoInput></TodoInput>
    <TodoList :list="list"></TodoList>
  </div>
</template>
<script>
import TodoInput from "@/components/todo/TodoInput";
import TodoList from "@/components/todo/TodoList";

import { eventBus } from "@/main";
import { constants } from "fs";

export default {
  data() {
    return {
      cnt: null,
      list: null,
      listBase: [
        { text: "study: vue", id: 1 },
        { text: "study: react", id: 2 },
        { text: "study: ui", id: 3 }
      ]
    };
  },
  components: { TodoInput, TodoList },
  created() {
    eventBus.$on("addTodo", this.addTodo);
    eventBus.$on("removeTodo", this.removeTodo);
    // check exist todo list
    const dbList = JSON.parse(localStorage.list);
    if (dbList && dbList.length != 0) {
      this.list = [...dbList];
    } else {
      this.list = [...this.listBase];
    }
    this.cnt = this.list.length + 1;
  },
  methods: {
    addTodo(todoText) {
      this.list.push({ text: todoText, id: this.cnt });
      this.cnt++;
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
<style lang="scss">
.todo {
  max-width: 60%;
  min-width: 500px;
  margin: 0 auto;
  padding: 1.5em;
  background: #fff9db;
  h2 {
    padding: 1em;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  div {
    // outline: 1px dotted red;
  }
}
</style>



