<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="vui-dialog-overlay" @click="onClickOverlay"></div>
      <div class="vui-dialog-wrapper">
        <div class="vui-dialog">
          <header>
            <slot name="title"></slot>
            <span class="vui-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    const cancel = () => {
      //   context.emit("cancel");
      props.cancel?.();
      close();
    };
    return { close, onClickOverlay, ok, cancel };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
$radius: 4px;

.vui-dialog {
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: fade-out(black, 0.5);

    z-index: 25;
  }

  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    z-index: 30;
  }
}

.vui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);

  min-width: 15em;
  min-width: 90%;

  & > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 20px;
  }

  & > main {
    padding: 12px 16px;
  }

  & > footer {
    padding: 12px 16px;
    border-top: 1px solid $border-color;
    text-align: right;
  }
}

.vui-dialog {
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
      background: #000;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
