<template>
    <div  class="inputarea">{{curVal}}{{ operator }}</div>
</template>

<script setup lang='ts'>
import {ref, watch, watchEffect,onUpdated } from 'vue'
//이전값을 기억하는 변수(이전값이란 연산자이전숫자)
const prevVal=ref('');
const props = defineProps<{ label: string }>();
//Input 에 표시되는 현재 존재하는 변수
const curVal=ref('');
//계산식 /,*,+,-,= 이 저장되는 변수
const operator=ref('');
//방금 입력된 변수.




// watchEffect(() => {
// console.log("watchEffect");
//   // props.label이 변경될 때마다 무조건 실행됩니다.
//   const newVal = props.label;

//   // 숫자인 경우 이전 값에 추가
//   if (!isNaN(Number(newVal))) {
//     curVal.value += newVal;
//   } else {
//     switch (newVal) {
//       case ".":
//         if (!curVal.value.includes(".")) {
//           curVal.value += newVal;
//         }
//         break;
//       case "+":
//       case "-":
//       case "*":
//       case "/":
//         operator.value = newVal;
//         prevVal.value = curVal.value;
//         curVal.value = '';
//         break;
//       case "c":
//       case "C":
//         curVal.value = '';
//         prevVal.value = '';
//         operator.value = '';
//         break;
//       case "Empty":
//         curVal.value = '';
//         break;
//       case "BackSpace":
//         if (curVal.value.length > 0) {
//           curVal.value = curVal.value.slice(0, -1);
//         }
//         break;
//       default:
//         console.log("정상적인 입력을 해주세요.");
//         break;
//     }
//   }
// });

watch(
  ():string=>props.label,
  (newVal:string, oldVal:string)=>{
    //console.log(`curVal 컴포넌트 Update : ${newVal}`)
    console.log("newVal : "+newVal+", oldVal : "+oldVal);
    //숫자인 경우 이전 값에 추가
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
            operator.value=newVal;
            prevVal.value=curVal.value;
            curVal.value='';
            //
            break;
          case "c":
          case "C":
            curVal.value='';
            prevVal.value='';
            operator.value='';
            break;
          case "Empty":
            curVal.value='';
            break;
          case "BackSpace":
            curVal.value=curVal.value.slice(0,-1);
            console.log(curVal.value);
            break;
          default:
            console.log("정상적인 입력을 해주세요.");
            break;

        }
    }

   // curVal.value=newVal;

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
