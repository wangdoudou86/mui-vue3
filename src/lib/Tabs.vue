<template>
  <div>
      Tabs组件
      <div v-for="(t,index) in titles" :key="index">{{t}}</div>
      <component v-for="(item, index) in defaults" :key="index" :is="item" />
  </div>
</template>

<script>
import Tab from './Tab.vue';
export default {
 setup(props, context){
     console.log(context.slots.default(), 'xxx')
     const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    const titles = defaults.map(tag => {
      return tag.props.title
    })
     
     return {defaults, titles}
 }
}
</script>
<style lang='scss' scoped>
</style>