<script setup lang="ts">
import Btn from './components/Btn.vue';
import Result from './components/Result.vue'
import {handleCalculatorInpt} from './function/calculator';
import {ref,watch} from 'vue';

//계산결과값
const resultVal=ref('');
//입력창에 표시될 현재 값
const curVal=ref('');
//계산식 변수
const operator=ref('');

const triggerCalculate=(newVal:string)=>{
  handleCalculatorInpt(newVal, curVal, resultVal, operator);
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
        <Btn :button="{label:`C`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`Empty`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
        <Btn :button="{label:`BackSpace`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
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
