<template>
  <li class="todo-item">
    <span class="todo-item__text">{{item.text}}</span>
    <button @click="removeTodo">X</button>
  </li>
</template>
<script>
import { eventBus } from "@/main";
export default {
  props: ["item"],
  methods: {
    removeTodo() {
      eventBus.removeTodo(this.item.id);
    }
  }
};
</script>
<style lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;

  margin-top: 0.5em;
  padding: 0.3em 0;

  &__text {
    width: 95%;
    padding-left: 0.5em;
    border-bottom: 1px dotted #adb5bd;
  }
}
</style>


