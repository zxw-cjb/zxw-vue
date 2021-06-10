<template>
  <div>
    <div class="box"></div>
    <button class="btn" ref="btn" @click="handle">我是一个按钮</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handle() {
      this.$refs.btn.disabled = true;
    },
  },
  mounted() {
    document.getElementsByClassName("btn")[0].disabled = true;
    console.log(document.getElementsByClassName("btn")[0]);
    console.log(this.$refs.btn);
  },
  updated() {
    console.log(document.getElementsByClassName("btn"));
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 345px;
  height: 150px;
  margin: 15px;
  background-color: red;
}
</style>
