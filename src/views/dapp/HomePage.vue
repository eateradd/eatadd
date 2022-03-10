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
        <div class="scanTips fz16" style="margin-bottom: 15px">
          奇点倒计时：{{ hour }}&nbsp;时&nbsp;{{ min }}&nbsp;分&nbsp;{{
            sec
          }}&nbsp;秒
        </div>
        <div class="scanItem">
          <div class="scan" @click="scanShow">扫描</div>
          <div class="scan" @click="luckily">奇点</div>
          <div class="scan" @click="self">结算</div>
        </div>
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
            v-for="(val, ind) in communityList"
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
      <div>最高可参与&emsp;{{ maxTime }}&emsp;次</div>
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
var Ip, address, recommend, Eat, Mrt, web3, Event, Hole, Np;
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
      maxTime: 0,
      luckily1: "",
      luckily2: "",
      luckily3: "",
      dayTime: "",
      lastTime: "",
      hour: "",
      min: "",
      sec: "",
      perDay: "",
    };
  },
  mounted() {
    axios
      .get("https://eatadd.com:8443/eatorder/find")
      .then((res) => {
        console.log(res);
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
      Np = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole2"]["abi"],
        config["hyue"][config["key"]]["Hole2"]["heyue"]
      );
      Eat = new web3.eth.Contract(bi[2].abi, bi[2].heyue);
      Mrt = new web3.eth.Contract(bi[3].abi, bi[3].heyue);
      recommend = new web3.eth.Contract(
        config["hyue"][config["key"]]["recommend"]["abi"],
        config["hyue"][config["key"]]["recommend"]["heyue"]
      );

      Np.methods.award(address).call((err, ret) => {
        this.dayTime = ret;
        console.log(this.dayTime);
        Np.methods.day().call((er, re) => {
          this.perDay = re;
          Np.methods.lasttime(Number(re)).call((e, r) => {
            Np.methods.cycle().call((ee, rr) => {
              this.lastTime = Number(r) + Number(rr);
              var downTimer = setInterval(() => {
                var d = new Date();
                Np.methods.bonuses().call((err, ret) => {
                  Ip.methods.bonuses().call((eee, rrr) => {
                    this.numToStr(rrr,ret);
                  });
                });
                if (
                  Math.floor(d.getTime() / 1000) < this.lastTime &&
                  this.luckily3 == 0
                ) {
                  this.hour = Math.floor(
                    (this.lastTime - Math.floor(d.getTime() / 1000)) / 60 / 60
                  );
                  this.min = Math.floor(
                    ((this.lastTime - Math.floor(d.getTime() / 1000)) / 60) % 60
                  );
                  this.sec = Math.floor(
                    (this.lastTime - Math.floor(d.getTime() / 1000)) % 60
                  );
                } else {
                  this.hour = 0;
                  this.min = 0;
                  this.sec = 0;
                }
              }, 1000);
            });
          });
        });
        Np.methods.results(Number(this.dayTime), 0).call((er, re) => {
          this.luckily1 = re;
        });
        Np.methods.results(Number(this.dayTime), 1).call((er, re) => {
          this.luckily2 = re;
        });
        Np.methods.results(Number(this.dayTime), 2).call((er, re) => {
          this.luckily3 = re;
        });
        Np.methods.userInfo(address).call((er, re) => {
          if (re) {
            Hole.methods.ownerloss(address).call((e, r) => {
              this.failTime = Number(re["loss"]) + Number(r);
            });
            this.eatNum = Number(
              re["eatamount"].slice(0, re["eatamount"].length - 18) +
                "." +
                re["eatamount"].slice(re["eatamount"].length - 18)
            );
            // Ip.methods.lottery(address,String(this.dayTime)).call((e,r)=>{
            // console.log(r)
            this.failTime = re["loss"];
            this.winTime = Number(re["total"]) - Number(re["loss"]);

            // });
            this.mrtNum = re["mrtamount"];
            if (Math.floor(this.eatNum / 5) >= Number(this.mrtNum)) {
              this.maxTime = this.mrtNum;
            } else {
              this.maxTime = Math.floor(this.eatNum / 5);
            }
          }
        });
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
    numToStr(num,nu) {
      // const numStr = String(num);
      let newNum = "";
      let n = String(Number(num)+Number(nu))
      if (n.length <= 18) {
        let b = "";
        for (let k = 0; k < 18 - n.length; k++) {
          b += "0";
        }
        newNum = "0." + b + n;
      } else {
        let b = n.length - 18;
        newNum = n.slice(0, b) + "." + n.slice(b);
      }
      let index = newNum.indexOf(".");
      this.destroyEat = (
        (Number(newNum.substring(0, index + 7)) * 40) / 14 +
        98.8
      ).toFixed(2);
    },
    numToStrUp(num) {
      console.log(num);
      // const numStr = String(num);
      let newNum = "";
      let index = num.indexOf(".");
      let changeNum = "";
      if (num == 0) {
        return;
      }
      if (index != -1) {
        console.log(1);
        for (let i = 0; i < 18 - num.length + 1 + index; i++) {
          newNum += "0";
        }
        changeNum = num.slice(0, index) + num.slice(index + 1) + newNum;
      } else {
        console.log(2);
        for (let i = 0; i < 18; i++) {
          newNum += "0";
        }
        changeNum = num + newNum;
      }
      console.log(changeNum);
      this.pushNum = changeNum;
      return changeNum;
    },
    scanShow() {
      if (this.dayTime != 0) {
        Toast.fail("已扫描，Eat冻结");
        return false;
      } else {
        if (this.showScan == false) {
          this.showScan = true;
          this.coverShow = true;
        } else {
          this.showScan = false;
          this.coverShow = false;
        }
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
      Np.methods.scanadd(this.scanTime).send({ from: address }, (err, ret) => {
        if (ret) {
          Toast.loading({
            message: "正在扫描...",
            forbidClick: true,
            duration: 0,
            overlay: true,
          });
          this.polling(ret, "扫描完成");
          this.showScan = false;
          let verifyData = {
            engageAddress: address,
            engageEat: Number(this.scanTime * 5),
            engageLp: Number(this.scanTime),
            participation: Number(this.scanTime),
            period: Number(this.perDay),
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
    // 开奖
    luckily() {
      var d = new Date();
      console.log(this.dayTime);
      if (
        Math.floor(d.getTime() / 1000) >= this.lastTime &&
        this.luckily3 == 0
      ) {
        Np.methods.luckilystar().send({ from: address }, (err, ret) => {
          console.log(ret);
        });
      } else if (
        Math.floor(d.getTime() / 1000) < this.lastTime &&
        this.luckily3 == 0
      ) {
        Toast.fail("未到奇点时间");
      } else {
        Toast.success("昨日奇点事件已完成");
      }
    },
    // 结算
    self() {
      Np.methods.award(address).call((err, ret) => {
        console.log(this.luckily3, ret);
        if (this.luckily3 != 0 && ret != 0) {
          Np.methods.selfaward().send({ from: address }, (err, ret) => {
            console.log(ret);
          });
        } else {
          Toast.fail("未到结算时间");
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
      if (Math.floor(this.eatNum / 5) >= Number(this.mrtNum)) {
        this.maxTime = this.mrtNum;
      } else {
        console.log(222);
        this.maxTime = Math.floor(this.eatNum / 5);
      }
      if (this.maxTime < this.scanTime) {
        Toast.fail("超出能够扫描的次数");
        this.scanTime = 0;
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
          div {
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