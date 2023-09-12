<template>
  <button class="vui-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="vui-loading-indicator"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`vui-theme-${theme}`]: theme,
        [`vui-size-${size}`]: size,
        [`vui-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$radius: 4px;

$color: #333;
$border-color: #d9d9d9;

$blue: #40a9ff;
$red: red;
$grey: grey;

.vui-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  white-space: nowrap;

  background: white;
  color: $color;
  user-select: none;

  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  transition: background 0.25s;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}

.vui-button {
  &.vui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.vui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      color: darken(white, 5%);
    }
  }

  &.vui-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.vui-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.vui-theme-button {
    &.vui-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.vui-theme-link {
    &.vui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.vui-theme-text {
    &.vui-level-danger {
      color: $red;
      &:hoveer,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.vui-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      background: white;
      &:hover {
        border-color: $grey;
        background: white;
      }
    }
  }
  &.vui-theme-link,
  &.vui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}

.vui-button {
  > .vui-loading-indicator {
    width: 12px;
    height: 12px;

    display: inline-block;
    margin-right: 4px;

    border-radius: 50%;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;

    animation: vui-spin 0.75s linear infinite;
  }

  @keyframes vui-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
