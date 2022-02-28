<template>
  <div class="test">
    <div class="title fz24" style="text-align: center">接口测试专用</div>
    <div class="tips fz14" style="text-align: center; color: #948989">
      全都是1080p
    </div>

    <div class="testContent">
      <div class="Btn" @click="deposit()">充值</div>
      <div class="Btn" @click="withdraw()">提现</div>
      <div class="Btn" @click="scanAdd">扫描</div>
      <div class="Btn" @click="self">开奖</div>
      <div class="Btn" @click="accredit(1)">EAT授权</div>
      <div class="Btn" @click="accredit(2)">MRT授权</div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import tools from "@/api/public.js";
import Web3 from "web3";
import bi from "@/abi/bi";
console.log(bi)
import { Toast } from "vant";
var Ip, address, recommend, Eat, Mrt, web3;
export default {
  data() {
    return {
      invitedAddress: "0xf37528C803e316bcd37FaF79354b8f3c73C8CB79",
      eatN: "6",
      mrtN: "2",
    };
  },
  mounted() {
    tools.testMASK().then((res) => {
      let { web, id } = res;
      web3 = web;
      address = id;
      Ip = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole"]["abi"],
        config["hyue"][config["key"]]["Hole"]["heyue"]
      );
      console.log(Ip)
      recommend = new web3.eth.Contract(
        config["hyue"][config["key"]]["recommend"]["abi"],
        config["hyue"][config["key"]]["recommend"]["heyue"]
      );
      Eat = new web3.eth.Contract(bi[2].abi, bi[2].heyue);
      Mrt = new web3.eth.Contract(bi[3].abi, bi[3].heyue);

      recommend.methods.recommend(address).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          this.invitedAddress = ret;
        }
      });
    });
  },
  methods: {
    // 充值
    deposit() {
      // console.log(address);
      if (this.invitedAddress == "") {
        alert("邀请人地址不能为空");
        return;
      }
      let eatNum = this.eatN + "000000000000000000";
      console.log(eatNum, this.mrtN, this.invitedAddress);
      Ip.methods
        .deposit(eatNum, this.mrtN, this.invitedAddress)
        .send({ from: address }, (err, ret) => {
          console.log(ret);
          if (ret) {
            alert("充值成功");
          }
        });
    },
    // 提现
    withdraw() {
      let eatNum = this.eatN + "000000000000000000";
      Ip.methods
        .withdraw(eatNum, this.mrtN)
        .send({ from: address }, (err, ret) => {
          console.log(ret);
          if (ret) {
            alert("提现成功");
          }
        });
    },
    // 扫描
    scanAdd() {
      Ip.methods.scanadd().send({ from: address }, (err, ret) => {
        console.log(ret);
      });
    },
    // 开奖
    self() {
      Ip.methods.self().send({ from: address }, (err, ret) => {
        console.log(ret);
      });
    },
    // 授权
    accredit(code) {
      if (code == 1) {
        Eat.methods
          .allowance(address, config["hyue"][config["key"]]["Ip"]["heyue"])
          .call((err, ret) => {
            console.log(ret)
            if (ret < this.eatN + "000000000000000000") {
              Eat.methods
                .approve(
                  config["hyue"][config["key"]]["Ip"]["heyue"],
                  this.eatN + "00000000000000000000"
                )
                .send({ from: address }, (er, re) => {
                  if (re) {
                    Toast.loading({
                      message: "正在授权...",
                      forbidClick: true,
                      duration: 0,
                      overlay: true,
                    });
                    this.polling(re);
                  }
                });
            } else {
              Toast.success({
                message: "已授权额度"+ret,
                forbidClick: true,
                duration: 0,
                overlay: true,
              });
            }
          });
      } else if (code == 2) {
        Mrt.methods
          .allowance(address, config["hyue"][config["key"]]["Ip"]["heyue"])
          .call((err, ret) => {
            if (ret < this.mrtN) {
              Mrt.methods
                .approve(
                  config["hyue"][config["key"]]["Ip"]["heyue"],
                  this.mrtN + "00"
                )
                .send({ from: address }, (er, re) => {
                  if (re) {
                    Toast.loading({
                      message: "正在授权...",
                      forbidClick: true,
                      duration: 0,
                      overlay: true,
                    });
                    this.polling(re);
                  }
                });
            } else {
              Toast.success({
                message: "已授权额度"+ret,
                forbidClick: true,
                duration: 0,
                overlay: true,
              });
            }
          });
      }
    },
    // 轮询
    polling(r) {
      let timer = setInterval(() => {
        web3.eth.getTransaction(r, (err, ret) => {
          console.log(r);
          if (ret.blockNumber != null) {
            Toast.clear;
            Toast.success("授权完成");
            clearInterval(timer);
          }
        });
      }, 1000);
    },
    // 字符串解决科学计数法
    // addZero(num){

    // }
  },
};
</script>

<style lang="scss" scoped>
.test {
  padding: 5%;
}
.Btn {
  background: #fff;
  padding: 20px;
  color: #000;
  text-align: center;
  border-radius: 10px;
  width: 120px;
  position: relative;
  margin: 20px auto;
  cursor: pointer;
}
.Btn:hover {
  box-shadow: 0 0 12px 1px #00b1ef;
  background: #00b1ef;
  color: #fff;
}
</style>