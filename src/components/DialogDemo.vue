<template>
  <div class="example">
    <h1>示例一</h1>
    <Button @click="toggle">toggle</Button>
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

  <div class="example">
    <h1>示例二</h1>
    <div class="decorate">使用一句话打开Dialog</div>
    <Button @click="showDialog">open dialog</Button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const okFn = () => {
      console.log("okokok");
      return true; //必须选择返回true or false，true则可以关闭，false则不可关闭
    };
    const cancelFn = () => {
      console.log("cancel");
    };

    const showDialog = () => {
      openDialog({
        title: "我是题目",
        content: "你说啥",
        closeOnClickOverlay: true,
        ok(){
          console.log('oookkk');
          return true
        },
        cancel(){
          console.log('lllll')
        }
      });
    };

    return {
      x,
      toggle,
      okFn,
      cancelFn,
      showDialog
    };
  }
};
</script>
<style lang="scss" scoped>
.example{
  margin-bottom: 30px;
  h1{
    font-size: 20px;
    margin: 10px 0;
  }
  .decorate{
    font-size: 16px;
    color: #666666;
    margin: 10px 0;
  }
}
</style>
