<template>
  <div class="dappInfo">
    <div class="nav">
      <img src="../../assets/img/back.png" alt="" @click="back" />
      <div class="title">{{ title }}</div>
    </div>
    
    <div class="content fz12" v-if="title == '参与记录'">
      <div class="listTips indent0" v-show="!list||list.length==0">
        暂无记录
      </div>
      <div  v-show="list||list.length!=0" class="listitem indent0" v-for="(v,i) in list" :key="i">
        <div>黑洞扫描</div>
        <div>{{v.createTime}}</div>
      </div>
    </div>
    <div class="content fz12" v-if="title == '版权'">
      <div class="indent0">{{ $t("message.dapp.copy1") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy2") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy3") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy4") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy5") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy6") }}</div>
      <div class="indent0">{{ $t("message.dapp.copy7") }}</div>
    </div>

    <div class="content fz12" v-if="title == '隐私与政策'">
      <div>
        此页面用于通知访问者有关EAT的政策.如果您选择使用EAT服务，那么您同意收集和使用与此策略相关的信息。EAT收集的个人信息用于提供和改进服务。EAT不会使用或与任何人分享您的信息，除非在这个隐私政策中描述。
      </div>
      <div>
        本隐私政策中使用的术语与EAT条款和条件中使用的术语具有相同的含义，除非本隐私政策中另有定义，否则可在eatadd.comr访问。
      </div>
      <div class="indent0">Cookies</div>
      <div>
        Cookies是具有少量数据的文件，通常用作匿名唯一标识符。这些文件将从您访问的网站发送到您的浏览器，并存储在设备的内存中。
      </div>
      <div>
        此服务不显式使用这些cookie。但是，应用程序可能会使用第三方代码和使用“cookies”的库来收集信息并改进其服务。您可以选择接受或拒绝这些cookie，并知道cookie何时发送到您的设备。如果您选择拒绝EAT的cookies，您可能无法使用此服务的某些部分。
      </div>
      <div class="indent0">服务提供商</div>
      <div>EAT可以雇佣第三方公司和个人，原因如下：</div>
      <div>为EAT的服务提供便利；</div>
      <div>代表EAT提供服务；</div>
      <div>执行与服务相关的服务；</div>
      <div>协助EAT分析如何使用EAT服务。</div>
      <div>
        EAT想通知此服务的用户，这些第三方可以访问您的个人信息。原因是代表EAT执行分配给他们的任务。但是，他们有义务不披露或将信息用于任何其他目的。
      </div>
      <div class="indent0">安全</div>
      <div>
        EAT很重视您对EAT提供您的个人信息的信任，因此EAT正在努力使用商业上可接受的手段来保护它。但是请记住，没有一种通过互联网传输的方法，或者说电子存储的方法是100%安全可靠的，EAT不能保证它的绝对安全性。
      </div>
      <div class="indent0">其他网站的链接</div>
      <div>
        此服务可能包含指向其他网站的链接。如果您点击第三方链接，您将被引导到该网站。请注意，这些外部站点不是由EAT操作的。因此，EAT强烈建议您审查这些网站的隐私政策。EAT对任何第三方网站或服务的内容、隐私政策或做法没有控制权，也不承担任何责任。
      </div>
      <div class="indent0">此隐私策略的更改</div>
      <div>
        EAT可以随时更新EAT的隐私政策。因此，建议您定期查看此页以了解任何更改。如有任何更改，EAT会在本页公布新的隐私政策。这些更改在发布到此页后立即生效。
      </div>
      <div class="indent0">联系我们</div>
      <div>
        如果您对EAT的隐私政策有任何疑问或建议，请随时与EAT联系。通过推特：@eateradd联系
      </div>
    </div>

    <div class="content fz12" v-if="title == '关于我们'">
      <div>{{ $t("message.dapp.about") }}</div>
    </div>

    <div class="content fz12" v-if="title == '社交媒体'">
      <img src="../../assets/img/1.png" @click="goIn(1)" alt="" />
      <img src="../../assets/img/2.png" @click="goIn(2)" alt="" />
      <img src="../../assets/img/4.png" @click="goIn(4)" alt="" />
      <img src="../../assets/img/5.png" @click="goIn(5)" alt="" />
      <img src="../../assets/img/6.png" @click="goIn(6)" alt="" />
      <img src="../../assets/img/8.png" @click="goIn(7)" alt="" />
    </div>

    <div class="content" v-if="title == 'v2提现'">
      <div class="balanceInfo">
        <div class="balanceItem indent0">
          <div class="left">EAT</div>
          <div class="right">{{ eatNum }}</div>
        </div>
        <div class="balanceItem indent0">
          <div class="left">MRT</div>
          <div class="right">{{ mrtNum }}</div>
        </div>
      </div>
      <div class="footerBtn">
        <div class="btn indent0" @click="showModel()">提现</div>
      </div>
    </div>

    <div class="mark" :style="{ height: '200px' }" v-show="markShow">
      <div class="title">提现</div>
      <div class="item">
        EAT <input type="text" v-model="eatN" @input="showAccredit(1)" />
      </div>
      <div class="item">
        MRT <input type="text" v-model="mrtN" @input="showAccredit(2)" />
      </div>
      <div class="btn" v-show="!showAccredit1 && !showAccredit2">
        <div class="cancel" @click="close">否</div>
        <div class="config" @click="withdraw">是</div>
      </div>
    </div>

    <div class="cover" v-show="coverShow" @click="close"></div>
  </div>
