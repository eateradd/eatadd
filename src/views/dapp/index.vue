<template>
  <div class="dapp">
    <div class="content">
      <Home v-if="index == 0"></Home>
      <Personal v-if="index == 1"></Personal>
    </div>
    <div class="footerNav">
      <div class="listItem" @click="changeIndex(0)">
        <img v-if="index == 0" src="../../assets/img/route1A.png" alt="" />
        <img
          v-if="index == 1"
          style="width: 29px; height: 30px"
          src="../../assets/img/route1.png"
          alt=""
        />
        <div class="navTitle" v-if="index == 0" style="color: #fff">首页</div>
        <div class="navTitle" v-if="index == 1" style="color: #515154">
          首页
        </div>
      </div>
      <div class="listItem" @click="changeIndex(1)">
        <img v-if="index == 1" src="../../assets/img/route2A.png" alt="" />
        <img v-if="index == 0" src="../../assets/img/route2.png" alt="" />
        <div class="navTitle" v-if="index == 1" style="color: #fff">个人</div>
        <div class="navTitle" v-if="index == 0" style="color: #515154">
          个人
        </div>
      </div>
    </div>
    <div class="footerBox" style="height: 100px"></div>
  </div>
</template>

<script>
import Home from "@/views/dapp/HomePage.vue";
import Personal from "@/views/dapp/personal.vue";

export default {
  data() {
    return {
      index: 0,
    };
  },
  mounted() {
    if (this.$route.query.index == 1) {
      this.index = this.$route.query.index;
    }
  },
  components: {
    Home,
    Personal,
  },
  methods: {
    changeIndex(val) {
      this.index = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.dapp {
  font-family: FZLanTingHei-B-GBK;
  color: #fff;
  background: #191b1cff;
  // position: fixed;
  .footerNav {
    z-index: 1000;
    background: #191b1cff;
    display: flex;
    height: 80px;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding: 20px 0;
    .listItem {
      text-align: center;
    }
  }
}
</style>