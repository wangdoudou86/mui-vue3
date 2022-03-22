<template>
  <div class="mui-tabs">
    <div class="mui-tabs-nav">
      <div
        class="mui-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="changeTab(t)"
      >
        {{ t }}
      </div>
    <div class="mui-tabs-indicator"></div>
    </div>
    <div class="mui-tabs-content">
      <component
        class="mui-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, watch } from 'vue';
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    console.log(props, 'props');
    
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const current = computed(() => {
      console.log("重新 return");
      return defaults.find(tag => tag.props.title === props.selected)
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const changeTab = (title: string) => {
      context.emit("update:selected", title);
    };

    return { defaults, titles, current, changeTab};
  },
};
</script>
<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333333;
$border-color: #d9d9d9;
.mui-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
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
  }
  &-indicator{
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: $blue;
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
