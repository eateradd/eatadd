<template>
  <div id="root">
    <div class="homepage">
      <div class="content">
        <div class="fz20" style="margin-bottom: 10px">
          {{ $t("message.homepage.inviteTitle") }}:
        </div>
        <div class="checkBox">
          <input
            type="text"
            v-model="invited"
            :placeholder="$t('message.homepage.inviteP')"
          />
          <button @click="linkWallet(1)">
            {{ $t("message.homepage.confirm") }}
          </button>
        </div>
        <div class="DataBox">
          <div class="linkPeople fz20">
            人数: <span>{{ linkNum }}</span>
          </div>
          <div class="linkMon fz20">
            金额: <span>{{ linkMoney }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//新版配置 模块化
import config from "@/config";
import tools from "@/api/public.js";
var web3, address, Check;
export default {
  data() {
    return {
      linkList: [],
      linkNum: 0,
      linkMoney: 0,
      invited:''
    };
  },
  mounted() {
    this.linkWallet(0);
  },
  methods: {
    linkWallet(e) {
      console.log(this.invited)
      tools.testMASK().then((res) => {
        let { web, id } = res;
        web3 = web;
        address = id;
        this.addRess = id.substr(0, 4) + "****" + id.substr(id.length - 4);
        Check = new web3.eth.Contract(
          config["hyue"][config["key"]]["Check"]["abi"],
          config["hyue"][config["key"]]["Check"]["heyue"]
        );
        if (e == 1) {
          Check.methods.levelone(this.invited).call((err, ret) => {
            this.linkNum=0
              this.linkMoney = 0;
            console.log(ret);
            if (ret[0] != 0) {
              this.linkNum += Number(ret[0]);
              this.linkMoney += Number(ret[1]) / 10 ** 18;
              this.getLinkNum(ret[2]);
            }
          });
        }
      });
    },
    getLinkNum(L) {
      for (let k in L) {
        Check.methods.levelone(L[k]).call((err, ret) => {
          if (ret[0] != 0) {
            this.linkNum += Number(ret[0]);
            this.linkMoney += Number(ret[1]) / 10 ** 18;
            this.getLinkNum(ret[2]);
          }
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
}
.DataBox {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.checkBox {
  display: flex;
  align-items: center;
  min-width: 400px;
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
button {
  background: #393a3bff;
  padding: 19px 20px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 5px 10px #000;
}
</style>