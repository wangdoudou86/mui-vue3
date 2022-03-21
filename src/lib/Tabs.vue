<template>
  <div>
      Tabs组件
      <component :is="defaults[0]" />
      <component :is="defaults[1]" />
      <component :is="defaults[2]" />
  </div>
</template>

<script>
export default {
 setup(props, context){
     console.log(context.slots.default(), 'xxx')
     const defaults = context.slots.default()
     return {defaults}
 }
}
</script>
<style lang='scss' scoped>
</style>