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
import { mapState } from "vuex";

// import store from "@/store";

import { eventBus } from "@/main";
import { constants } from "fs";

// import { store } from "vue";

export default {
  computed: {
    ...mapState(["list"])
  },
  data() {
    return {};
  },
  components: { TodoInput, TodoList },
  created() {
    eventBus.$on("addTodo", this.addTodo);
    eventBus.$on("removeTodo", this.removeTodo);
    this.$store.commit("getList");
  },
  methods: {
    addTodo(todoText) {
      this.$store.dispatch("addTodo", todoText);

      // this.list.push({ text: todoText, id: this.cnt });
      // this.cnt++;
      // this.saveList();
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



