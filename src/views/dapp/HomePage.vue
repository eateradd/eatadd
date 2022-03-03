<template>
  <div class="HomePage">
    <div class="topLogo">
      <img src="../../assets/img/logoDapp.png" alt="" />
    </div>
    <div class="scanBox">
      <div class="topBanner">
        <!-- v-if="minute <= 0 && secon <= 0" -->
        <img src="../../assets/img/gif.png" alt="" />
        <!-- <img
          v-if="minute > 0 || secon > 0"
          src="../../assets/img/gif.gif"
          alt=""
          style="width: 100%"
        /> -->
      </div>
      <div class="scanBtn">
        <div class="scanItem">
          <div class="scan" @click="scanShow">扫描</div>
          <!-- <div class="scan" @click="luckily">开奖</div> -->
          <div class="scan" @click="self">结算</div>
        </div>
        <!-- <div class="scanTips fz16">全网参与次数:{{ time }}</div> -->
        <div class="scanTips fz16">全网销毁EAT数量:{{ destroyEat }}</div>
      </div>
    </div>
    <!-- <div class="showTime">
      <div class="success">
        <div class="title">@0</div>
        <div class="content">{{ failTime }}次</div>
      </div>
      <div class="fail">
        <div class="title">@1</div>
        <div class="content">{{ winTime }}次</div>
      </div>
    </div> -->

    <div class="apply">
      <div class="applyBtn" @click="apply()">TOP 10<br />报名</div>
      <div class="waitBtn" @click="apply()">50 EAT 专场<br />00:00:00</div>
    </div>

    <div class="communityBox">
      <div class="communityTitle">
        <div class="title">
          @0: {{ winTime }}次&emsp;&emsp;&emsp;@1: {{ failTime }}次
        </div>
      </div>
      <div class="lineBar"></div>
      <div class="communityMark">
        <div class="title">昨日贡献星</div>
        <div class="listItem">
          <div
            class="list"
            :style="{ top: topUp + 'px' }"
            v-for="(v, i) in communityList"
            :key="i"
          >
            <div>{{ v.engageAddress }}</div>
            <div>{{ v.engageLp }}&nbsp;LP</div>
            <div>{{ v.engageEat }}&nbsp;EAT</div>
          </div>
          <div
            class="list"
            :style="{ top: topUp + 'px' }"
            v-for="val in communityList"
          >
            <div>{{ val.engageAddress }}</div>
            <div>{{ val.engageLp }}&nbsp;LP</div>
            <div>{{ val.engageEat }}&nbsp;EAT</div>
          </div>
        </div>
      </div>
    </div>
    <div class="scanMark" v-if="showScan">
      <div class="item">
        次数 <input type="text" v-model="scanTime" @input="thanScan()" />
      </div>
      <div class="btn">
        <div class="cancel" @click="close">否</div>
        <div class="config" @click="scanAdd">是</div>
      </div>
    </div>
    <div class="cover" v-show="coverShow || showScan" @click="close"></div>
  </div>
</template>

