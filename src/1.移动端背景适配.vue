<template>
  <div>
    <div class="container"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const rootFontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = rootFontSize + "px";
    console.log(document.documentElement.style.fontSize);
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 200px;
  height: 200px;
  background-image: url("./assets/logo@1x.png");
  background-size: 100%;
  margin: 0 auto;
  border: 1px solid green;
}
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .container {
    background-image: url("./assets/logo@2x.png");
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .container {
    background-image: url("./assets/logo@3x.png");
  }
}
.box {
  width: 345px;
  height: 400px;
  background-color: red;
  margin: 0 auto;
}
</style>
