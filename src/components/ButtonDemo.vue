<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div>
  <Button @click="onClick">click</Button>
    <Button theme="button" size="big" >你好button</Button>
    <Button theme="button" size="normal">你好button</Button>
    <Button theme="button" size="small">你好button</Button>
    <Button :theme="`link`">你好link</Button>
    <Button :theme="`text`">你好text</Button>
    <hr/>

    <Button level="danger">你好</Button>
    <Button :theme="`link`" level="danger">你好link</Button>
    <Button :theme="`text`" level="danger">你好text</Button>

<hr/>

    <Button level="danger" disabled>你好</Button>
    <Button disabled>你好</Button>
    <Button :theme="`link`" level="danger" disabled>你好link</Button>
<hr/>
<Button theme="button" size="normal" loading>加载中</Button>
 
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return { onClick };
  },
};
</script>
