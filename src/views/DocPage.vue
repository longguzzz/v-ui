<script lang="ts">
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";

export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible,
    };
  },
};
</script>

<template>
  <div class="layout-page">
    <TopNav class="nav" />
    <div class="content layout-content">
      <aside class="layout-aside" v-if="asideVisible">
        <h2>组件</h2>
        <ol>
          <li>
            <RouterLink to="/doc/switch">Switch</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/button">Button</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/dialog">Dialog</RouterLink>
          </li>
          <li>
            <RouterLink to="/doc/tabs">Tabs</RouterLink>
          </li>
        </ol>
      </aside>
      <main>
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../variables.scss";

.layout-page {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: $topnav-height;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.layout-content {
  display: flex;
  height: calc(100vh - $topnav-height);
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;

  }
}

.layout-aside {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
}

aside {
  background: lightblue;

  width: 150px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}

main {
  overflow: auto;
  padding: 16px;
  background: white;
  overflow-y: auto;

}
</style>
