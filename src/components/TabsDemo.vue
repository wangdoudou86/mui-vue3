<template>
  <div class="example">
    <h1>示例一</h1>
    <Tabs :selected="selectedTab" @update:selected = 'selectedTab = $event'>
      <Tab title="导航1">内容一</Tab>
      <Tab title="导航2">内容二</Tab>
      <Tab title="导航3">内容三</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selectedTab = ref("导航1");
    return { selectedTab };
  },
};
</script>
<style lang="scss" scoped>
.example {
  margin-bottom: 30px;
  h1 {
    font-size: 20px;
    margin: 10px 0;
  }
  .decorate {
    font-size: 16px;
    color: #666666;
    margin: 10px 0;
  }
}
</style>
