<template>
  <div class="content">
    <el-table :data="activities" style="width: 100%">
      <el-table-column align="center" label="创建时间">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ mpnent(scope.row.createTime) }}
          </div>
        </template>
      </el-table-column>
      <el-table-column width="400" align="center" label="用户地址">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ scope.row.engageAddress }}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="期数">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ scope.row.period }}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="参与次数">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ scope.row.participation }}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="EAT数量">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ scope.row.engageEat }}
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="LP数量">
        <template slot-scope="scope">
          <div class="van-multi-ellipsis--l2 fz12">
            {{ scope.row.engageLp }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="nextBtn">
      <el-button @click="back">上一页</el-button>
      <el-button @click="next">下一页</el-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/zh-cn";
import { getOrderList } from "@/api/manager";
export default {
  data() {
    return {
      activities: [],
      pageNo: 1,
      pageSize: 16,
      maxTotal: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getOrderList({
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      }).then((res) => {
        let { result, code } = res;
        this.maxTotal = Math.ceil(result.total / result.size);
        switch (code) {
          case 0:
            this.activities = result.records;
            console.log(this.activities);
            break;
          default:
            break;
        }
      });
    },

    mpnent(str) {
      return moment("2022-02-21T09:12:27").format(
        "YYYY-MM-DD" + "  " + "HH:mm:ss"
      );
    },
    back() {
      if (this.pageNo > 1) {
        this.pageNo -= 1;
        this.getList();
      }
    },
    next() {
      if (this.pageNo < this.maxTotal) {
        this.pageNo += 1;
        this.getList();
      }
    },
  },
};
</script>

<style>
.nextBtn {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
