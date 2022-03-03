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
          <div class="right">{{ failTime }}</div>
        </div>
      </div>
      <div class="footerBtn">
        <div class="btn" @click="showModel(1)">提现</div>
        <div class="btn" @click="showModel(0)">充值</div>
      </div>
    </div>

    <div class="recommend">
      <div class="title">
        <div>动态推荐奖励</div>
        <div>{{ listobj.balance }}&nbsp;EAT</div>
      </div>
      <!-- <div  v-show="list||list.length==0" class="recommendList" v-for="(v, i) in list" :key="i">
        <div class="left">{{ v.address }}</div>
        <div class="right">{{ v.rewards }}EAT</div>
        <div class="right">{{ v.loss }}EAT</div>
      </div> -->
      <!-- <div class="recommendList">
        <div class="left">123456789101</div>
        <div class="right">11EAT</div>
        <div class="right">22EAT</div>
      </div> -->
      <!-- <div  v-show="!list||list.length==0" class="recommendTips">
        暂无记录
      </div> -->
    </div>

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

    <div
      class="mark"
      :style="{ height: choose == 0 ? '220px' : '200px' }"
      v-show="markShow"
    >
      <div class="title" v-if="choose == 0">充值</div>
      <div class="title" v-if="choose == 1">提现</div>
      <div class="item">
        EAT <input type="text" v-model="eatN" @input="showAccredit(1)" />
      </div>
      <div class="item">
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
      <div class="item" v-if="choose == 2">是否提取全部 Nft 碎片</div>
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
var Ip, address, recommend, Eat, Mrt, web3, BN, Hole;
export default {
  data() {
    return {
      coverShow: false,
      markShow: false,
      showAccredit1: false,
      showAccredit2: false,
      choose: 0,
      add: "",
      list: [],
      listobj: {
        balance:0
      },
      visitList: [
        {
          title: "参与记录",
          logo: require("../../assets/img/visit1.png"),
        },
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
      failTime:"",
    };
  },
  mounted() {
    // console.log(1)
    tools.testMASK().then((res) => {
      let { web, id } = res;
      web3 = web;
      address = id;
      let num = "8.22";
      console.log(this.numToStrUp(num), 1);

      axios
        .get(
          `https://eatadd.com:8443/eatuser/getByAddress?address=${address}&pageNo=1&pageSize=10`
        )
        .then((res) => {
          console.log(res);
          if (res.data.result != undefined) {
            this.listobj = res.data.result;
          }
          // for (let k in this.list) {
          //   this.list[k].engageAddress =
          //     this.list[k].engageAddress.substr(0, 4) +
          //     "****" +
          //     this.list[k].engageAddress.substr(
          //       this.list[k].engageAddress.length - 4
          //     );
          //   this.list[k].address =
          //     this.list[k].address.substr(0, 4) +
          //     "****" +
          //     this.list[k].address.substr(this.list[k].address.length - 4);
          // }
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(web3)
      this.add = id.substr(0, 4) + "****" + id.substr(id.length - 4);
      Ip = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole1"]["abi"],
        config["hyue"][config["key"]]["Hole1"]["heyue"]
      );
      Hole =  new web3.eth.Contract(
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
      Eat = new web3.eth.Contract(bi[2].abi, bi[2].heyue);
      Mrt = new web3.eth.Contract(bi[3].abi, bi[3].heyue);

      recommend.methods.recommend(address).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          this.invitedAddress = ret;
          this.isAdr = true;
        }
      });
      Ip.methods.userInfo(address).call((err, ret) => {
        if (ret) {
          Hole.methods.ownerloss(address).call((er, re) => {
            debris.methods.minted(address).call((e, r) => {
              this.failTime = Number(ret["loss"]) + Number(re) - Number(r);
            });
          });
          if (this.needOpen == address) {
            this.shouldOpen = true;
          }
          this.eatNum = Number(
            ret[1].slice(0, ret[1].length - 18) +
              "." +
              ret[1].slice(ret[1].length - 18)
          );
          this.mrtNum = ret[2];
        }
      });
      clearInterval(debrisTimer);
      var debrisTimer = setInterval(() => {
        debris.methods.minted(address).call((err, ret) => {
          this.nftN = ret;
        });
      }, 5000);
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
          this.invitedAddress = "";
          Toast.fail("推荐节点余额不能为0");
          return;
        }
      });
      recommend.methods.recommend(this.invitedAddress).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          // this.popData.adr = ret;
        } else {
          this.invitedAddress = "";
          Toast.fail("推荐节点无效");
        }
      });
    },
    // 充值
    deposit() {
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
              if (
                ret == "0x0000000000000000000000000000000000000000" ||
                r == ""
              ) {
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
      if (this.eatN != 0) {
        this.numToStrUp(this.eatN);
      } else {
        this.pushNum = this.eatN;
      }
      Ip.methods
        .withdraw(this.pushNum, this.mrtN)
        .send({ from: address }, (err, ret) => {
          console.log(ret);
          if (ret) {
            Toast.loading({
              message: "正在提现...",
              forbidClick: true,
              duration: 0,
              overlay: true,
            });
            this.showAccredit1 = false;
            this.polling(ret, "提现成功");
            this.close();
          }
        });
    },
    // 授权
    accredit(code) {
      if (code == 1) {
        Eat.methods
          .allowance(address, config["hyue"][config["key"]]["Hole"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.numToStrUp(this.eatN))) {
              Eat.methods
                .approve(
                  config["hyue"][config["key"]]["Hole"]["heyue"],
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
          .allowance(address, config["hyue"][config["key"]]["Hole"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.mrtN)) {
              Mrt.methods
                .approve(
                  config["hyue"][config["key"]]["Hole"]["heyue"],
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
                if (this.needOpen == address) {
                  this.shouldOpen = true;
                }
                console.log(ret[1].slice(ret[1].length - 18));
                this.eatNum = Number(
                  ret[1].slice(0, ret[1].length - 18) +
                    "." +
                    ret[1].slice(ret[1].length - 18)
                );
                this.mrtNum = ret[2];
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
      } else{
        this.$router.push("/dapp/info?title=" + val);
      }
    },
    showAccredit(code) {
      if (code == 1) {
        Eat.methods
          .allowance(address, config["hyue"][config["key"]]["Hole"]["heyue"])
          .call((err, ret) => {
            if (Number(ret) < Number(this.numToStrUp(this.eatN))) {
              this.showAccredit1 = true;
            }
          });
      } else if (code == 2) {
        Mrt.methods
          .allowance(address, config["hyue"][config["key"]]["Hole"]["heyue"])
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
        .send({ from: address }, (err, ret) => {
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
      margin-top: 30px;
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
    margin-top: 10px;
    .title {
      display: flex;
      justify-content: space-between;
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
  width: 325px;
  // background: #161616ff;
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
.recommendTips {
  text-align: center;
}
</style>