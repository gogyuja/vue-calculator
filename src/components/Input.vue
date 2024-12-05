<template>
    <div class="inputarea">{{props.curVal}}</div>
</template>

<script setup lang='ts'>
import {ref, watch, watchEffect,onUpdated } from 'vue'
//이전값을 기억하는 변수(이전값이란 연산자이전숫자)
const prevVal=ref('');
const props = defineProps<{ curVal: string }>();
//Input 에 표시되는 현재 존재하는 변수

//계산식 /,*,+,-,= 이 저장되는 변수
const operator=ref('');
//방금 입력된 변수.


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
