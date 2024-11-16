<template>
<body>
  <button :class="class"><slot></slot></button>
</body>
</template>

<script setup lang='ts'>
defineProps({
  class: {
    type: String,
    required: true,
    validator: (value: string) => ['number', 'operator'].includes(value),
  },
});
</script>

<style>


</style>
<style scoped src="/src/assets/btn.css"></style>
