<template>
  <button :class="props.button.class" :style="computedStyle" >
    {{ props.button.label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ButtonProps {
  class: string; // 버튼에 추가할 클래스
  style?: Record<string, string | number>; // 버튼 스타일
  label?: string; // 버튼에 표시할 텍스트
}

// Props 타입 정의 + 기본값 설정
const props = withDefaults(
  defineProps<{
    button: ButtonProps;
  }>(),
  {
    button:{
      class:'number',
      style: { width: '5rem', height: '5rem' },
      label: '버튼', // 기본 버튼 텍스트
    }
  }
);

//style 병합 : 부모에서 전달되지 않은 경우 기본 값 사용
const computedStyle=computed(()=>({
  width: props.button.style?.width || '5rem',
  height: props.button.style?.height || '5rem',

  ...(props.button.style || {}), // 전달된 스타일 병합
}))
</script>

<style scoped>

</style>
<style scoped src="/src/assets/btn.css"></style>
