<template>
  <div>Dialog示例</div>
  <h1>示例一</h1>
  <button @click="toggle">toggle</button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="okFn"
    :cancel="cancelFn"
  />
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";

export default {
  components: { Dialog },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const okFn = () => {
      return true; //必须选择返回true or false，true则可以关闭，false则不可关闭
    };
    const cancelFn = () => {
    };

    return {
      x,
      toggle,
      okFn,
      cancelFn
    };
  }
};
</script>
<style lang="scss" scoped></style>
