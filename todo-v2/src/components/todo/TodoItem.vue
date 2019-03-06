<template>
  <li>
    <span>{{item.text}}</span>
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

