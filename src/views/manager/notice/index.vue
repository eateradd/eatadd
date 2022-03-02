<template>
	<div class="content">
		<el-button type @click="showPop(1)">新增公告</el-button>
		<el-table :data="activities" style="width: 100%">
		    <el-table-column align="center" label="创建时间">
				<template slot-scope="scope">
				  <div class="van-multi-ellipsis--l2">{{mpnent(scope.row.createTime)}}</div>
				</template>
			</el-table-column>
			<el-table-column align="center" label="标题">
				<template slot-scope="scope">
					<div class="van-multi-ellipsis--l2">
						{{scope.row.title}}
					</div>
				</template>
				
			</el-table-column>
		    <el-table-column  align="center" label="内容">
				<template slot-scope="scope">
					<div class="van-multi-ellipsis--l2">
						{{scope.row.content}}
					</div>
				</template>
				
		    </el-table-column>
			<el-table-column align="center" label="项目">
				<template slot-scope="scope">
					<div class="van-multi-ellipsis--l2">
						{{scope.row.projectId == 1?'黑洞扫描': '数据协议'}}
					</div>
				</template>
			</el-table-column>
			
			<el-table-column align="center" label="是否显示">
				<template slot-scope="scope">
					<div class="van-multi-ellipsis--l2">
						{{scope.row.status?'显示': '隐藏'}}
					</div>
				</template>
			</el-table-column>
		    <el-table-column  align="center" label="操作">
		      <template slot-scope="scope">
		        <el-button  size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		
		
		
		
		<!-- 弹框 -->
		<el-dialog :visible.sync="dialogVisible" :width="isphone ? '320px' : '50%'" :before-close="handleClose">
		  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			  <el-form-item label="标题">
			    <el-input v-model="formLabelAlign.title"></el-input>
			  </el-form-item>
		    <el-form-item label="内容">
		      <el-input v-model="formLabelAlign.content" type="textarea" :rows="4"></el-input>
		    </el-form-item>
		    <el-form-item label="是否显示">
		      <el-select v-model="formLabelAlign.type" placeholder="请选择">
		          <el-option :key="0" label="隐藏" :value="0"> </el-option>
				  <el-option :key="1" label="显示" :value="1"> </el-option>
		        </el-select>
		    </el-form-item>
			<el-form-item label="所属项目">
				<el-select v-model="formLabelAlign.appName" placeholder="请选择">
				  <el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				  </el-option>
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
	import moment from 'moment'
	import 'moment/locale/zh-cn'
	import { getNotice,addNotice,deletNotice,eidNotice } from "@/api/manager"
	export default {
		data(){
			return {
				isphone: false,
				reverse: true,
				dialogVisible:false,
				activities: [],
				labelPosition: 'right',
				formLabelAlign: {
				  name: '',
				  type: 1,
				  title: '',
				  id: '',
				  appName: '1'
				},
				popType: 1,
				options: [{
				  value: '1',
				  label: '黑洞扫描'
				}, {
				  value: '2',
				  label: '数据协议'
				}],
			}
		},
		created() {
			if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				this.isphone = true;
			} else {
				this.isphone = false;
			}
		},
		mounted() {
			this.getList()
		},
		methods:{
			getList(){
				getNotice().then(res=>{
					let { result,code } = res
					switch (code){
						case 0:
						    this.activities = result.records
							console.log(this.activities);
							break;
						default:
							break;
					}
				})
			},
			showPop(e,item){
				if(e == 2){
					this.formLabelAlign = {
						content: item.content,
						type: item.status,
						title: item.title,
						appName: String(item.projectId),
						id: item.id
					}
				}
				this.popType = e
				this.dialogVisible = true
			},
			mpnent(str){
				return moment('2022-02-21T09:12:27').format('YYYY-MM-DD' + '  ' + 'HH:mm:ss')
			},
			submit(){
				let parm = {
					content: this.formLabelAlign.content,
					status: this.formLabelAlign.type,
					title: this.formLabelAlign.title,
					projectId: this.formLabelAlign.appName,
					id: this.formLabelAlign.id
				}
				if(this.popType == 1){
					addNotice(parm).then(res=>{
						Toast("提交成功");
						this.dialogVisible = false
						this.getList()
					}).catch(function (error) {
					    Toast.fail("提交失败");
						this.dialogVisible = false
					  });
				}else{
					eidNotice(parm).then(res=>{
						Toast("提交成功");
						this.dialogVisible = false
						this.getList()
					}).catch(function (error) {
					    Toast.fail("提交失败");
						this.dialogVisible = false
					  });
				}
			},
			handleEdit(index, row) {
				this.showPop(2,row)
			        // console.log(index, row);
			},
			handleDelete(index, row) {
					// console.log(index, row);
				deletNotice({id:row.id}).then(res=>{
					this.getList()
				})
			},
			handleClose(done){
				this.formLabelAlign = {
				  name: '',
				  type: 1,
				  title: '',
				  id: '',
				  appName: '1'
				}
				done()
			}
		}
	}
</script>

<style>
</style>
