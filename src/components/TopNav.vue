<script lang="ts">
import { inject, Ref, ref } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<Boolean>>("asideVisible", ref(false));
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<template>
  <div class="topNav">
    <div class="logo">logo</div>
    <ul class="menu">
      <li>菜单0</li>
      <li>菜单1</li>
    </ul>
    <span class="toggleAsideArea" @click="toggleAside"></span>
  </div>
</template>

<style lang="scss" scoped>
@import "../variables.scss"; 

.topNav {
  background: lightgreen;
  display: flex;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;

  z-index: $index-nav;

  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAsideArea {
    display: none;
    width: 24px;
    height: 24px;
    background: red;

    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }

    > .toggleAsideArea {
      display: inline-block;
    }
  }
}
</style>
