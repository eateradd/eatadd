<template>
  <div id="root">
    <div class="homepage">
      <div class="header">
        <lang class="lang" @changeLang="changeLang"></lang>
        <div class="navBox">
          <img
            style="padding-bottom: 40px"
            src="../assets/img/logo.png"
            alt=""
            width="337px"
          />
          <div class="notice_nav" @click="toNoticeList">
            <van-notice-bar
              left-icon="volume-o"
              scrollable
              color="#fff"
              background="rgba(236, 249, 255,0)"
              style="
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 5px;
              "
            >
              {{ notices }}
            </van-notice-bar>
          </div>

          <div class="navList">
            <div class="navItem mart-10">
              <a href="https://github.com/eateradd">{{
                $t("message.homepage.github")
              }}</a>
            </div>
            <div class="navItem mart-10">
              <a href="https://eateradd.medium.com">{{
                $t("message.homepage.medium")
              }}</a>
            </div>
            <div class="navItem mart-10">
              <a href="https://twitter.com/eateradd">{{
                $t("message.homepage.twitter")
              }}</a>
            </div>
          </div>
        </div>

        <div style="margin-top: 20px">
          <el-carousel
            :height="isphone ? '190px' : '600px'"
            style="max-width: 1200px; margin: auto"
            class="carousel_nav"
          >
            <el-carousel-item v-for="(item, index) in banners" :key="index">
              <div class="" style="text-align: center">
                <img :src="item.fpath" style="width: 100%" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="headerContent">
          <div class="headerBody">
            <div class="bodyLeft" @click="openMark1">
              <a>{{ $t("message.homepage.btn1") }}</a>
              <img src="../assets/img/access-point.png" width="281px" alt="" />
            </div>
            <div class="bodyRight" @click="openMark">
              <a>{{ $t("message.homepage.btn2") }}</a>
              <img src="../assets/img/warning.png" width="283px" alt="" />
            </div>
            <div class="bodyRight" @click="toTrend">
              <a>{{ $t("message.homepage.btn3") }}</a>
              <img src="../assets/img/waring2.png" width="283px" alt="" />
            </div>
            <!-- <div class="bodyRight" @click="openMark2">
              <a>{{ $t("message.homepage.btn4") }}</a>
              <img src="../assets/img/waring2.png" width="283px" alt="" />
            </div> -->
          </div>
        </div>

        <div class="bodyBtn" @click="toScan">
          <a>{{ $t("message.homepage.btn4") }}</a>
        </div>
        <div class="priceBox">
          <div class="priceBody">
            <!-- <div class="priceItem">
              <div class="priceText">{{ $t("message.homepage.price1") }}</div>
              <div class="priceToken">${{ price1 }}</div>
            </div> -->
            <div class="priceItem">
              <div class="priceText">{{ $t("message.homepage.price2") }}</div>
              <div class="priceToken">${{ price2 }}</div>
            </div>
            <div class="priceItem">
              <div class="priceText">{{ $t("message.homepage.price3") }}</div>
              <div class="priceToken">${{ price3 }}</div>
            </div>
            <div class="priceItem">
              <div class="priceText">{{ $t("message.homepage.price4") }}</div>
              <div class="priceToken">
                <img src="../assets/img/aa6.png" @click="goUser" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="paperBox">
          <div
            class="paperItem"
            @click="goWhilePaper('en')"
            v-show="langu == 'en'"
          >
            {{ $t("message.homepage.whitePaper1") }}
          </div>
          <div
            class="paperItem"
            @click="goWhilePaper('zh')"
            v-show="langu == 'zh'"
          >
            {{ $t("message.homepage.whitePaper2") }}
          </div>
        </div>
        <!-- topLine -->
        <div class="topLineBox">
          <hr class="hrLine" />
        </div>
        <!-- Introduce -->
        <div class="introduceBox">
          <div class="introduceBody">
            <span v-show="langu == 'en'">{{
              $t("message.homepage.introduce1")
            }}</span
            >{{ $t("message.homepage.introduce2") }}<br />{{
              $t("message.homepage.introduce3")
            }}<br />{{ $t("message.homepage.introduce4") }}<br />{{
              $t("message.homepage.introduce5")
            }}<br />{{ $t("message.homepage.introduce6")
            }}<span v-show="langu == 'en'">{{
              $t("message.homepage.introduce7")
            }}</span>
            <div style="display: inline-block" v-show="langu == 'en'">
              {{ $t("message.homepage.introduce8") }}
            </div>
            <br />{{ $t("message.homepage.introduce9") }}<br />{{
              $t("message.homepage.introduce10")
            }}<br />{{ $t("message.homepage.introduce11") }}<br />
            <div v-show="langu == 'en'">
              {{ $t("message.homepage.introduce12") }}<br />
            </div>
            {{ $t("message.homepage.introduce13") }}<br />{{
              $t("message.homepage.introduce14")
            }}<br />{{ $t("message.homepage.introduce15") }}<br />{{
              $t("message.homepage.introduce16")
            }}<br />{{ $t("message.homepage.introduce17") }}<br />{{
              $t("message.homepage.introduce18")
            }}<br />{{ $t("message.homepage.introduce19") }}<br />{{
              $t("message.homepage.introduce20")
            }}
            <span>{{ $t("message.homepage.introduce21") }}</span>
          </div>
          <hr class="hrLine" />
          <hr class="hrLineTwo" />
        </div>
      </div>
      <div class="center">
        <!-- FACTIONS -->
        <div class="factionsBox">
          <div class="factionsBody">
            <div class="topfaction">
              <div class="topLeft">
                <h1 class="factionTitle">
                  <div style="display: inline-block" v-show="langu == 'en'">
                    {{ $t("message.homepage.faction1") }}
                  </div>
                  <span> {{ $t("message.homepage.faction2") }}</span>
                </h1>
                <div class="factionIntroduce">
                  {{ $t("message.homepage.faction3") }}<br />{{
                    $t("message.homepage.faction4")
                  }}<br />
                </div>
              </div>
              <div class="topRight">
                <img src="../assets/img/B4-decals.png" width="265px" alt="" />
              </div>
            </div>
            <div class="contentfaction">
              <div class="factionList">
                <div class="factionItemLeft">
                  <div class="imgBox">
                    <img
                      src="../assets/img/faction1.png"
                      height="240px"
                      alt=""
                    />
                  </div>
                  <div class="factionContent">
                    <div class="top">
                      <div style="display: inline-block" v-show="langu == 'en'">
                        {{ $t("message.homepage.facItem1") }}
                      </div>
                      <span> {{ $t("message.homepage.facItem2") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem3") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem4") }}</span>
                    </div>
                  </div>
                </div>
                <div class="factionItemRight">
                  <div class="factionContent pc">
                    <div class="top">
                      <div style="display: inline-block" v-show="langu == 'en'">
                        {{ $t("message.homepage.facItem5") }}
                      </div>
                      <span> {{ $t("message.homepage.facItem6") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem7") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem8") }}</span>
                    </div>
                  </div>
                  <div class="imgBox">
                    <img
                      src="../assets/img/faction2.png"
                      height="240px"
                      alt=""
                    />
                  </div>
                  <div class="factionContent Wap">
                    <div class="top">
                      <div style="display: inline-block" v-show="langu == 'en'">
                        {{ $t("message.homepage.facItem5") }}
                      </div>
                      <span> {{ $t("message.homepage.facItem6") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem7") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem8") }}</span>
                    </div>
                  </div>
                </div>
                <div class="factionItemLeft">
                  <div class="imgBox">
                    <img
                      src="../assets/img/faction3.png"
                      height="240px"
                      alt=""
                    />
                  </div>
                  <div class="factionContent">
                    <div class="top">
                      <span>{{ $t("message.homepage.facItem9") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem10") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem11") }}</span>
                    </div>
                  </div>
                </div>
                <div class="factionItemRight">
                  <div class="factionContent pc">
                    <div class="top">
                      <span>{{ $t("message.homepage.facItem12") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem13") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem14") }}</span>
                    </div>
                  </div>
                  <div class="imgBox">
                    <img
                      src="../assets/img/faction4.png"
                      height="240px"
                      alt=""
                    />
                  </div>
                  <div class="factionContent Wap">
                    <div class="top">
                      <span>{{ $t("message.homepage.facItem12") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem13") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem14") }}</span>
                    </div>
                  </div>
                </div>
                <div class="factionItemLeft">
                  <div class="imgBox">
                    <img
                      src="../assets/img/faction5.png"
                      height="240px"
                      alt=""
                    />
                  </div>
                  <div class="factionContent">
                    <div class="top">
                      <span>{{ $t("message.homepage.facItem15") }}</span>
                    </div>
                    <div class="center">
                      {{ $t("message.homepage.facItem16") }}
                    </div>
                    <div class="bottom">
                      <span>{{ $t("message.homepage.facItem17") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footerBox">
        <img src="../assets/img/caution.png" width="306px" alt="" />
      </div>
      <div class="footerEmail">eateradd@gmail.com</div>
    </div>
    <!-- dapp -->
    <div class="mark mark1" v-show="markShow1">
      <!-- 关闭图标 -->
      <div
        style="position: absolute; right: 10px; top: 10px; z-index: 9999"
        @click="markShow1 = false"
      >
        <van-icon name="close" color="#fff" size="24" />
      </div>
      <div class="content">
        <div class="titlelogo">
          <img src="../assets/img/wlogo.png" alt="" />
        </div>
        <div class="address">{{ addRess }}</div>
        <div class="noded">
          <span class="nodeTitle">{{ $t("message.homepage.pledgeNum") }}</span>
          <div class="sybmol">{{ popData.num + "   " }}LP</div>
        </div>
        <div class="noded">
          <div class="nodeTitle">{{ $t("message.homepage.cost") }}</div>
          <div class="sybmol">{{ popData.cost + "   " }} USDT</div>
        </div>
        <div class="noded">
          <div class="nodeTitle">{{ $t("message.homepage.getMedals") }}</div>
          <div class="sybmol">
            {{ popData.getMedal + "   " }} {{ $t("message.homepage.Pieces") }}
          </div>
        </div>
        <div class="noded">
          <div class="nodeTitle">{{ $t("message.homepage.canMedals") }}</div>
          <div class="sybmol">
            {{ popData.canMedal + "   " }} {{ $t("message.homepage.Pieces") }}
          </div>
        </div>
        <div class="noded">
          <div class="nodeTitle">{{ $t("message.homepage.OverLastTime") }}</div>
          <div class="sybmol">
            {{ popData.overTime + "   " }} {{ $t("message.homepage.hours") }}
          </div>
        </div>
        <div class="tips opct1">
          <!-- <div>本次操作需要发起钱包签名,消耗 2 BNB</div> -->
          <!-- <div>是否继续操作?</div> -->
          <div class="fz14">{{ $t("message.homepage.MedalsDes") }}</div>
          <div class="fz14">
            {{ $t("message.homepage.MedalsNum") }} = ({{
              $t("message.homepage.LPQuantity")
            }}
            * {{ $t("message.homepage.LpWorth") }})/50U
          </div>
        </div>
        <div class="btnBox1">
          <div
            class="Cancelbtn"
            :class="[popType == 4 ? 'Configbtn' : '']"
            @click="showPop(4)"
          >
            {{ $t("message.homepage.getLP") }}
          </div>
          <div
            class="Cancelbtn"
            :class="[popType == 1 ? 'Configbtn' : '']"
            @click="showPop(1)"
          >
            {{ $t("message.homepage.pledge") }}
          </div>
          <div
            class="Cancelbtn"
            :class="[popType == 2 ? 'Configbtn' : '']"
            @click="showPop(2)"
          >
            {{ $t("message.homepage.redeem") }}
          </div>
          <div
            class="Cancelbtn"
            :class="[popType == 3 ? 'Configbtn' : '']"
            @click="getHarvest"
          >
            {{ $t("message.homepage.getMedal") }}
          </div>
        </div>
      </div>
    </div>
    <!-- 勋章 输入弹框 -->
    <van-dialog
      v-model="showpop"
      :showConfirmButton="false"
      className="popNav"
      overlayClass="overNav"
      closeOnClickOverlay
      @open="popData.intnum = ''"
    >
      <div>
        <div class="f c_b a_c cf" style="position: relative">
          <span style="display: inline-block; width: 100px"
            >{{ $t("message.homepage.quantity") }}:</span
          >
          <input
            type="text"
            v-model="popData.intnum"
            :placeholder="$t('message.homepage.nodeP')"
          />
          <span class="marl-10">LP</span>
          <div style="position: absolute; bottom: -30px; left: 100px">
            <div class="f a_c cf cursor" @click="changeIntNum">
              <span style="display: inline-block; width: 60px" class="fz12"
                >{{ $t("message.homepage.all") }}:</span
              >
              <span class="marr-10 fz12">{{
                popType == 1 ? popData.sum : popData.num
              }}</span>
              <span>LP</span>
            </div>
          </div>
        </div>

        <div class="f a_c cf" v-if="popType == 1" style="margin-top: 50px">
          <span style="display: inline-block; width: 100px"
            >{{ $t("message.homepage.inviteTitle") }}:</span
          >
          <input
            type="text"
            v-model="popData.adr"
            :disabled="isAdr"
            @change="changeAdr"
            :placeholder="$t('message.homepage.inviteP')"
          />
        </div>

        <van-button
          class="Cancelbtn Configbtn"
          :style="{ 'margin-top': popType == 2 ? '50px' : '0px' }"
          @click="popSubmit"
          style="width: 100%; padding: 28px 0; border: none"
          color="#393a3bff"
          :loading="popLodding"
        >
          {{ $t("message.homepage.confirm") }}
        </van-button>
      </div>
    </van-dialog>

    <div class="mark" v-show="markShow">
      <!-- <img class="bgImg" src="../assets/img/bgPop.png" alt="" /> -->
      <div class="content">
        <div class="titlelogo">
          <img src="../assets/img/wlogo.png" alt="" />
        </div>
        <div class="address">{{ addRess }}</div>
        <div class="node">
          <div class="nodeTitle">{{ $t("message.homepage.nodeTitle") }}:</div>
          <input
            type="text"
            v-model="num"
            @change="changeNum(num)"
            :placeholder="$t('message.homepage.nodeP')"
          />
          <div class="sybmol">USDT</div>
        </div>
        <div class="invited">
          <div class="nodeTitle">{{ $t("message.homepage.inviteTitle") }}:</div>
          <input
            type="text"
            v-model="invited"
            :disabled="shouldDisable"
            @change="changeInvite(invited)"
            :placeholder="$t('message.homepage.inviteP')"
          />
        </div>
        <!-- <div class="radioBox">
          <div class="radioItem">25%</div>
          <div class="radioItem">50%</div>
          <div class="radioItem">100%</div>
        </div> -->
        <div class="noded">
          <div class="nodeTitle">{{ $t("message.homepage.eatNum") }}:</div>
          <div class="sybmol">{{ eatNum }} EAT</div>
        </div>
        <div class="residue">
          <div class="nodeTitle">{{ $t("message.homepage.remaining") }}:</div>
          <div class="sybmol">{{ 100 - eatNum }} EAT</div>
        </div>
        <div class="tips">
          <!-- <div>本次操作需要发起钱包签名,消耗 2 BNB</div> -->
          <!-- <div>是否继续操作?</div> -->
          <div>{{ $t("message.homepage.eatInfo") }}</div>
          <div>1 EAT=1 USDT</div>
        </div>
        <div class="btnBox">
          <div class="Cancelbtn Configbtn" @click="Config">
            {{ $t("message.homepage.confirm") }}
          </div>
          <div class="Cancelbtn" @click="cancel">
            {{ $t("message.homepage.cancel") }}
          </div>
        </div>
        <div class="footerIcon">
          <!-- <a href="eatadd.com"><img src="../assets/img/link1.png" alt="" /></a> -->
          <!-- <a href="https://eateradd@gmail.com  "
            ><img src="../assets/img/link2.png" alt=""
          /></a> -->
          <a href="https://twitter.com/eateradd"
            ><img src="../assets/img/link3.png" alt=""
          /></a>
          <a href="https://eateradd.medium.com"
            ><img src="../assets/img/link4.png" alt=""
          /></a>
          <a href="https://github.com/eateradd"
            ><img src="../assets/img/link5.png" alt=""
          /></a>
        </div>
      </div>
    </div>
    <div class="cover" v-show="markShow || markShow1" @click="cancel"></div>
  </div>
</template>
<script>
//新版配置 模块化
import config from "@/config";
import tools from "@/api/public.js";
import Web3 from "web3";
import { Toast } from "vant";
import axios from "axios";
import lang from "../components/lang";
// import { gethomebannarList } from "@/api/manager";
var web3, Eat, address, Usdt, EatToken, Check, Medal, Medal1, recom, Ip;
export default {
  components: {
    lang,
  },
  data() {
    return {
      isphone: false,
      num: "",
      invited: "",
      shouldDisable: false,
      digitsNum: 0,
      eatNum: 0,
      langu: "",
      markShow: false,
      markShow1: false,
      addRess: "",
      price1: 120000,
      price2: "",
      price3: "",
      price4: 1970,
      linkList: [],
      linkNum: 0,
      popData: {
        cost: 0,
        num: 0,
        canMedal: 0,
        getMedal: 0,
        overTime: 0,
        intnum: "", // 输入数量
        sum: 0, // 质押总是
        adr: "", // 节点输入
      },
      isAdr: false, // 是有推荐人
      popLodding: false, // 弹框提交 加载状态
      popType: 4, // 1: 质押  2 ： 赎回  3： 获取勋章   4： 获取lp
      showpop: false,
      notices: "", // 通告
      banners: [
        // { url: require("@/assets/img/bannar1.jpg") },
        // { url: require("@/assets/img/bannar2.jpg") },
        // { url: require("@/assets/img/bannar3.jpg") },
      ],
    };
  },
  mounted() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isphone = true;
    } else {
      this.isphone = false;
    }
    this.getBannar()
    this.linkWallet();
    this.langu = this.$i18n.locale;
    let a = "999999999999999999";
    this.numToStr(a);
    // console.log(b)
    // console.log(b * (10 ** 18))
    let web4 = new Web3(config["hyue"][config["key"]]["Url"]);
    Ip = new web4.eth.Contract(
      config["hyue"][config["key"]]["Ip"]["abi"],
      config["hyue"][config["key"]]["Ip"]["heyue"]
    );
    console.log(Ip);
    Ip.methods.getReserves().call((err, ret) => {
      this.price2 = ((ret[1] * 2) / 10 ** 18).toFixed(2);
      this.price3 = (ret[1] / ret[0]).toFixed(2);
    });
    clearInterval(PriceTimer);
    let PriceTimer = setInterval(() => {
      Ip.methods.getReserves().call((err, ret) => {
        this.price2 = ((ret[1] * 2) / 10 ** 18).toFixed(2);
        this.price3 = (ret[1] / ret[0]).toFixed(2);
      });
    }, 5000);

    axios({
      method: "get",
      url: "https://eatadd.com:8443/announcement/find?pageNo=1&pageSize=10",
    })
      .then((res) => {
        let { result, code } = res.data;
        switch (code) {
          case 0:
            for (let i = 0; i < result.records.length; i++) {
              console.log();
              if (result.records[i].status == 1) {
                this.notices += result.records[i].content + "。   ";
              }
            }
            break;
          default:
            break;
        }
      })
      .catch(function (error) {
        alert("error");
      });
  },
  methods: {
    getBannar() {
      axios({
        method: "get",
        url: "https://eatadd.com:8443/banner/find?pageNo=1&pageSize=10",
      })
        .then((res) => {
          const ss = res.data.result.records;
          let { code } = res.data;
          switch (code) {
            case 0:
              var banners = ss.map((v) => {
                this.$set(
                  v,
                  "fpath",
                  `https://eatadd.com:8443/images/${v.fpath}`
                );
                return v;
              });
              for (let i = 0; i < banners.length; i++) {
                if(banners[i].projectId == 1 && banners[i].status == 1)
                this.banners.push(banners[i])
              }
              // console.log(banners)
              break;
            default:
              break;
          }
        })
        .catch(function (error) {
          alert("error");
        });
    },
    toNoticeList() {
      console.log("aaaa");
      this.$router.push("./noticeList");
    },
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
      if (code == 1) {
        this.popData.num = newNum.substring(0, index + 7);
      } else if (code == 2) {
        this.popData.sum = newNum.substring(0, index + 7);
      }
      console.log(num);
      console.log(num.length);
    },
    getMedalData() {
      // 获取 勋章 数据
      Medal.methods.userInfo(address).call((err, ret) => {
        let nowTime = parseInt(new Date().getTime() / 1000);
        if (ret) {
          // let amount = this.numToStr(ret.amount / 10 ** 18);
          // let index = amount.indexOf(".");
          // // // console.log(index)
          // if (index) {
          //   if (amount < 0.00001) {
          //     this.popData.num = 0;
          //   } else {
          //     this.popData.num = amount.substring(0, index + 6);
          //   }
          // } else {
          //   this.popData.num = amount;
          // }
          this.numToStr(ret.amount, 1);

          let laTime = ret.latetime;
          if (laTime == 0) {
            this.popData.overTime = 0;
          } else {
            this.popData.overTime = ((nowTime - laTime) / 60 / 60).toFixed(2);
          }
        } else {
          console.log("Medal fail");
        }
      });
      Medal.methods.harvested(address).call((err, ret) => {
        if (ret) {
          this.popData.getMedal = ret;
        } else {
          console.log("Medal fail");
        }
      });
      clearInterval(Timer);
      // 获取 勋章 价值
      let Timer = setInterval(() => {
        Medal.methods.lpPrice().call((err, ret) => {
          if (ret) {
            this.popData.cost = (ret / 10 ** 18) * 2;
          } else {
            console.log("Medal fail");
          }
        });
      }, 5000);
      // 获取 可收获 勋章数量
      Medal.methods.beharvest(address).call((err, ret) => {
        if (ret) {
          this.popData.canMedal = ret;
        } else {
          console.log("Medal fail");
        }
      });
    },
    linkWallet() {
      return new Promise((ressolve) => {
        tools
          .testMASK()
          .then((res) => {
            let { web, id } = res;
            web3 = web;
            address = id;
            this.addRess = id.substr(0, 4) + "****" + id.substr(id.length - 4);
            Eat = new web3.eth.Contract(
              config["hyue"][config["key"]]["Eat"]["abi"],
              config["hyue"][config["key"]]["Eat"]["heyue"]
            );
            Usdt = new web3.eth.Contract(
              config["hyue"][config["key"]]["Usdt"]["abi"],
              config["hyue"][config["key"]]["Usdt"]["heyue"]
            );
            Check = new web3.eth.Contract(
              config["hyue"][config["key"]]["Check"]["abi"],
              config["hyue"][config["key"]]["Check"]["heyue"]
            );
            recom = new web3.eth.Contract(
              config["hyue"][config["key"]]["recommend"]["abi"],
              config["hyue"][config["key"]]["recommend"]["heyue"]
            );
            Medal1 = new web3.eth.Contract(
              config["hyue"][config["key"]]["Medal1"]["abi"],
              config["hyue"][config["key"]]["Medal1"]["heyue"]
            );
            Medal = new web3.eth.Contract(
              config["hyue"][config["key"]]["Medal"]["abi"],
              config["hyue"][config["key"]]["Medal"]["heyue"]
            );
            this.getMedalData();
            Eat.methods.recommend(address).call((err, ret) => {
              if (ret == "0x0000000000000000000000000000000000000000") {
                console.log(ret);
                // this.invited = ret;
              } else {
                console.log(ret);
                this.invited = ret;
                this.shouldDisable = true;
              }
            });
            EatToken = new web3.eth.Contract(
              config["hyue"][config["key"]]["gaz"]["abi"],
              "0x0f77144eba9c24545aA520a03f9874C4f1f4850F"
            );
            Eat.methods.weight(address).call((err, ret) => {
              this.eatNum = ret / 10 ** 18;
              console.log(this.eatNum);
            });
            Usdt.methods.decimals().call((err, ret) => {
              this.digitsNum = ret;
            });
            Check.methods
              .levelone("0x9a6c9C161084324CCfFF327Eff8B1981d7A4FaB9")
              .call((err, ret) => {
                console.log(ret);
                if (ret[0] != 0) {
                  this.linkNum += Number(ret[0]);
                  this.getLinkNum(ret[2]);
                }
              });
            ressolve(true);
          })
          .catch((err) => {
            ressolve(false);
          });
      });
    },
    getLinkNum(L) {
      for (let k in L) {
        Check.methods.levelone(L[k]).call((err, ret) => {
          if (ret[0] != 0) {
            this.linkNum += Number(ret[0]);
            this.getLinkNum(ret[2]);
          }
        });
      }
    },
    Config() {
      console.log(this.linkNum);
      if (this.num == "") {
        Toast.fail("请输入申请数量");
      } else {
        let number = String(Number(this.num) * 10 ** 18);
        console.log(number);
        console.log(this.eatNum, Number(this.num));
        if (Number(this.eatNum) + Number(this.num) > 100) {
          Toast.fail("剩余EAT数量不足");
        } else if (
          Number(this.eatNum) + Number(this.num) <= 100 &&
          Number(this.eatNum) + Number(this.num) >= 0
        ) {
          Usdt.methods
            .allowance(address, config["hyue"][config["key"]]["Eat"]["heyue"])
            .call((err, ret) => {
              console.log(ret);
              // if(ret==0){
              //   for(let i = 0;i < 5;i++){
              //     this.Config();
              //   }
              //   return;
              // }
              if (Number(ret) >= Number(number)) {
                console.log(number, this.invited);
                Eat.methods.crowd(number, this.invited).send(
                  {
                    from: address,
                  },
                  (er, re) => {
                    if (re) {
                      console.log(re);
                      Toast.loading({
                        message: "正在购买...",
                        forbidClick: true,
                        duration: 0,
                        overlay: true,
                      });
                      this.polling(re, 2);
                    }
                  }
                );
              } else {
                if (this.invited == "") {
                  Toast.fail("请输入邀请人地址");
                  return;
                } else {
                  EatToken.methods.balanceOf(this.invited).call((err, ret) => {
                    if (ret == 0) {
                      console.log(111);
                      this.invited = "";
                      Toast.fail("推荐节点无效");
                      return;
                    }
                  });
                }
                Usdt.methods
                  .approve(
                    config["hyue"][config["key"]]["Eat"]["heyue"],
                    String(100 * 10 ** 18)
                  )
                  .send(
                    {
                      from: address,
                    },
                    (e, r) => {
                      if (r) {
                        Toast.loading({
                          message: "正在授权...",
                          forbidClick: true,
                          duration: 0,
                          overlay: true,
                        });
                        this.polling(r, 1);
                      }
                    }
                  );
              }
            });
        }
      }
    },
    polling(r, code) {
      var usdtlxtime = "";
      let timer = setInterval(() => {
        web3.eth.getTransaction(r, (err, ret) => {
          console.log(r);
          if (ret.blockNumber != null) {
            Toast.clear;
            if (code == 1) {
              Toast.success("授权完成");
              clearInterval(timer);
              this.Config();
            } else if (code == 2) {
              Eat.methods.weight(address).call((err, ret) => {
                this.eatNum = ret / 10 ** 18;
                console.log(this.eatNum);
              });
              Toast.success("购买成功");
              clearInterval(timer);
            }
          }
        });
      }, 1000);
    },
    changeNum(e) {
      Eat.methods.weight(address).call((err, ret) => {
        this.eatNum = ret / 10 ** 18;
        console.log(Number(this.eatNum) + Number(e));
        if (Number(this.eatNum) + Number(e) > 100) {
          this.num = "";
          Toast.fail("申请EAT总量不得超过100");
        }
      });
    },
    changeInvite(e) {
      if (e.length != 42 && e.slice(0, 2) != "0x") {
        this.invited = "";
        Toast.fail("该地址不符合规范");
      } else {
        EatToken.methods.balanceOf(e).call((err, ret) => {
          if (ret == 0) {
            console.log(111);
            this.invited = "";
            Toast.fail("推荐节点无效");
          }
        });
      }
    },
    changeLang(e) {
      console.log(e);
      this.langu = e;
      if (!e) {
        // this.changeLang()
        console.log(this.langu);
      }
    },
    openMark() {
      window.location.href =
        "https://pancakeswap.finance/swap?outputCurrency=0x0f77144eba9c24545aA520a03f9874C4f1f4850F&&inputCurrency=0x55d398326f99059ff775485246999027b3197955";
      // if (this.markShow) {
      //  this.markShow = false;
      // } else {
      //  this.markShow = true;
      // }
    },
    toTrend() {
      window.location.href =
        "https://poocoin.app/tokens/0x0f77144eba9c24545aa520a03f9874c4f1f4850f";
      // if(this.langu == 'en'){
      //  window.location.href = "https://poocoin.app/tokens/0x0f77144eba9c24545aa520a03f9874c4f1f4850f";
      // }else{
      //  window.location.href = "https://avedex.cc/token/0x0f77144eba9c24545aA520a03f9874C4f1f4850F-bsc";
      // }
    },
    openMark1() {
      this.linkWallet().then((res) => {
        if (res) {
          this.markShow1 = !this.markShow1;
        } else {
          alert("请连接钱包");
        }
      });
    },
    cancel() {
      this.markShow = false;
      this.markShow1 = false;
    },
    goWhilePaper(e) {
      if (e == "en") {
        window.location.href = "./en.pdf";
      } else if (e == "zh") {
        window.location.href = "./zh.pdf";
      }
    },
    // 显示勋章弹框
    showPop(val) {
      if (val == 1 || val == 2) this.showpop = true;
      this.popType = val;
      if (val == 1) {
        this.getCost();
        recom.methods.recommend(address).call((err, ret) => {
          if (ret != "0x0000000000000000000000000000000000000000") {
            this.popData.adr = ret;
            this.isAdr = true;
          } else {
            this.popData.adr = "";
            this.isAdr = false;
          }
        });
      }
      if (val == 4) {
        window.location.href =
          "https://pancakeswap.finance/add/0x55d398326f99059fF775485246999027B3197955/0x0f77144eba9c24545aA520a03f9874C4f1f4850F";
      }
    },
    // 获取勋章
    getHarvest() {
      this.popType = 3;
      Toast.loading({
        message: this.$t("message.homepage.requesting"),
        closeOnClick: false,
        closeOnClickOverlay: false,
        loadingType: "spinner",
        getContainer: "body",
        duration: 0,
        overlay: true,
      });
      Medal.methods.harvest().send({ from: address }, (err, ret) => {
        if (ret) {
          console.log(ret);
          this.lunx(ret);
        } else {
          console.log("Medal1 fail");
          Toast.clear();
          this.popLodding = false;
        }
      });
    },
    // 获取质押数量
    getCost() {
      Medal1.methods.balanceOf(address).call((err, ret) => {
        console.log(ret);
        if (ret) {
          // let a = this.numToStr(ret / 10 ** 18);
          // let index = a.indexOf(".");
          // // console.log(index)
          // if (index) {
          //   if (a < 0.00001) {
          //     this.popData.sum = 0;
          //   } else {
          //     this.popData.sum = a.substring(0, index + 6);
          //   }
          // } else {
          //   this.popData.sum = a;
          // }
          this.numToStr(ret, 2);
          // this.popData.sum = tools.getnume(ret / 10 ** 18)
        } else {
          console.log("Medal1 fail");
        }
      });
    },
    // 监听输入 推荐人
    changeAdr() {
      if (this.popData.adr == address) {
        // 是自己
        Toast.fail("推荐节点不能为自己");
        return;
      }
      if (
        this.popData.adr == "" ||
        this.popData.adr == "0x0000000000000000000000000000000000000000"
      ) {
        // 是自己
        Toast.fail("推荐节点无效");
        return;
      }
      if (
        this.popData.adr.length != 42 &&
        this.popData.adr.slice(0, 2) != "0x"
      ) {
        this.popData.adr = "";
        Toast.fail("该地址不符合规范");
        return;
      }
      EatToken.methods.balanceOf(this.popData.adr).call((err, ret) => {
        if (ret == 0) {
          this.popData.adr = "";
          Toast.fail("推荐节点余额不能为0");
          return;
        }
      });
      recom.methods.recommend(this.popData.adr).call((err, ret) => {
        if (ret != "0x0000000000000000000000000000000000000000") {
          // this.popData.adr = ret;
        } else {
          this.popData.adr = "";
          Toast.fail("推荐节点无效");
        }
      });
    },
    //  勋章弹框 提交
    popSubmit() {
      // 判断是否为数字
      if (isNaN(this.popData.intnum)) {
        Toast("请输入数字");
        return;
      }
      if (this.popData.intnum == 0 || this.popData.intnum == "") {
        return;
      }
      this.popLodding = true;
      Toast.loading({
        message: this.$t("message.homepage.requesting"),
        closeOnClick: false,
        closeOnClickOverlay: false,
        loadingType: "spinner",
        getContainer: "body",
        duration: 0,
        overlay: true,
      });
      if (this.popType == 1) {
        // 质押
        //  判断 输入值是否大于 质押总数
        if (this.popData.adr == "") {
          Toast.clear();
          this.popLodding = false;
          return;
        }
        Medal1.methods
          .allowance(address, config["hyue"][config["key"]]["Medal"]["heyue"])
          .call((err, ret) => {
            if (this.popData.intnum < ret / 10 ** 18) {
              Medal.methods
                .deposit(
                  tools.getnume(this.popData.intnum * 10 ** 18),
                  this.popData.adr
                )
                .send({ from: address }, (err, ret) => {
                  if (ret) {
                    this.lunx(ret);
                  } else {
                    console.log("Medal1 fail");
                    Toast.clear();
                    this.popLodding = false;
                  }
                });
            } else {
              // 输入金额大于 授权余额 授权
              Medal1.methods
                .approve(
                  config["hyue"][config["key"]]["Medal"]["heyue"],
                  tools.getnume(10000 * 10 ** 18)
                )
                .send(
                  {
                    from: address,
                  },
                  (e, r) => {
                    if (r) {
                      Toast.loading({
                        message: "正在授权...",
                        forbidClick: true,
                        duration: 0,
                        overlay: true,
                      });
                      this.lunx(r);
                    }
                  }
                );
            }
          });
      } else if (this.popType == 2) {
        // 赎回
        //  判断 输入值是否大于 已获取的勋章
        console.log(this.popData.intnum);
        console.log(tools.getnume(this.popData.num));
        console.log(this.popData.intnum > tools.getnume(this.popData.num));
        if (this.popData.intnum > Number(this.popData.num)) {
          Toast.clear();
          this.popLodding = false;
          return;
        }
        console.log(tools.getnume(this.popData.intnum * 10 ** 18));
        Medal.methods
          .withdraw(tools.getnume(this.popData.intnum * 10 ** 18))
          .send({ from: address }, (err, ret) => {
            if (ret) {
              console.log(ret);
              this.lunx(ret);
            } else {
              console.log("Medal1 fail");
              Toast.clear();
              this.popLodding = false;
            }
          });
      }
    },
    // 轮询
    lunx(ret) {
      let timer = setInterval(() => {
        web3.eth.getTransactionReceipt(ret).then((res1) => {
          // console.log(res1);
          if (res1) {
            clearInterval(timer);
            Toast.clear();
            this.popLodding = false;
            // 关闭 输入弹框
            this.showpop = false;
            if (res1.status) {
              Toast({
                message: this.$t("message.homepage.publishen"),
                overlay: true,
                forbidClick: true,
              });
              this.popData.intnum = "";
              this.getMedalData();
            } else {
              Toast({
                message: this.$t("message.homepage.fail"),
                overlay: true,
                forbidClick: true,
              });
            }
          }
        });
      }, 1000);
    },
    // 点击全部
    changeIntNum() {
      if (this.popType == 1) {
        this.popData.intnum = this.popData.sum;
      } else {
        this.popData.intnum = this.popData.num;
      }
    },
    toScan() {
      // console.log(111);
      this.$router.push("/dapp");
    },
    goUser() {
      window.location.href =
        "https://bscscan.com/token/0x0f77144eba9c24545aA520a03f9874C4f1f4850F#balances";
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel_nav {
  ::v-deep .el-carousel__indicators {
    display: none;
  }
  ::v-deep .el-carousel__arrow {
    display: none;
  }
}
#root {
  height: 100%;
  position: relative;
  font-family: thin !important;
}

.homepage {
  background: #000;
}

.lang {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
}

// 主页
.header {
  background: url("../assets/img/topbg.jpg") center center / cover no-repeat
    rgb(0, 0, 0);

  .navBox {
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
    font-size: 14px;

    .navList {
      .navItem {
        a {
          width: 100%;
          padding-top: 10px;
          position: relative;
          left: 0px;
          font-size: 20px;
          font-weight: normal;
          color: rgb(255, 255, 255);
          margin: 0px;
          text-decoration: none;
          transition: color 300ms ease 0s, left 300ms ease 0s;
        }

        a:hover {
          color: rgb(68, 122, 250);
          left: 5px;
          transition: color 300ms ease-in-out 0s, left 300ms ease-in-out 0s;
        }
      }
    }
  }

  .headerContent {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;

    .headerBody {
      width: calc(100% + 16px);
      margin-left: -16px;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: flex-start;
      padding-top: 5%;

      .bodyLeft,
      .bodyRight {
        box-sizing: border-box;
        flex-direction: row;
        max-width: 355px;
        text-align: center;
        margin: 20px 0px 0px;

        a {
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          position: relative;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          -webkit-appearance: none;
          font-weight: 500;
          line-height: 1.75;
          text-transform: uppercase;
          min-width: 64px;
          width: 100%;
          font-size: 22px;
          color: white;
          outline: 0px;
          border-width: 0px;
          border-style: initial;
          border-color: initial;
          border-image: initial;
          margin: 0px 0px 20px;
          text-decoration: none;
          padding: 10px 8px 6px;
          border-radius: 4px;
          background: rgb(35, 35, 35);
          transition: color 300ms ease-in-out 0s, left 300ms ease-in-out 0s;
        }

        a:hover {
          color: rgb(68, 122, 250);
          cursor: pointer;
          background: rgb(35, 35, 35);
        }
      }
      .bodyLeft,
      .bodyRight {
        padding-left: 16px;
      }
    }
  }

  .priceBox {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;

    .priceBody {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      -webkit-box-align: center;
      align-items: center;
      margin-top: 50px;

      .priceItem {
        box-sizing: border-box;
        flex-direction: row;
        flex-basis: 100%;
        -webkit-box-flex: 0;
        flex-grow: 0;
        text-align: center;
        margin: 0px;
        margin-top: 10px;

        .priceText {
          font-weight: 400;
          line-height: 1.334;
          font-size: 22px;
          margin: 10px 0px 0px;
          font-style: normal;
          font-weight: 400;
          color: #fff;
          text-transform: uppercase;
        }

        .priceToken {
          font-weight: 400;
          line-height: 1.334;
          color: rgb(68, 122, 250);
          font-size: 22px;
          margin: 10px 0px 0px;
        }
      }
    }
  }

  .paperBox {
    margin-top: 60px;
    display: flex;
    justify-content: center;

    .paperItem {
      box-shadow: 0 0 12px 1px #00b1ef;
      background: #00b1ef;
      padding: 10px;
      width: 178px;
      height: 48px;
      text-align: center;
      line-height: 28px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .topLineBox {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
    margin-top: 20px;

    .hrLine {
      flex-shrink: 0;
      width: 55%;
      padding-top: 40px;
      border-width: 0px 0px thin;
      border-style: solid;
      margin: 0px auto;
      border-color: rgb(196, 196, 196);
    }
  }

  .introduceBox {
    width: 100%;
    margin-left: auto;
    box-sizing: border-box;
    margin-right: auto;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: center;
    margin-top: 40px;

    .introduceBody {
      font-weight: 400;
      line-height: 1.5;
      font-style: normal;
      text-align: center;
      font-size: 14px;
      padding-top: 11px;
      margin: 0px 0px 0.35em;

      span {
        color: #447afa;
      }
    }

    .hrLine {
      flex-shrink: 0;
      width: 55%;
      padding-top: 40px;
      border-width: 0px 0px thin;
      border-style: solid;
      margin: 0px auto;
      border-color: rgb(196, 196, 196);
    }

    .hrLineTwo {
      flex-shrink: 0;
      margin: 0px;
      border-width: 0px 0px thin;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.12);
    }

    .hrLineTwo::before {
      content: "";
      position: absolute;
      left: 0px;
      width: 15%;
      height: 1px;
      background-color: white;
    }

    .hrLineTwo::after {
      content: "";
      position: absolute;
      right: 0px;
      width: 15%;
      height: 1px;
      background-color: white;
    }
  }
}
.footerEmail {
  text-align: center;
  margin-top: -50px;
}
.center {
  .factionsBox {
    background: url("../assets/img/factions-bg.png") center center / cover
      no-repeat rgb(0, 0, 0);
    background-position: center center;
    background-repeat: no-repeat;

    .factionsBody {
      width: 100%;
      margin-left: auto;
      box-sizing: border-box;
      margin-right: auto;
      display: block;
      padding-left: 16px;
      padding-right: 16px;

      .topfaction {
        box-sizing: border-box;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        -webkit-box-pack: justify;
        justify-content: space-between;
        align-items: flex-start;
        display: flex;
        margin-top: 84px;

        .topLeft {
          box-sizing: border-box;
          flex-direction: row;
          margin: 0px;

          .factionTitle {
            font-weight: 300;
            line-height: 1.167;
            font-size: 40px;
            text-transform: uppercase;
            margin: 20px 0px 0px;
            font-family: Simple, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;

            span {
              color: #447afa;
            }
          }

          .factionIntroduce {
            font-family: Simple, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            font-weight: 400;
            line-height: 1.5;
            text-transform: uppercase;
            font-size: 14px;
            margin: 40px 0px 0px;

            span {
              color: #447afa;
            }
          }
        }

        .topRight {
          box-sizing: border-box;
          flex-direction: row;
          margin: 0px;
        }
      }

      .contentfaction {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 80px;

        .factionList {
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          flex-direction: column;
          text-align: center;
          margin: 0px 0px 80px;

          .factionItemLeft,
          .factionItemRight {
            margin: 0px 0px 80px;
            -webkit-box-pack: start;
            justify-content: flex-start;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            -webkit-box-align: center;
            align-items: center;
            flex-direction: row;

            .imgBox {
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              border-radius: 50%;
              box-sizing: border-box;
              flex-direction: row;
              justify-content: flex-start;
            }

            .factionContent {
              box-sizing: border-box;
              flex-direction: row;
              margin: 0px;

              .top,
              .center,
              .bottom {
                font-family: Simple, -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
                  "Droid Sans", "Helvetica Neue", sans-serif;
                font-weight: 400;

                span {
                  color: #447afa;
                }
              }

              .top {
                line-height: 1.5;
                font-size: 32px;
                margin: 0px;
              }

              .center {
                line-height: 1.43;
                font-size: 14px;
                margin: 0px;
              }

              .bottom {
                line-height: 1.43;
                font-size: 18px;
                margin: 0px;
              }
            }
          }

          .factionItemRight {
            -webkit-box-pack: end;
            justify-content: flex-end;
          }
        }
      }
    }
  }
}

.footerBox {
  background: rgb(0, 0, 0);
  padding: 64px;
  box-sizing: border-box;
  flex-direction: row;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}

.Wap {
  display: none;
}
.Configbtn {
  background: #393a3bff;
  box-shadow: 0 5px 10px #000;
}

.Cancelbtn {
  cursor: pointer;
  padding: 19px 0;
  text-align: center;
  border-radius: 3px;
  margin-top: 20px;
}
.notice_nav {
  flex-grow: 2;
  margin: 10px 20px 0;
}
@media screen and (min-width: 1200px) {
  .navBox,
  .headerContent,
  .priceBox,
  .topLineBox,
  .introduceBox,
  .factionsBody {
    max-width: 1200px;
  }

  .priceItem {
    flex-basis: 25%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 25%;
  }

  .factionItemLeft {
    .factionContent {
      text-align: left;
    }
  }

  .factionItemRight {
    .factionContent {
      text-align: right;
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1200px) {
  .navBox,
  .headerContent,
  .priceBox,
  .topLineBox,
  .introduceBox,
  .factionsBody {
    max-width: 900px;
  }
  .notice_nav {
    flex-grow: 2;
    margin: 10px 20px 0;
  }

  .priceItem {
    flex-basis: 25%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 25%;
  }

  .factionTitle {
    text-align: center;
  }

  .factionItemLeft {
    .factionContent {
      text-align: left;
    }
  }

  .factionItemRight {
    .factionContent {
      text-align: right;
    }
  }
}

@media screen and (min-width: 600px) and (max-width: 900px) {
  .navBox,
  .headerContent,
  .priceBox,
  .topLineBox,
  .introduceBox,
  .factionsBody {
    max-width: 600px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .notice_nav {
    flex-grow: 2;
    margin-top: 0px !important;
    padding-bottom: 20px;
  }

  .priceItem {
    flex-basis: 50%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 50%;
  }

  .factionTitle {
    text-align: center;
  }

  .factionItemLeft {
    .factionContent {
      text-align: left;
    }
  }

  .factionItemRight {
    .factionContent {
      text-align: right;
    }
  }
}

@media screen and (max-width: 599.95px) {
  .navBox,
  .headerContent,
  .priceBox,
  .topLineBox,
  .introduceBox,
  .factionsBody {
    max-width: 600px;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: column;
  }
  .notice_nav {
    flex-grow: 2;
    margin-top: 0px !important;
    padding-bottom: 20px;
  }
  .navList {
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
    -webkit-box-align: center;
    display: flex;
  }

  .topLeft {
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column-reverse;
    margin: auto !important;
  }

  .topRight {
    display: none;
  }

  .priceItem {
    flex-basis: 50%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 50%;
  }

  .factionTitle {
    text-align: center;
  }

  .factionItemLeft {
    flex-direction: column !important;
    -webkit-box-align: center;
    align-items: center !important;
    justify-content: center !important;

    .factionContent {
      text-align: center;
    }
  }

  .factionItemRight {
    flex-direction: column !important;
    -webkit-box-align: center;
    align-items: center !important;
    justify-content: center !important;

    .factionContent {
      text-align: center;
    }

    .pc {
      display: none;
    }

    .Wap {
      display: block;
    }
  }
}

.mark1 {
  height: 90% !important;
}
.popNav {
  background-color: #191b1cff;
  padding: 20px;
  width: 50%;
  input {
    background: #191b1cff;
    border: none;
    border-bottom: 1px dashed #fff;
    padding: 10px;
    flex: 1;
    color: #fff;
  }
}
::v-deep .overNav {
  background-color: rgba(0, 0, 0, 1) !important;
}

// 交易蒙板
.mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 784px;
  height: 700px;
  color: #fff;
  z-index: 999;

  .titlelogo {
    position: absolute;
    text-align: center;
    top: 30px;
    left: 0;
    right: 0;
    margin: auto;

    img {
      width: 100px;
    }
  }

  .bgImg,
  .content {
    background: #191b1cff;
    border-radius: 10px;
    // width: 784px;
    // height: 700px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .content {
    padding: 70px 103px 0;

    .address {
      text-align: right;
      margin-top: 70px;
    }

    .node,
    .invited {
      margin-top: 10px;
      display: flex;

      .nodeTitle {
        font-size: 25px;
        line-height: 40px;
        min-width: 105px;
      }

      input {
        background: #191b1cff;
        border: none;
        border-bottom: 1px dashed #fff;
        padding: 10px;
        margin-left: 20px;
        margin-right: 20px;
        flex: 1;
        color: #fff;
      }

      .sybmol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 22px;
      }
    }

    .invited {
      margin-top: 30px;
    }

    .radioBox {
      display: flex;
      justify-content: space-around;
      margin-top: 29px;

      .radioItem {
        padding: 19px 32px;
        border: 1px solid #fff;
        border-radius: 5px;
      }
    }

    .noded,
    .residue {
      margin-top: 21px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }

    .noded {
      margin-top: 40px;
    }

    .tips {
      font-size: 18px;
      opacity: 0.5;
      text-align: center;
      margin-top: 30px;
      line-height: 30px;
    }

    .footerIcon {
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      margin: auto;
      padding: 15px 0;
      width: 50%;

      a {
        img {
          height: 30px;
        }
      }
    }
  }
}

.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.6;
}

.footer {
  position: fixed;
  bottom: 30px;
  z-index: 998;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  width: 100%;

  a {
    img {
      flex-shrink: 0;
      height: 100px;
      vertical-align: middle;
      align-items: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .mark1 {
    height: 96% !important;

    .noded {
      margin-top: 20px !important;
    }
  }
  .popNav {
    width: 100%;
  }

  .mark {
    width: 100%;
    height: 100% !important;

    .titlelogo {
      display: block;
      position: absolute;
      top: 6%;
      left: 0;
      right: 0;
      margin: auto;
      text-align: center;

      img {
        width: 100px;
      }
    }

    .address {
      margin-top: 10% !important;
    }

    .content {
      width: 100%;
      height: 100%;
      position: static;
      padding: 28% 15px;
      border-radius: 0;

      .node,
      .invited {
        margin-top: 5%;

        .nodeTitle {
          font-size: 16px;
          min-width: 20%;
        }

        input {
          margin-left: 0;
        }

        .sybmol {
          font-size: 12px;
        }
      }

      .noded,
      .residue {
        font-size: 15px;
      }

      .btnBox {
        margin-top: 10%;
        // .
      }

      .btnBox1 {
        margin-top: 10px;
      }

      .footerIcon {
        position: fixed;
        width: 92%;

        a {
          img {
            height: 40px;
          }
        }
      }
    }
  }
}
.bodyBtn {
  box-sizing: border-box;
  flex-direction: row;
  max-width: 355px;
  text-align: center;
  position: relative;
  margin: 20px auto;

  a {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    font-weight: 500;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    width: 100%;
    font-size: 22px;
    color: white;
    outline: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0px 0px 20px;
    text-decoration: none;
    padding: 10px 8px 6px;
    border-radius: 4px;
    background: rgb(35, 35, 35);
    transition: color 300ms ease-in-out 0s, left 300ms ease-in-out 0s;
  }
}
</style>