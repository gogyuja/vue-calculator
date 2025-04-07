<script setup lang="ts">
import Btn from './components/Btn.vue';
import Result from './components/Result.vue'
import {ref} from 'vue';

//계산결과값
const resultVal=ref('');
//입력창에 표시될 현재 값
const curVal=ref('');
//계산식 변수
const operator=ref('');

const triggerCalculate = (newVal: string) => {
  // 함수 내용을 여기에 추가하세요

  if(!isNaN(Number(newVal))){
      curVal.value+=newVal;
    }else{
      switch(newVal){
        case ".":
          if(!curVal.value.includes(".")){
            curVal.value+=newVal;
          }
          break;
          case "+":
          case "-":
          case "*":
          case "/":
            //이전값을 저장하고 연산자 저장
            if(operator.value==''){
              operator.value=newVal;
              resultVal.value=(curVal.value);
              curVal.value='';
            }else if(curVal.value==''){
              operator.value=newVal;
            }
            else{
              resultVal.value=calculate(resultVal.value,operator.value,curVal.value)
              operator.value=newVal;
              curVal.value='';
            }
            break;
          case "c":
          case "C":
            curVal.value='';
            resultVal.value='';
            operator.value='';
            break;
          case "Empty":
            curVal.value='';
            break;
          case "BackSpace":
            curVal.value=curVal.value.slice(0,-1);
            break;
          case "=":
          curVal.value=calculate(resultVal.value,operator.value,curVal.value)
              // switch(operator.value){
              //   case "+":
              //     curVal.value=String(Number(resultVal.value)+Number(curVal.value))
              //   break;
              //   case "-":
              //     curVal.value=String(Number(resultVal.value)+Number(curVal.value))
              //   break;
              //   case "*":
              //     curVal.value=String(Number(resultVal.value)*Number(curVal.value))
              //   break;
              //   case "/":
              //     curVal.value=String(Number(resultVal.value)/Number(curVal.value))
              // }
              resultVal.value='';
              operator.value='';
            break;
          default:
            console.log("정상적인 입력을 해주세요.");
            break;

        }
    }

};

const calculate=(a:string, b:string, c:string):string=>{
  let value:string;
  switch(b){
  case "+":
    value=String(Number(a)+Number(c))
  break;
  case "-":
    value=String(Number(a)-Number(c))
  break;
  case "*":
   value=String(Number(a)*Number(c))
  break;
  case "/":
    value=String(Number(a)/Number(c))
    break;
    default:
      value="Errorr"
      break;
  }
  return value;
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
