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
        <Btn :button="{label:KEYENUM.EMPTY, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:KEYENUM.BACKSPACE, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`/`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`1`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`2`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`3`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`*`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`4`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`5`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`6`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`+`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`7`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`8`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`9`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`-`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`.`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`0`, class:`item number`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`=`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
    </div>
</body>
</template>

<style scoped>

</style>
<style scoped src="./assets/app.css"></style>
