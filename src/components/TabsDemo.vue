<template>
    <h1>示例1</h1>
    <Tabs v-model:selected="x" >
        <Tab title="导航1">内容1</Tab>
        <Tab title="第二页">内容2</Tab>
    </Tabs>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue';
import Tabs from '../lib/Tabs.vue';
import { ref } from 'vue';
export default {
    components: { Tab, Tabs },
    setup() {
        const x = ref('第二页')
        return {
            x
        }
    }
}
</script>

