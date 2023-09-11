<template>
  <button
    class="animation-switch"
    @click="toggle"
    :class="{ checked: selected }"
  >
    <span> </span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const toggle = () => {
      ctx.emit("update:selected", !props.selected);
    };
    return {
      toggle,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;

  height: $h;
  width: $h * 2;
  border-radius: $h/2;
  border: none;

  background: #bfbfbf;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;

    height: $h2;
    width: $h2;
    border-radius: $h2 / 2;

    background: white;
    user-select: none;
  }
}

.animation-switch {
  > span {
    transition: all 250ms;
  }

  &:focus {
    outline: none;
  }

  &.checked {
    background: #1890ff;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
