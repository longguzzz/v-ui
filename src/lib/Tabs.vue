<template>
  <div class="vui-tabs">
    <div class="vui-tabs-nav" ref="container">
      <div
        class="vui-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="select(t)"
        :ref="
          (el) => {
            if (t===selected) selectedTab = el as HTMLDivElement;
          }
        "
      >
        {{ t }}
      </div>
      <div class="vui-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="vui-tabs-content">
      <!-- {{ current }}  -->
      <component
        class="vui-tabs-content-item"
        :is="current"
        :key="current?.props?.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import {
  computed,
  defineComponent,
  VNode,
  ref,
  onMounted,
  watchEffect,
} from "vue";
export default defineComponent({
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedTab = ref<HTMLDivElement | null>(null);
    const indicator = ref<HTMLDivElement | null>(null);
    const container = ref<HTMLDivElement | null>(null);

    onMounted(() => {
      watchEffect(() => {
        const width = selectedTab.value?.getBoundingClientRect().width || 0;
        indicator.value!.style.width = `${width}px`;

        const left1 = container.value?.getBoundingClientRect().left || 0;
        const left2 = selectedTab.value?.getBoundingClientRect().left || 0;
        console.log(selectedTab);
        console.log(props.selected);
        const leftPos = left2 - left1;
        indicator.value!.style.left = `${leftPos}px`;
      });
    });

    const defaults = context.slots.default ? context.slots.default() : [];
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签应当是Tab");
      }
    });

    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props?.title === props.selected;
      }) as VNode;
      // 如果不加 as VNode，会在template的component位置报错：
      // 类型“{ class: string; key: any; }”的参数不能赋给类型“never”的参数。
    });

    const titles = defaults.map((tag) => {
      return tag.props?.title;
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      current,
      titles,
      select,
      selectedTab,
      indicator,
      container,
    };
  },
});
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.vui-tabs {
  &-nav {
    display: flex;
    position: relative;

    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      height: 3px;
      width: 100px;

      position: absolute;
      left: 0;
      bottom: -1px;

      background: $blue;
      transition: all 0.15s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
