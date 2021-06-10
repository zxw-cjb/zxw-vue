<template>
  <div>我是child组件{{ msg }}{{ msg2 }}</div>
</template>

<script>
export default {
  name: "child",
  props: ["msg", "msg2"],
};
</script>

<style lang="less" scoped>
</style>
