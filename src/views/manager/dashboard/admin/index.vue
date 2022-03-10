<template>
	<div>
		<div class="f c_r">
			<el-button type="primary" icon="el-icon-plus" @click="addaffiche">新增bannar</el-button>
		</div>
		<!-- 所有数据展示 -->
		<div class="content_aff">
			<div v-for="(item,index) in data" :key="index">
				<div>
					<p>标题： {{item.title}}</p>
					<p>是否显示：
						<span v-if="item.status == 1">显示</span>
						<span v-else-if="item.status == 0">隐藏</span>
					</p>
					<p>
						所属项目：{{item.projectId == 1?'黑洞扫描': '数据协议'}}
					</p>
					<p class="edit_btn">
						<el-button type="primary" icon="el-icon-edit" @click="editaffiche(item)">修改</el-button>
						<el-button type="danger" icon="el-icon-delete" @click="deletnotice(item.id)">删除</el-button>
					</p>

				</div>
				<div class="pohoto_conten">
					<img :src="item.fpath" :alt="item.content" />
				</div>
			</div>
		</div>
		<!-- 新增公告和修改公告弹窗 -->
		<el-dialog :title="dialogtitle" :visible.sync="dialogIsshow" width="500px" top="10vh" center
			modal-append-to-body @close="closedialog">
			<div class="dialogbody">
				<!-- <el-input id="bgImgName" placeholder="请输入背景名称" v-model="addlist.title" >
          <template slot="prepend">背景名称：</template>
          </el-input>-->
				<el-form ref="form" :model="addlist" label-width="120px" v-if="modleflag==1||modleflag==2">
					<el-form-item label="标题：">
						<el-input v-model="addlist.content" placeholder="请输入标题"></el-input>
					</el-form-item>
					<el-form-item label="是否显示：">
						<el-select v-model="addlist.bannerType" placeholder="是否显示">
							<el-option label="显示" value="1"></el-option>
							<el-option label="隐藏" value="0"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="所属项目">
						<el-select v-model="addlist.appName" placeholder="请选择">
						  <el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						  </el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div v-if="modleflag==2" style="text-align: center;padding-bottom: 20px;">
					<img :src="addlist.imageUrlcopy" alt="原图片" style="width:250px"
						@click="lookP(addlist.imageUrlcopy)" />
				</div>
				<el-upload v-if="modleflag==1||modleflag==2" list-type="picture-card" :limit="1" :on-exceed="exceed"
					ref="upload" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :action="actionPath"
					accept="image/jpeg, image/gif, image/png, image/bmp"  :on-change="changeUp" :auto-upload="false">
					<i class="el-icon-plus"></i>
				</el-upload>
			</div>
			<!--底部确认按钮-->
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogIsshow = false">取 消</el-button>
				<el-button v-if="modleflag==1" type="primary" @click="amendFun">确 定</el-button>
				<el-button v-if="modleflag==2" type="primary" @click="commitFun">确 定</el-button>
				<el-button v-if="modleflag==3" type="primary" @click="commitpicture">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 列表中的查看 -->
		<el-dialog :visible.sync="lookphotodialog">
			<img width="100%" :src="lookphoto" alt />
		</el-dialog>
	</div>