<script>
import config from "@/config";
import tools from "@/api/public.js";
import bi from "@/abi/bi";
import { Toast } from "vant";
import axios from "axios";
var Ip, address, recommend, Eat, Mrt, web3, Event, Hole;
export default {
  data() {
    return {
      communityList: [],
      showApply: false,
      coverShow: false,
      second: "",
      destroyEat: "",
      time: "",
      winTime: "",
      failTime: "",
      topUp: 0,
      invitedAddress: "",
      showScan: false,
      scanTime: 0,
      eatNum: 0,
      mrtNum: 0,
      maxTime:0,
    };
  },
  mounted() {
    axios
      .get("https://eatadd.com:8443/eatorder/find")
      .then((res) => {
        console.log(res)
        this.communityList = res.data.result.records;
        for (let k in this.communityList) {
          this.communityList[k].engageAddress =
            this.communityList[k].engageAddress.substr(0, 4) +
            "****" +
            this.communityList[k].engageAddress.substr(
              this.communityList[k].engageAddress.length - 4
            );
        }
      })
      .catch((err) => {
        console.log(err);
      });
    tools.testMASK().then((res) => {
      let { web, id } = res;
      web3 = web;
      address = id;
      var myDate = new Date();
      this.second = Math.floor(myDate.getTime() / 1000);
      Ip = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole1"]["abi"],
        config["hyue"][config["key"]]["Hole1"]["heyue"]
      );
      Hole = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole"]["abi"],
        config["hyue"][config["key"]]["Hole"]["heyue"]
      );
      Eat = new web3.eth.Contract(bi[2].abi, bi[2].heyue);
      Mrt = new web3.eth.Contract(bi[3].abi, bi[3].heyue);
      recommend = new web3.eth.Contract(
        config["hyue"][config["key"]]["recommend"]["abi"],
        config["hyue"][config["key"]]["recommend"]["heyue"]
      );

      Ip.methods.results("1", "0").call((err, ret) => {
        console.log(ret);
      });
      Ip.methods.results("1", "1").call((err, ret) => {
        console.log(ret);
      });
      Ip.methods.results("1", "2").call((err, ret) => {
        console.log(ret);
      });

      Ip.methods.userInfo(address).call((err, ret) => {
        if (ret) {
          Hole.methods.ownerloss(address).call((er, re) => {
            this.failTime = Number(ret["loss"]) + Number(re);
          });
          this.eatNum = Number(
            ret[1].slice(0, ret[1].length - 18) +
              "." +
              ret[1].slice(ret[1].length - 18)
          );
          this.mrtNum = ret[2];
        }
      });

      recommend.methods.recommend(address).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          this.invitedAddress = ret;
          this.isAdr = true;
        }
      });
      let topTimer = setInterval(() => {
        this.topUp -= 2;
        if (this.topUp <= -24 * (this.communityList.length - 1)) {
          this.topUp = 0;
        }
      }, 100);
    });
  },
  methods: {
    scanShow() {
      if (this.showScan == false) {
        this.showScan = true;
        this.coverShow = true;
      } else {
        this.showScan = false;
        this.coverShow = false;
      }
    },
    close() {
      this.showScan = false;
      this.coverShow = false;
    },
    apply() {
      Toast.fail("功能正在开发中...");
    },
    // 扫描
    scanAdd() {
      Ip.methods.scanadd(this.scanTime).send({ from: address }, (err, ret) => {
        if (ret) {
          Toast.loading({
            message: "正在扫描...",
            forbidClick: true,
            duration: 0,
            overlay: true,
          });
          this.polling(ret, "扫描完成");

          let verifyData = {
            address: address,
            parentAddress: this.invitedAddress,
          };
          // axios
          //   .post("https://eatadd.com:8443/eatuser/save", verifyData)
          //   .then((res) => {
          //     console.log(res);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
        }
      });
    },
    // 开奖
    self() {
      Ip.methods.self().send({ from: address }, (err, ret) => {
        if (ret) {
          Toast.loading({
            message: "扫描结束中...",
            forbidClick: true,
            duration: 0,
            overlay: true,
          });
          this.polling(ret, "扫描结束");
          let verifyData = {
            engageAddress: address,
            engageEat: 5,
            engageLp: 1,
            prizeAddress: this.needOpen,
            enterEat: 0.5,
            winEat: 0.1,
          };
          axios
            .post("https://eatadd.com:8443/eatorder/save", verifyData)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    // 轮询
    polling(r, msg) {
      let timer = setInterval(() => {
        web3.eth.getTransaction(r, (err, ret) => {
          if (ret.blockNumber != null) {
            Toast.clear;
            Toast.success(msg);
            clearInterval(timer);
          }
        });
      }, 1000);
    },
    thanScan() {
        console.log(Math.floor(this.eatNum/5))
        console.log(this.mrtNum)
      if(Math.floor(this.eatNum/5)>Number(this.mrtNum)){
        console.log(Math.floor(this.eatNum/5))
        console.log(this.mrtNum)
        this.maxTime = Math.floor('5'/5)
        if(this.maxTime<this.scanTime){
          console.log(this.scanTime)
          console.log(this.maxTime)
          Toast.fail('超出能够扫描的次数');
          this.scanTime=0;
        }
      }else{
        console.log(222)
        this.maxTime = this.mrtNum
        if(this.maxTime<this.scanTime){
          console.log(this.scanTime)
          console.log(this.maxTime)
          Toast.fail('超出能够扫描的次数');
          this.scanTime=0;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.HomePage {
  // background-image: url("../../assets/img/dappBg.png");
  // background-size: cover;
  .topLogo {
    padding: 20px 20px 10px;
  }
  .scanBox {
    // margin-top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .topBanner {
      text-align: center;
    }
    .scanBtn {
      width: 90%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .scanItem {
        width: 100%;
        display: flex;
        justify-content: space-around;
        .scan {
          margin-bottom: 10px;
          margin-left: 10px;
          box-shadow: 0px 0px 10px 4px rgba(51, 51, 51, 0.6);
          background: rgba(51, 51, 51, 0.7);
          padding: 10px;
          height: 48px;
          text-align: center;
          line-height: 28px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }
      }
      .scanTips {
        margin-top: 15px;
      }
    }
  }
  .apply {
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    .applyBtn {
      box-shadow: 0 0 12px 1px #00b1ef;
      background: #00b1ef;
      padding: 10px;
      height: 48px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      width: 40%;
    }
    .waitBtn {
      box-shadow: 0px 0px 10px 4px rgba(51, 51, 51, 0.6);
      background: rgba(51, 51, 51, 0.7);
      padding: 10px;
      height: 48px;
      text-align: center;
      border-radius: 5px;
      cursor: pointer;
      width: 40%;
    }
  }
  .communityBox {
    margin-top: 20px;
    padding: 40px;
    background: url("../../assets/img/listBg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 248px;
    .communityTitle {
      display: flex;
      justify-content: center;
      .title {
        margin-left: 20px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fbfbfb;
      }
    }
    .communityMark {
      margin: 20px 10%;
      max-height: 120px;
      .title {
        text-align: center;
        font-size: 14px;
        margin-bottom: 10px;
      }
      .listItem {
        overflow: hidden;
        max-height: 100px;
        .list {
          display: flex;
          font-size: 12px;
          justify-content: space-between;
          line-height: 24px;
          height: 24px;
          position: relative;
          div{
            flex: 1;
            text-align: center;
          }
        }
      }
    }
  }
}
.lineBar {
  width: 70%;
  border-bottom: 1px solid #979797;
  margin: 10px auto;
}
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.6;
  z-index: 999;
}
.showTime {
  display: flex;
  justify-content: center;
  div {
    flex: 1;
    text-align: center;
    .title {
      margin: 20px 0;
    }
  }
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.scanMark {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 325px;
  height: 140px;
  z-index: 1000;
  background: #2c2c2dff;
  padding: 20px 30px;
  border-radius: 5px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    input {
      padding: 2px 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(22, 22, 22, 1);
      width: 80%;
    }
  }
  .btn {
    display: flex;
    justify-content: space-between;
    div {
      background: rgba(51, 51, 51, 1);
      padding: 12px;
      width: 40%;
      text-align: center;
      border-radius: 5px;
      margin-top: 20px;
    }
  }
}
</style>