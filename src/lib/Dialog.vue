<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="mui-dialog-overlay" @click="clickOverlay"></div>
      <div class="mui-dialog-wrapper">
        <div class="mui-dialog">
          <header>
            <slot name="title">提示</slot
            ><span class="mui-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="ok" level='main'>ok</Button>
            <Button @click="cancel">cancel</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      //点击遮罩层是否可以关闭对话框
      type: Boolean,
      default: false
    },
    //回调函数
    ok: {
      type: Function //必须选择返回true or false，true则可以关闭，false则不可关闭
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const clickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        //等价于props.ok && props.ok() !== false
        close();
      }
    };
    const cancel = () => {
      props.cancel?.()  //用户传cancel回调，就给他执行出来，不传就不执行呗  
      close();
    };
    return {
      close,
      clickOverlay,
      ok,
      cancel
    };
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.mui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
