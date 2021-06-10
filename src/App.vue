<template>
  <div>
    <!-- <div class="box"></div>
    <button class="btn" ref="btn" @click="handle">我是一个按钮</button> -->
    <!-- <A ref="aaa" /> -->
    <!-- <B ref="bbb" /> -->
    <!-- <B ref="bbb" />
    <A ref="aaa" /> -->
    <Father />
  </div>
</template>

<script>
import A from "./views/A";
import B from "./views/B";
import Father from "./views/father.vue";

export default {
  name: "App",
  methods: {
    // handle() {
    //   this.$refs.btn.disabled = true;
    // },
  },
  mounted() {
    // document.getElementsByClassName("btn")[0].disabled = true;
    // console.log(document.getElementsByClassName("btn")[0]);
    // console.log(this.$refs.btn);
    // console.log(this.$refs.aaa);
    // this.$refs.aaa.add();
    // console.log(this.$children);
  },
  updated() {
    // console.log(document.getElementsByClassName("btn"));
  },
  components: {
    A,
    B,
    Father,
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
