<template>
  <div class="Personal">
    <div class="topLogo" @click="goHome">
      <img src="../../assets/img/logoDapp.png" alt="" />
    </div>
    <div class="property">
      <div class="titleBox">
        <div class="title fz20">我的资产</div>
        <div class="address">{{ add }}</div>
      </div>
      <!-- <div class="balance">
        <div class="left"></div>
        <div class="right">
        </div>
      </div> -->
      <div class="lineBar"></div>
      <div class="balanceInfo">
        <div class="balanceItem">
          <div class="left">EAT</div>
          <div class="right">{{ eatNum }}</div>
        </div>
        <div class="balanceItem">
          <div class="left">MRT</div>
          <div class="right">{{ mrtNum }}</div>
        </div>
        <div class="balanceItem">
          <div class="left">NFT</div>
          <div class="right">{{ nftN }}</div>
        </div>
      </div>
      <div class="footerBtn">
        <div class="btn" @click="showModel(1)">提现</div>
        <div class="btn" @click="showModel(0)">充值</div>
        <div class="btn" @click="showModel(2)">NFT提取</div>
      </div>
    </div>

    <!-- <div class="recommend">
      <div class="title">动态推荐记录</div>
      <div class="recommendList" v-for="(v, i) in list" :key="i">
        <div class="left">{{ v.name }}</div>
        <div class="right">{{ v.date }}</div>
      </div>
    </div> -->

    <div class="visitList">
      <div
        class="visitItem"
        v-for="(v, i) in visitList"
        :key="i"
        @click="goInfo(v.title)"
      >
        <div class="left"><img :src="v.logo" alt="" />{{ v.title }}</div>
        <div class="right">
          <img
            src="../../assets/img/goDapp.png"
            alt=""
            v-if="v.title != '版本'"
          />
          <div v-if="v.title == '版本'">v2.0.0</div>
        </div>
      </div>
    </div>

    <div class="mark" v-show="markShow">
      <div class="title" v-if="choose == 0">充值</div>
      <div class="title" v-if="choose == 1">提现</div>
      <div class="title" v-if="choose == 2">提取</div>
      <div class="item" v-if="choose == 1 || choose == 0">
        EAT <input type="text" v-model="eatN" @input="showAccredit(1)" />
      </div>
      <div class="item" v-if="choose == 1 || choose == 0">
        MRT <input type="text" v-model="mrtN" @input="showAccredit(2)" />
      </div>
      <div class="item" v-if="choose == 0">
        邀请人
        <input
          type="text"
          :disabled="isAdr"
          v-model="invitedAddress"
          @change="changeAdr"
        />
      </div>
      <div class="item">是否提取全部 Nft 碎片</div>
      <div class="btn" v-if="choose == 0">
        <div class="cancel" v-show="showAccredit1" @click="accredit(1)">
          授权Eat
        </div>
        <div class="config" v-show="showAccredit2" @click="accredit(2)">
          授权MRT
        </div>
      </div>
      <div class="btn" v-show="!showAccredit1 && !showAccredit2">
        <div class="cancel" @click="close">否</div>
        <div class="config" v-if="choose == 0" @click="deposit">是</div>
        <div class="config" v-if="choose == 1" @click="withdraw">是</div>
        <div class="config" v-if="choose == 2" @click="withdrawNft">是</div>
      </div>
    </div>

    <div class="cover" v-show="coverShow" @click="close"></div>
  </div>
</template>

