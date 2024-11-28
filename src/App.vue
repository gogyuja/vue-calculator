<script setup lang="ts">
import Btn from './components/Btn.vue';
import Result from './components/Result.vue'
import {ref} from 'vue';

let clickedLabel=ref('');

const triggerCalculate = (label: string) => {
  // 함수 내용을 여기에 추가하세요
  clickedLabel.value=label;
};

</script>

<template>
  <body>
    <div class="title">
      <h1>계산기</h1>
    </div>
    <div class="result">
      <Result :label="clickedLabel"/>
    </div>
    <div class="container">
        <Btn :button="{label:`C`, class:`item operator`}" @send-label="triggerCalculate"></Btn>
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
