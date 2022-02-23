<template>
  
    <div>Dialog示例</div>
    <h1>示例一</h1>
    <button @click="toggle">toggle</button>
      <Dialog v-model:visible="x" />
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';

export default {
  components:{Dialog},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }

    return {
      x,
      toggle
    }
  }
}
</script>
<style lang='scss' scoped>
</style>