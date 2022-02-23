<template>
  <div>Dialog示例</div>
  <div style="position: relative; z-index: 1;">
    <h1>示例一</h1>
    <button @click="toggle">toggle</button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="okFn"
      :cancel="cancelFn"
    >
      <template v-slot:title>
        <div>提示</div>
      </template>
      <template v-slot:content>
        <strong>我是内容</strong>
      </template>
    </Dialog>
  </div>

  <div
    style="width: 100px; height: 100px; position: relative; z-index: 2; background: blue;"
  ></div>
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
    const cancelFn = () => {};

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
