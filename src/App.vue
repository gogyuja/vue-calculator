<script setup lang="ts">
import Btn from './components/Btn.vue';
</script>

<template>
  <body>
      <h1>계산기</h1>
      <Btn :class="`number`">1</Btn>
      <Btn :class="`operator`">+</Btn>
    </body>
</template>

<style scoped>

</style>
