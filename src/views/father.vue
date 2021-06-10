<template>
  <div>
    <div>我是Father组件</div>
    <Child msg="123" :msg2="456" />
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "Father",
  components: {
    Child,
  },
};
</script>

<style lang="less" scoped>
</style>
