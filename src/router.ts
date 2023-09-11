import { createRouter, createWebHistory } from "vue-router";
import DocPageVue from "./views/DocPage.vue";
import HomePageVue from "./views/HomePage.vue";

import DocVue from "./components/DefaultDoc.vue";
import SwitchVue from "./components/Switch.vue";
import ButtonVue from "./components/Button.vue";
import DialogVue from "./components/Dialog.vue";
import TabsVue from "./components/Tabs.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    { path: "/", component: HomePageVue },
    {
      path: "/doc",
      component: DocPageVue,
      children: [
            { path: "", component: DocVue },
            { path: "switch", component: SwitchVue },
            { path: "button", component: ButtonVue },
            { path: "dialog", component: DialogVue },
            { path: "tabs", component: TabsVue },
        ],
    }
]
});

export default router;
