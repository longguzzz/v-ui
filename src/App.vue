<script lang="ts">
import { ref, provide, onMounted, onUnmounted } from "vue";
import router from "./router";

export default {
  name: "App",
  setup() {
    const prevWidth = ref(window.innerWidth)
    let asideVisible = ref(prevWidth.value <= 500 ? false : true);
    provide("asideVisible", asideVisible);

    const updateWidth = () => {
      const newWidth = window.innerWidth;
      // if (newWidth > prevWidth.value && prevWidth.value <= 500) {
      if (newWidth > prevWidth.value && newWidth <= 500) {
        prevWidth.value = newWidth;
        return
      }
      asideVisible.value = newWidth <= 500 ? false : true;
      prevWidth.value = newWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", updateWidth);
      updateWidth();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWidth);
    });

    router.afterEach(() => {
      // if (prevWidth <= 500) {
      //   asideVisible.value = false;
      // }
    });
  },
};
</script>

<template>
  <div>
    <routerView />
  </div>
</template>

<style lang="scss" scoped></style>
