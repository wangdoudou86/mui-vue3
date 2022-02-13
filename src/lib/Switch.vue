<template>
  <button :class="{checked}" @click="toggle"><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const checked = ref(true)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    
    return {
      checked,
      toggle
    }
  }
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  outline: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: 50%;
    background: #ffffff;
    transition: left 250ms;
  }
  &.checked {
    background: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>
