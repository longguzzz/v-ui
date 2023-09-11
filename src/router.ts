import { createRouter, createWebHistory } from "vue-router";
import DocPageVue from "./views/DocPage.vue";
import HomePageVue from "./views/HomePage.vue";

import DocVue from "./components/DefaultDoc.vue";
import SwitchVue from "./components/SwitchDemo.vue";
import ButtonVue from "./components/ButtonDemo.vue";
import DialogVue from "./components/DialogDemo.vue";
import TabsVue from "./components/TabsDemo.vue";

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