</template>
<script>
	// 获取七牛token
	// import { genUpToken } from "@/api/huanggua/qiniuToken";
	// 获取随机数
	// import { runder } from "@/utils/auth";
	import { Toast } from "vant";
	import {
		gethomebannarList,
		addhomebannar,
		editehomebannar,
		deletehomebannar
	} from "@/api/manager";
	export default {
		name: "affiche",
		data() {
			return {
				data: [],
				actionPath: "https://up-z0.qiniup.com",
				postData: {
					token: "",
					key: ""
				},
				modleflag: 1,
				bucketName: "loveyouke",
				dialogtitle: "",
				dialogIsshow: false,
				lookphotodialog: false,
				lookphoto: "",
				addlist: {
					bannerType: '0',
					noticeUrl: "",
					content: "",
					img: "",
					imageUrlcopy: "",
					imgKey: "",
					imgBucket: "",
					sysNum: '',
					appName: ''
				},
				options: [{
				  value: '1',
				  label: '黑洞扫描'
				}, {
				  value: '2',
				  label: '数据协议'
				}],
			};
		},
		created() {
			this.getList();
		},
		methods: {
			// 获取 所有公告
			getList() {
				gethomebannarList().then(res => {
					// console.log(res);
					const h = this.$createElement;
					const ss = res.result.records;
					const {code} = res;
					switch (code) {
						case 0:
							this.data = ss.map(v =>{
							  this.$set(v,"fpath1",`${v.fpath}`)
							  this.$set(v,"fpath",`https://eatadd.com:8443/images/${v.fpath}`)
							  return v
							});
							this.data = ss
							break;

						default:
							this.$message({
								type: "error",
								message: h("p", null, [
									h("span", null, "获取失败，报错 " + status + " :"),
									h("i", {
										style: "color: red"
									}, ss.msg)
								])
							});
							break;
					}
				});
			},
			//   点击新增按钮
			addaffiche() {
				this.modleflag = 1;
				this.dialogtitle = "新增公告";
				this.dialogIsshow = true;
				this.addlist = {
					noticeUrl: '',
					content: '',
					noticeId: '',
					imageUrlcopy: '',
					bannerType: ''
				};
			},
			//  确定新增公告
			amendFun() {
				const h = this.$createElement;
				let parm = {
					fpath: this.addlist.img,
					status: parseInt(this.addlist.bannerType),
					projectId: parseInt(this.addlist.appName),
					title: this.addlist.content
				}
				Toast.loading({
                        message: "请求中...",
                        forbidClick: true,
                        duration: 0,
                        overlay: true,
                      });
				addhomebannar(parm).then(res => {
					const {code} = res;
					Toast.clear()
					switch (code) {
						case 0:
							this.$message({
								type: "success",
								message: h("p", null, [
									h("span", null, "提交成功！！！ "),
									h("i", {
										style: "color: teal"
									}, res.serviceMessage)
								])
							});
							this.$refs.upload.clearFiles();
							this.getList();
							this.dialogIsshow = false;
							break;
						default:
							this.$message({
								type: "error",
								message: h("p", null, [
									h("span", null, "添加失败，报错 " + code + " :"),
									h("i", {
										style: "color: teal"
									}, res.serviceMessage)
								])
							});
							break;
					}
				});
			},
			// 点击修改按钮
			editaffiche(val) {
				this.modleflag = 2;
				this.dialogtitle = "修改公告";
				this.dialogIsshow = true;
				console.log(val)
				this.addlist = {
					noticeUrl: val.url,
					content: val.title,
					noticeId: val.id,
					imageUrlcopy: val.fpath,
					fpath1: val.fpath1,
					appName: String(val.projectId),
					bannerType: String(val.status),
					img: ''
				};
			},
			// 提交修改
			commitFun() {
				const h = this.$createElement;
				let parm = {
					fpath: this.addlist.img || this.addlist.fpath1,
					status: parseInt(this.addlist.bannerType),
					title: this.addlist.content,
					projectId: parseInt(this.addlist.appName),
					id: this.addlist.noticeId
				}
				console.log(this.addlist)
				console.log(parm)
				Toast.loading({
                        message: "请求中...",
                        forbidClick: true,
                        duration: 0,
                        overlay: true,
                      });
				editehomebannar(parm).then(res => {
					Toast.clear()
					const {code} = res
					switch (code) {
						case 0:
							this.$message({
								type: "success",
								message: h("p", null, [
									h("span", null, "提交成功！！！ ")
								])
							});
							this.$refs.upload.clearFiles()
							this.getList();
							this.dialogIsshow = false;
							break;
						default:
							this.$message({
								type: "error",
								message: h("p", null, [
									h("span", null, "报错 " + code + " :")
								])
							});
							break;
					}
				});
			},
			// 删除某条公告 val :  id值
			deletnotice(val) {
				console.log(val);
				Toast.loading({
                        message: "请求中...",
                        forbidClick: true,
                        duration: 0,
                        overlay: true,
                      });
				const h = this.$createElement;
				deletehomebannar(val).then(res => {
					Toast.clear()
					const {code} = res;
					switch (code) {
						case 0:
							this.$message({
								type: "success",
								message: h("p", null, [
									h("span", null, "删除成功！！！ ")
								])
							});
							// this.$refs.upload.clearFiles()
							this.getList();
							this.dialogIsshow = false;
							break;
						default:
							this.$message({
								type: "error",
								message: h("p", null, [
									h("span", null, "报错 " + code + " :"),
								])
							});
							break;
					}
				});
			},
			// 新增图片查看和删除
			handleRemove(file, fileList) {
				this.addlist.imageUrl = "";
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			changeUp(file){
				var reader = new FileReader()
				reader.readAsDataURL(file.raw)
				reader.onload = () => {
				  this.addlist.img = reader.result
				}
				reader.onerror = function (error) {
				  console.log('Error: ', error)
				}
			},
			// 上传图片超出个数（规定的只能上传一张图片）
			exceed(files, fileList) {
				const h = this.$createElement;
				this.$message({
					type: "error",
					message: h("p", null, [
						h("span", null, "不可一次性上传多张，"),
						h("i", {
							style: "color: red"
						}, "请先删除前一张后在上传")
					])
				});
			},
			// 关闭弹窗
			closedialog() {
				// console.log("关闭弹窗");
			},
			// 查看背景图片
			lookP(val) {
				this.lookphoto = val;
				this.lookphotodialog = true;
			}
		}
	};
</script>
<style scoped>
	.content_aff {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
	}

	.content_aff>div {
		width: 20%;
	}

	.pohoto_conten>img {
		width: 100%;
	}

	.edit_btn {
		display: flex;
		justify-content: space-evenly;
	}

	.pohoto_conten {
		position: relative;
		overflow: hidden;
		margin-top: 20px;
	}

	.pohoto_conten>div {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(000, 000, 000, 0);
		z-index: 5;
		top: 100%;
		left: 0;
		display: flex;
		justify-content: space-evenly;
		align-items: space-evenly;
		flex-direction: column;
	}

	.pohoto_conten>div>div {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		color: white;
	}

	@keyframes fadein {
		from {
			top: 100%;
			background: rgba(000, 000, 000, 0);
		}

		to {
			top: 0%;
			background: rgba(000, 000, 000, 0.6);
		}
	}

	.pohoto_conten:hover .imgdialog {
		animation: fadein ease-in 300ms;
		animation-fill-mode: forwards;
	}
	p{
		color: #001528;
		line-height: 150%;
	}
</style>
