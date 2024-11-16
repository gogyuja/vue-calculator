<template>
  <button :class="button.class" :style="button.style">
    <slot></slot>
  </button>
</template>

<script setup lang='ts'>
// defineProps({
//   class: {
//     type: String,
//     required: true,
//     validator: (value: string) => ['number', 'operator'].includes(value),
//   },
//   width:{
//     type:String,
//     default:"5rem"
//   },
//   height:{
//     type:String,
//     default:"5rem"
//   }
// });

defineProps({
  button:{
    type:Object,
    required:true,
    default:()=>({
      style:{width:'5rem',height:'5rem'}
    })
  }
})
</script>

<style>


</style>
<style scoped src="/src/assets/btn.css"></style>