<script>
import config from "@/config";
import tools from "@/api/public.js";
import bi from "@/abi/bi";
import { Toast } from "vant";
import axios from "axios";
var Ip, address, recommend, Eat, Mrt, web3, BN, Hole, debris;
export default {
  data() {
    return {
      coverShow: false,
      markShow: false,
      showAccredit1: false,
      showAccredit2: false,
      canDeposit: false,
      choose: 0,
      add: "",
      list: [
        {
          name: "西南社区 4165432",
          coin: "5 EAT",
          date: "02.12",
        },
        {
          name: "西南社区 4165437",
          coin: "10 EAT",
          date: "02.12",
        },
        {
          name: "西南社区 4165432",
          coin: "5 EAT",
          date: "02.12",
        },
        {
          name: "西南社区 4165432",
          coin: "5 EAT",
          date: "02.12",
        },
        {
          name: "西南社区 4165432",
          coin: "5 EAT",
          date: "02.12",
        },
      ],
      visitList: [
        // {
        //     title:'参与记录',
        //     logo:require("../../assets/img/visit1.png")
        // },
        {
          title: "社交媒体",
          logo: require("../../assets/img/visit2.png"),
          path: "",
        },
        {
          title: "版权",
          logo: require("../../assets/img/visit3.png"),
          path: "",
        },
        {
          title: "隐私与政策",
          logo: require("../../assets/img/visit4.png"),
          path: "",
        },
        {
          title: "版本",
          logo: require("../../assets/img/visit5.png"),
          path: "",
        },
        {
          title: "关于我们",
          logo: require("../../assets/img/vistit6.png"),
          path: "",
        },
        // {
        //     title:'设置',
        //     logo:require("../../assets/img/visit7.png")
        // },
        {
          title: "v2提现",
          logo: require("../../assets/img/visit1.png"),
          path: "",
        },
      ],
      invitedAddress: "",
      eatN: "0",
      mrtN: "0",
      needOpen: "",
      shouldOpen: false,
      eatNum: "",
      mrtNum: "",
      isAdr: false,
      pushNum: "",
      failTime: "",
      nftN: "0",
    };
  },
  mounted() {
    // console.log(1)
    tools.testMASK().then((res) => {
      let { web, id } = res;
      web3 = web;
      address = id;

      // console.log(web3)
      this.add = id.substr(0, 4) + "****" + id.substr(id.length - 4);
      Ip = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole1"]["abi"],
        config["hyue"][config["key"]]["Hole1"]["heyue"]
      );
      Hole = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole"]["abi"],
        config["hyue"][config["key"]]["Hole"]["heyue"]
      );
      recommend = new web3.eth.Contract(
        config["hyue"][config["key"]]["recommend"]["abi"],
        config["hyue"][config["key"]]["recommend"]["heyue"]
      );
      debris = new web3.eth.Contract(
        config["hyue"][config["key"]]["debris"]["abi"],
        config["hyue"][config["key"]]["debris"]["heyue"]
      );
      debris.methods.minted(address).call((err, ret) => {
        console.log(ret);
        this.nftN = ret;
      });
      clearInterval(debrisTimer);
      var debrisTimer = setInterval(() => {
        debris.methods.minted(address).call((err, ret) => {
          console.log(ret);
          this.nftN = ret;
        });
      }, 5000);
      Eat = new web3.eth.Contract(bi[2].abi, bi[2].heyue);
      Mrt = new web3.eth.Contract(bi[3].abi, bi[3].heyue);

      recommend.methods.recommend(address).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          this.invitedAddress = ret;
          this.canDeposit = true;
          this.isAdr = true;
        }
      });
      Ip.methods.userInfo(address).call((err, ret) => {
        if (ret) {
          Hole.methods.ownerloss(address).call((er, re) => {
            this.failTime = Number(ret["loss"]) + Number(re);
          });
          if (this.needOpen == address) {
            this.shouldOpen = true;
          }
          this.eatNum = Number(
            ret["eatamount"].slice(0, ret["eatamount"].length - 18) +
              "." +
              ret["eatamount"].slice(ret["eatamount"].length - 18)
          );
          this.mrtNum = ret["mrtamount"];
        }
      });
    });
  },
  methods: {
    numToStr(num, code) {
      // const numStr = String(num);
      let newNum = "";
      if (num.length <= 18) {
        let b = "";
        for (let k = 0; k < 18 - num.length; k++) {
          b += "0";
        }
        newNum = "0." + b + num;
      } else {
        let b = num.length - 18;
        newNum = num.slice(0, b) + "." + num.slice(b);
      }
      let index = newNum.indexOf(".");
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
    showModel(val) {
      this.choose = val;
      if (this.markShow == false) {
        this.markShow = true;
        this.coverShow = true;
      } else {
        this.markShow = false;
        this.coverShow = false;
        this.eatN = 0;
        this.mrtN = 0;
      }
    },
    close() {
      this.markShow = false;
      this.coverShow = false;
      this.eatN = 0;
      this.mrtN = 0;
    },

    // 监听输入 推荐人
    changeAdr() {
      if (this.invitedAddress == address) {
        // 是自己
        Toast.fail("推荐节点不能为自己");
        return;
      }
      if (
        this.invitedAddress == "" ||
        this.invitedAddress == "0x0000000000000000000000000000000000000000"
      ) {
        // 是自己
        Toast.fail("推荐节点无效");
        return;
      }
      if (
        this.invitedAddress.length != 42 &&
        this.invitedAddress.slice(0, 2) != "0x"
      ) {
        this.invitedAddress = "";
        Toast.fail("该地址不符合规范");
        return;
      }
      Eat.methods.balanceOf(this.invitedAddress).call((err, ret) => {
        if (ret == 0) {
          // this.canDeposit=false
          this.invitedAddress = "";
          Toast.fail("推荐节点余额不能为0");
          return;
        } else {
          recommend.methods.recommend(this.invitedAddress).call((err, ret) => {
            if (ret != "0x0000000000000000000000000000000000000000") {
              if (
                this.invitedAddress != address &&
                (this.invitedAddress != "" ||
                  this.invitedAddress !=
                    "0x0000000000000000000000000000000000000000") &&
                this.invitedAddress.length == 42 &&
                this.invitedAddress.slice(0, 2) == "0x"
              ) {
                this.canDeposit = true;
              }
            } else {
              // this.canDeposit=false
              this.invitedAddress = "";
              Toast.fail("推荐节点无效");
            }
          });
        }
      });
    },
    // 充值
    deposit() {
      if (this.canDeposit == false) {
        return;
      }
      if (this.invitedAddress == "") {
        alert("邀请人地址不能为空");
        return;
      }
      if (this.eatN != 0) {
        this.numToStrUp(this.eatN);
      } else {
        this.pushNum = this.eatN;
      }
      console.log(this.pushNum, this.mrtN);
      Ip.methods
        .deposit(this.pushNum, this.mrtN, this.invitedAddress)
        .send({ from: address }, (err, ret) => {
          console.log(ret);
          if (ret) {
            Toast.loading({
              message: "正在充值...",
              forbidClick: true,
              duration: 0,
              overlay: true,
            });
            this.showAccredit1 = false;
            this.polling(ret, "充值成功");
            recommend.methods.recommend(address).call((e, r) => {
              if (ret == "0x0000000000000000000000000000000000000000" || r == '') {
                let verifyData = {
                  address: address,
                  parentAddress: this.invitedAddress,
                };
                axios
                  .post("https://eatadd.com:8443/eatuser/save", verifyData)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
            this.close();
          }
        });
    },
    // 提现
    withdraw() {
      if (this.shouldOpen) {
        Toast.fail("正在扫描中,无法提现");
        return;
      }
      Ip.methods.award(address).call((err, ret) => {
        if (ret != 0) {
          Toast.fail("尚未结算，无法提现");
          return;
        } else {
          if (this.eatN != 0) {
            this.numToStrUp(this.eatN);
          } else {
            this.pushNum = this.eatN;
          }
          Ip.methods
            .withdraw(this.pushNum, this.mrtN)
            .send({ from: address }, (er, re) => {
              console.log(re);
              if (re) {
                Toast.loading({
                  message: "正在提现...",
                  forbidClick: true,
                  duration: 0,
                  overlay: true,
                });
                this.showAccredit1 = false;
                this.polling(re, "提现成功");
                this.close();
              }
            });
        }
      });
    },
    // 授权
    accredit(code) {
      console.log(code);
      if (code == 1) {
        Eat.methods
          .allowance(address, config["hyue"][config["key"]]["Hole1"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.numToStrUp(this.eatN))) {
              Eat.methods
                .approve(
                  config["hyue"][config["key"]]["Hole1"]["heyue"],
                  this.numToStrUp(this.eatN) + "0000"
                )
                .send({ from: address }, (er, re) => {
                  if (re) {
                    Toast.loading({
                      message: "正在授权...",
                      forbidClick: true,
                      duration: 0,
                      overlay: true,
                    });
                    this.showAccredit1 = false;
                    this.polling(re, "授权成功");
                  }
                });
            }
          });
      } else if (code == 2) {
        Mrt.methods
          .allowance(address, config["hyue"][config["key"]]["Hole1"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.mrtN)) {
              Mrt.methods
                .approve(
                  config["hyue"][config["key"]]["Hole1"]["heyue"],
                  String(this.mrtN * 10 ** 4)
                )
                .send({ from: address }, (er, re) => {
                  if (re) {
                    Toast.loading({
                      message: "正在授权...",
                      forbidClick: true,
                      duration: 0,
                      overlay: true,
                    });
                    this.showAccredit2 = false;
                    this.polling(re, "授权成功");
                  }
                });
            }
          });
      }
    },
    // 轮询
    polling(r, msg) {
      let timer = setInterval(() => {
        web3.eth.getTransaction(r, (err, ret) => {
          console.log(r);
          if (ret.blockNumber != null) {
            Toast.clear;
            Toast.success(msg);
            Ip.methods.userInfo(address).call((err, ret) => {
              if (ret) {
                console.log(
                  ret["eatamount"].slice(ret["eatamount"].length - 18)
                );
                this.eatNum = Number(
                  ret["eatamount"].slice(0, ret["eatamount"].length - 18) +
                    "." +
                    ret["eatamount"].slice(ret["eatamount"].length - 18)
                );
                this.mrtNum = ret["mrtamount"];
              }
            });
            clearInterval(timer);
          }
        });
      }, 1000);
    },

    goInfo(val) {
      if (val == "版本") {
        return;
      } else {
        this.$router.push("/dapp/info?title=" + val);
      }
    },
    showAccredit(code) {
      if (code == 1) {
        Eat.methods
          .allowance(address, config["hyue"][config["key"]]["Hole1"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.numToStrUp(this.eatN))) {
              this.showAccredit1 = true;
            }
          });
      } else if (code == 2) {
        Mrt.methods
          .allowance(address, config["hyue"][config["key"]]["Hole1"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.mrtN)) {
              this.showAccredit2 = true;
            }
          });
      }
    },
    goHome() {
      this.$router.push("/");
    },
    withdrawNft() {
      // console.log(222);
      debris.methods
        .mint(address, this.failTime)
        .send({ from: this.address }, (err, ret) => {
          console.log(ret);
          if (ret) {
            this.polling(ret, "提取完成");
          }
        });
    },
    // getNft() {
    //   this.nftN=Number(this.nftN)
    //   if(this.nftN>this.failTime){
    //     Toast.fail('超出可提取碎片数量')
    //     this.nftN=0
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.Personal {
  .topLogo {
    padding: 20px 20px 10px;
  }
  .property {
    background: url("../../assets/img/topbg.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 30px;
    height: 240px;
    .titleBox {
      margin-bottom: 20px;
    }
    .balance {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      margin-top: 25px;
      .left {
        font-size: 30px;
      }
      .right {
        display: flex;
        align-items: center;
        .btn {
          margin: 0 10px;
        }
      }
    }
    .balanceInfo {
      margin-top: 20px;
      .balanceItem {
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;
        .left {
          display: flex;
          align-items: center;
        }
      }
    }
    .footerBtn {
      display: flex;
      justify-content: space-around;
      .btn {
        padding: 10px 30px;
        border-radius: 5px;
        box-shadow: 0 0 12px 1px #00b1ef;
        background: #00b1ef;
      }
    }
  }

  .recommend {
    text-align: center;
    width: 60%;
    margin: auto;
    .title {
      margin-bottom: 10px;
    }
    .recommendList {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      line-height: 25px;
    }
  }

  .visitList {
    padding: 20px;
    .visitItem {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      .left {
        display: flex;
        align-items: center;
      }
    }
  }

  .lineBar {
    border-bottom: 2px solid #fff99999;
  }
}
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #000;
  opacity: 0.6;
  z-index: 998;
}
.mark {
  background: #2c2c2dff;

  // background: #00b1ef;
  padding: 20px 30px;
  border-radius: 5px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  // box-sizing: content-box;
  height: fit-content;
  .title {
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
  }
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
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>