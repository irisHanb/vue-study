<template>
  <div class="nav">
    <ul>
      <li v-for="(nav, idx) in list" :key="idx">
        <router-link :to="nav.link">{{nav.label}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list']
}
</script>

