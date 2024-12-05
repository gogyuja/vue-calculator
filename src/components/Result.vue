<template>
<div class="resultcontainer">
  <ResultStack :resultVal="props.resultVal" :opeartor="props.operator"/>
  <Input :curVal="props.curVal" />
</div>
</template>

<script setup lang='ts'>
import Input from '../components/Input.vue'
import ResultStack from '../components/ResultStack.vue'
import {watch,ref} from 'vue'

const props = defineProps<{ curVal: string, resultVal:string, operator:string}>();
</script>

<style scoped>
.resultcontainer{
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width:1px;
  border-radius: 5px;
  border-color: rgb(44, 46, 46);
  padding:5px;
}

*{
  box-sizing: border-box;
  padding:5px;
}
</style>
