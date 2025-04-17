<script setup lang="ts">
import Btn from './components/Btn.vue';
import Result from './components/Result.vue'
import {handleCalculatorInpt} from './function/calculator';
import {ref, watch, onMounted, onUnmounted} from 'vue';
import { KEYENUM } from '@/Enums/keyenum'


//계산결과값
const resultVal=ref('');
//입력창에 표시될 현재 값
const curVal=ref('');
//계산식 변수
const operator=ref('');

const triggerCalculate=(newVal:string)=>{
  handleCalculatorInpt(newVal, curVal, resultVal, operator);
}

// 컴포넌트 마운트 시 이벤트 등록
onMounted(() => {
  window.addEventListener('keydown',keyevtTrigger);
});

// 컴포넌트 언마운트 시 이벤트 제거 (중요!)
onUnmounted(() => {
  window.removeEventListener('keydown',keyevtTrigger );
});

const keyevtTrigger=(e:KeyboardEvent)=>{
  let key:string=e.key.toUpperCase()
  if(Object.values(KEYENUM).includes(key as KEYENUM)){
    triggerCalculate(key);
  }
}
</script>

<template>
  <body>
    <div class="title">
      <h1>계산기</h1>
    </div>
    <div class="result">
      <Result :curVal="curVal" :resultVal="resultVal" :operator="operator"/>
    </div>
    <div class="container">
        <Btn :button="{label:KEYENUM.CLEAR, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.ESCAPE, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.BACKSPACE, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.DIVIDE, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_1, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_2, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_3, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.MULTIPLY, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_4, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_5, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_6, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.PLUS, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_7, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_8, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_9, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.MINUS, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.FLAG_MINUS, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.NUMBER_0, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.DOT, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.EQUAL, class:`item operator`}" @send-label="triggerCalculate"></Btn>
    </div>
</body>
</template>

<style scoped>

</style>
<style scoped src="./assets/app.css"></style>
