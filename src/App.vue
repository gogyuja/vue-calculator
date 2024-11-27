<script setup lang="ts">
import Btn from './components/Btn.vue';
</script>

<template>
  <body>
    <div class="title">
      <h1>계산기</h1>
    </div>
    <div class="result">
      <input type="text" name="" id="">
    </div>
    <div class="container">
        <Btn :button="{label:`C`, class:`item operator`, style:{width:`100%`, height:`100%`}}"></Btn>
        <Btn :button="{label:`/`, class:`item operator`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`1`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`2`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`3`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`*`, class:`item operator`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`4`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`5`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`6`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`+`, class:`item operator`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`7`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`8`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`9`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`-`, class:`item operator`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`.`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`0`, class:`item number`, style:{width:`100%`}}"></Btn>
        <Btn :button="{label:`=`, class:`item operator`, style:{width:`100%`}}"></Btn>
    </div>
</body>
</template>

<style scoped>

</style>
