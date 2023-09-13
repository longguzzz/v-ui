import { VNode, createApp, h } from "vue";
import DialogVue from "./Dialog.vue";

// 定义 options 的类型
interface DialogOptions {
    title: string | VNode;
    content: string | VNode;
    ok?: () => void;
    cancel?: () => void;
  }


export const openDialog = (options: DialogOptions) => {
  const { title, content, ok, cancel } = options;

  const divEl = document.createElement("div");
  document.body.appendChild(divEl);

  const close = () => {
    app.unmount();
    divEl.remove();
  };
  const app = createApp({
    render() {
      return h(
        DialogVue,
        {
          visible: true,
          "onUpdate:visible": (newVisible: boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          ok,
          cancel,
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(divEl);
};
