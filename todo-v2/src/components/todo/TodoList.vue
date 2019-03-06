<template>
  <div class>
    <ul>
      <Item v-for="(item, idx) in list" :item="item" :key="idx+1"></Item>
    </ul>
  </div>
</template>
<script>
import Item from "@/components/todo/TodoItem";
export default {
  props: ["list"],
  components: { Item }
};
</script>

