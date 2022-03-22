<template>
  <div class="mui-tabs">
    <div class="mui-tabs-nav" ref="container">
      <div
        class="mui-tabs-nav-item"
        :class="{ selected: t === selected }"
        v-for="(t, index) in titles"
        :key="index"
        @click="changeTab(t)"
        :ref="(el)=> {if(t === selected) selectedItem = el}"
      >
        {{ t }}
      </div>
      <div class="mui-tabs-indicator" ref="indicator"></div>
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
import { computed, onMounted, onUpdated, ref, watch } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = ()=>{
      const { width, left: left2 } = selectedItem.value.getBoundingClientRect();
      const {left: left1} = container.value.getBoundingClientRect()
      const left = left2 - left1

      indicator.value.style.width = width + "px";
      indicator.value.style.left = left + 'px'
    }
    onMounted(x);

    onUpdated(x)

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });

    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const changeTab = (title: string) => {
      context.emit("update:selected", title);
    };

    return {
      defaults,
      titles,
      current,
      changeTab,
      indicator,
      container,
      selectedItem
    };
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
  &-indicator {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 3px;
    background-color: $blue;
    transition: all .5s;
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