</template>

<script>
import config from "@/config";
import tools from "@/api/public.js";
import { Toast } from "vant";
import axios from "axios";
var Ip, address, web3;
export default {
  data() {
    return {
      title: "",
      eatNum: "",
      mrtNum: "",
      showAccredit1: false,
      showAccredit2: false,
      eatN: "0",
      mrtN: "0",
      coverShow: false,
      markShow: false,
      list:[]
    };
  },
  mounted() {
    this.title = this.$route.query.title;
    tools.testMASK().then((res) => {
      let { web, id } = res;
      web3 = web;
      address = id;

      axios
        .get(`https://eatadd.com:8443/eatorder/listAddress?engageAddress=${address}&pageNo=1&pageSize=10`)
        .then((res) => {
          this.list=res.data.result.records;
          console.log(Boolean(this.list));
        })
        .catch((err) => {
          console.log(err);
        });
      Ip = new web3.eth.Contract(
        config["hyue"][config["key"]]["Hole"]["abi"],
        config["hyue"][config["key"]]["Hole"]["heyue"]
      );

      Ip.methods.userInfo(address).call((err, ret) => {
        if (ret) {
          this.eatNum = Number(
            ret[1].slice(0, ret[1].length - 18) +
              "." +
              ret[1].slice(ret[1].length - 18)
          );
          this.mrtNum = ret[2];
        }
      });
    });
  },
  methods: {
    showModel() {
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
    back() {
      // this.$router.push("/dapp");
      this.$router.back();
    },
    goIn(val) {
      if (val == 1) {
        window.location.href = "https://github.com/eateradd";
      } else if (val == 2) {
        window.location.href = "https://twitter.com/eateradd";
      } else if (val == 4) {
        window.location.href = "https://twitter.com/eateradd";
      } else if (val == 5) {
        window.location.href = "https://twitter.com/eateradd";
      } else if (val == 6) {
        window.location.href = "https://twitter.com/eateradd";
      } else if (val == 7) {
        window.location.href = "https://twitter.com/eateradd";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dappInfo {
  background: #191b1cff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    position: absolute;
    left: 10px;
  }
}
.content {
  padding: 20px;
  width: 100%;
  flex: 1;
  div {
    text-indent: 1em;
    line-height: 20px;
    margin-bottom: 10px;

    word-wrap: break-word;
  }
}
.indent0 {
  text-indent: 0em !important;
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
  justify-content: center;
  .btn {
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 0 0 12px 1px #00b1ef;
    background: #00b1ef;
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
.listitem{
  display: flex;
  justify-content: space-between;
}
.listTips{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>