<script setup lang="ts">
import Btn from './components/Btn.vue';
</script>

<template>
  <body>
      <h1>계산기</h1>
      <Btn :button="{label:`1`, class:`number`, style:{width:`10rem`}}"></Btn>
      <Btn :button="{label:`+`, class:`operator`, style:{width:`10rem`}}"></Btn>
</body>
</template>

<style scoped>

</style>
