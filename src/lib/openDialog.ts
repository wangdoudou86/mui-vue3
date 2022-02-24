import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
//相当于就是操控Dialog组件
export const openDialog = options => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          //h的第二个参数的内容是Dialog组件标签上的属性值
          visible: true,
          "onUpdate:visible": newValue => {
            if (newValue === false) {
              close();
            }
          },
          closeOnClickOverlay,
          ok,
          cancel
        },
        { title, content }
      );
    }
  });

  app.mount(div);
};
