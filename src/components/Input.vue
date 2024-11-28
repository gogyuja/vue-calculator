<template>
    <div :label class="inputarea"><p>{{input}}</p></div>
</template>

<script setup lang='ts'>
import {ref, watch} from 'vue'

const props = defineProps<{ label: string }>();
const input=ref('');

watch(
  ()=>props.label,
  (newVal)=>{
    //console.log(`Input 컴포넌트 Update : ${newVal}`)
    input.value=newVal;
  }
)

</script>

<style scoped>
*{
  margin:0px;
  padding:0px;
}

.inputarea{
  width:100%;
  height:5rem;
  background-color: rgb(214, 214, 214);
  text-align: right;
  font-size:3rem;
}
</style>
