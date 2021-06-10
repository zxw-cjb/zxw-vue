<template>
  <div>
    <div>我是A组件</div>
    <div class="aaa" :style="{ bbb: isShow }">我是xxxxx</div>
  </div>
</template>

<script>
export default {
  name: "A",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    add() {
      console.log(111);
    },
  },
  mounted() {
    this.$bus.$on("add", this.add);
    console.log("data", this);
    console.log("data", this.data);
  },
};
</script>

<style lang="less" scoped>
.aaa {
  color: red;
}
.bbb {
  color: green;
}
</style>
