<template>
  <h2>Dialog 示例1</h2>

  <Button @click="toggle">dialog</Button>
  <Dialog v-model:visible="v" :ok="okHandler" @cancel="cancelHandler">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第一行</p>
      <p>第二行</p>
    </template>
  </Dialog>

<h2>Dialog 示例2</h2>
<Button @click="showDialog">show</Button>

</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { h, ref } from "vue";
import { openDialog } from '../lib/openDialog';

export default {
  components: { Dialog, Button },
  setup() {
    const v = ref(false);

    const toggle = () => {
      v.value = !v.value;
    };
    const okHandler = () => {
      console.log("ok");
      return false;
    };
    const cancelHandler = () => {
      console.log("cancel");
    };
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
            console.log('ok')
        },
        cancel () {
            console.log('cancel')
        }
      })
    };

    return { v, toggle, okHandler, cancelHandler , showDialog };
  },
};
</script>
