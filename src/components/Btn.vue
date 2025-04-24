<template>
  <button  @click="$emit('sendLabel',label )" >
    {{ label}}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';


// Props 타입 정의 + 기본값 설정
// ✅ 올바른 방식
defineProps<{
  label: string; // string 타입으로 명시
}>();
</script>

<style scoped>
</style>
<style scoped src="/src/assets/btn.css"></style>
