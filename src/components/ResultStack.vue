<template>
<div class="resultstack">{{ props.resultVal }}{{ props.opeartor }}</div>
</template>

<script setup lang='ts'>
const props=defineProps<{resultVal:string, opeartor:string}>();
</script>

<style scoped>
*{
  margin:0px;
  padding:0px;
}

.resultstack{
  width: 100%;
  height:3rem;
  background-color: aliceblue;
  text-align: right;
  font-size: 1.5rem;
}
</style>
