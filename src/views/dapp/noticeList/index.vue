<template>
  <div
    class="content f a_s"
    :style="{ padding: isphone ? '20px' : '100px 200px' }"
  >
    <el-row :gutter="100" style="width: 100%">
      <el-col :sm="24" :md="1">
        <div
          class="back_nav f a_c marr-10"
          style="padding-bottom: 20px"
          @click="back"
        >
          <img src="../../../assets/img/back1.png" />
          <span>返回</span>
        </div>
      </el-col>
      <el-col :sm="24" :md="20">
        <div class="block">
          <el-timeline :reverse="reverse" class="line_nav">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.content"
            >
              {{ mpnent(activity.createTime) }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
    </el-row>

    <!-- <div class="add_nav">
			<el-button @click="dialogVisible = true" type="primary" icon="el-icon-plus" style="background-color: rgba(236, 249, 255,0);border: 1px solid rgba(236, 249, 255,0.5;">新增</el-button>
		</div> -->

    <!-- 弹框 -->
    <el-dialog :visible.sync="dialogVisible" :width="isphone ? '320px' : '50%'">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="formLabelAlign.content"
            type="textarea"
            :rows="4"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-select v-model="formLabelAlign.type" placeholder="请选择">
            <el-option :key="0" label="显示" :value="0"> </el-option>
            <el-option :key="1" label="不显示" :value="1"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import moment from "moment";
import "moment/locale/zh-cn";
export default {
  data() {
    return {
      isphone: false,
      reverse: true,
      dialogVisible: false,
      activities: [],
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        type: "",
        title: "",
      },
    };
  },

  mounted() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isphone = true;
    } else {
      this.isphone = false;
    }
    axios({
      method: "get",
      url: "https://eatadd.com:8443/announcement/find?pageNo=1&pageSize=10",
    })
      .then((res) => {
        let { result, code } = res.data;
        switch (code) {
          case 0:
            this.activities = result.records;
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
    back() {
      // this.$router.push("/dapp");
      this.$router.back();
    },
    mpnent(str) {
      return moment(str).format(
        "YYYY-MM-DD" + "  " + "HH:mm:ss"
      );
    },
    submit() {
      let parm = {
        content: this.formLabelAlign.content,
        status: this.formLabelAlign.type,
        title: this.formLabelAlign.title,
      };
      axios({
        method: "post",
        url: "https://eatadd.com:8443/announcement/save",
        data: parm,
      })
        .then((res) => {
          Toast("提交成功");
        })
        .catch(function (error) {
          Toast.fail("提交失败");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 200px;
}
.line_nav {
  ::v-deep .el-timeline-item__content {
    color: #fff;
    font-size: 16px;
  }
  ::v-deep .el-timeline-item__timestamp {
    color: #fff;
    padding: 30px 0;
  }
}
.add_nav {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
