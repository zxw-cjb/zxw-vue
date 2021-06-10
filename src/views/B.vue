<template>
  <div>我是B组件</div>
</template>

<script>
export default {
  name: "B",
  mounted() {
    this.$bus.$emit("add");
  },
};
</script>

<style lang="less" scoped>
</style>
