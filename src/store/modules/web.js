import Cookies from 'js-cookie'
import config from "@/config";
import tools from '../../api/public.js'
import Web3 from "web3";
import Web3Modal from "web3modal";

let huobiarr  = []
let fabiarr = []

var hbarr = config["hbi"][config["key"]];
for (const key in hbarr) {
  if(hbarr[key].id=='Gaz'){
	hbarr[key].id='GAZ';
	huobiarr.push(hbarr[key]);
  }else{
	huobiarr.push(hbarr[key]);
  }
}
var fbarr = config["fabi"][config["key"]];
for (const key in fbarr) {
  fabiarr.push(fbarr[key]);
}

const state = {
	web3: {},
	defultWeb3: new Web3(config["hyue"][config["key"]]["Url"]),
	address: Cookies.get('address') || '',
	isInte: Cookies.get('address') ? 1 : 0,  // 0 没链接   1 已链接   2 已拒绝
	config: config,
	huobiarr, // 货币arr
	fabiarr, // 单位 arr
	bzj_num: config["hyue"][config["key"]]["Bzj"]["num"] // 保证金 几个0
	
}

const mutations = {
	upAddress(state, payload) {
		state.address = payload
	},
	upWeb3(state,payload) {
		state.web3 = payload
	},
	setInit(state,payload) {
		state.isInte = payload
	},
}

const actions = {
	// 获取 web3  链接钱包
	initWeb3({ commit}) {
		return new Promise((resolve,reject)=>{
			// 监测用户是否安装MASK
			tools.testMASK().then(res=>{
				let {web,id} = res
				commit('upWeb3',web)
				commit('setInit',1)
				commit('upAddress',id)
				Cookies.set('address', id)
				resolve(true)
			}).catch((err)=>{
				commit('setInit',2)
				console.log(err);
				resolve(false)
			})
			
		})
		
	},
	// 监听 是否链接钱包  (通过是否链接 来判断  避免 每次刷新页面多次调用 钱包链接)
	getIsInit({ commit, state}){
		return new Promise((resolve,reject)=>{
			var cont = 0
			let getState = ()=>{
				if(state.isInte == 1){  // 已链接 （这里 重新调用钱包的原因是 防止页面刷新之后 web3 调用不起来钱包）
					// 设置 web3  和地址
					tools.testMASK().then(res=>{
						let {web,id} = res
						commit('upWeb3',web)
						commit('upAddress',id)
						Cookies.set('address', id)
						resolve(true)
					})
				}else if(state.isInte == 2){  //已拒绝 （已拒绝的情况 再要获取数据时候用 初始化的web3:defultWeb3）
					resolve(false)
				} else{  //  未链接
					setTimeout(()=>{
						getState()
					},500)
				}
			}
			getState()
		})
		
		
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


