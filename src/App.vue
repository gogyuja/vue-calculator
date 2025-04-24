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
const operator=ref(KEYENUM.BLANK);

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
        <Btn :class="`operator`" :label=KEYENUM.CLEAR  @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.ESCAPE @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.BACKSPACE  @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.DIVIDE @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_1 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_2 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_3 @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.MULTIPLY @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_4 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_5 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_6 @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.PLUS @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_7 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_8 @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_9 @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.MINUS @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.FLAG_MINUS @send-label="triggerCalculate"></Btn>
        <Btn :class="`number`" :label=KEYENUM.NUMBER_0 @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.DOT @send-label="triggerCalculate"></Btn>
        <Btn :class="`operator`" :label=KEYENUM.EQUAL @send-label="triggerCalculate"></Btn>
    </div>
</body>
</template>

<style scoped>

</style>
<style scoped src="./assets/app.css"></style>
