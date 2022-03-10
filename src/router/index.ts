import Vue from 'vue'
import VueRouter, {
	RouteConfig
}
	from 'vue-router'

// import Layout from '@/layout'
import Home from '../views/Home.vue'
import Check from '../views/Check.vue'
import Dapp from '../views/dapp/index.vue'
import info from '../views/dapp/personalInfo.vue'
import test from '../views/dapp/tipsCopy.vue'
import noticeList from '../views/dapp/noticeList/index.vue'

Vue.use(VueRouter)

const routes = [
	{

		path: '/',
		name: 'Home',
		component: Home,
		hidden: true,
	},
	{
		path: '/BackCheck',
		name: 'Check',
		component: Check,
		hidden: true,
	},
	{
		path: '/dapp',
		name: 'Dapp',
		component: Dapp,
		hidden: true,
	},
	{
		path: "/dapp/info",
		name: 'dappInfo',
		component: info,
		hidden: true,
	},
	{
		path: '/test',
		name: 'test',
		component: test,
		hidden: true,
	},
	{
		path: '/noticeList',
		name: 'noticeList',
		component: noticeList,
		hidden: true,
	},
	{
		path: '/manager',
		name: 'manager',
		hidden: true,
		component: () => import('@/views/manager/login.vue')
	},
	//  {
	// path: '/bannar',
	// name: 'bannar',
	// component: () => import('@/views/manager/dashboard/index.vue') 
	//  }
	{
		path: '/setting',
		name: 'setting',
		component: () => import('@/layout/index.vue'),
		redirect: '/bannar',
		children: [
			{
				path: '/bannar',
				component: () => import('@/views/manager/dashboard/index.vue'),
				name: 'bannar',
				meta: { title: '轮播设置', icon: 'nested', affix: true }
			},
		]
	},
	{
		path: '/notice',
		name: 'setting',
		component: () => import('@/layout/index.vue'),
		redirect: '/notice',
		children: [
			{
				path: '/notice',
				component: () => import('@/views/manager/notice/index.vue'),
				name: 'notice',
				meta: { title: '公告设置', icon: 'nested', affix: true }
			},
		]
	},
	{
		path: '/QA',
		name: 'QA',
		component: () => import('@/layout/index.vue'),
		redirect: '/QA',
		children: [
			{
				path: '/QA',
				component: () => import('@/views/manager/QorA/index.vue'),
				name: 'QorA',
				meta: { title: '问答设置', icon: 'nested', affix: true }
			},
		]
	},
	{
		path: '/user',
		name: 'user',
		component: () => import('@/layout/index.vue'),
		redirect: '/user',
		children: [
			{
				path: '/user',
				component: () => import('@/views/manager/userInfo/index.vue'),
				name: 'userInfo',
				meta: { title: '用户列表', icon: 'nested', affix: true }
			},
		]
	},
	{
		path: '/order',
		name: 'order',
		component: () => import('@/layout/index.vue'),
		redirect: '/order',
		children: [
			{
				path: '/order',
				component: () => import('@/views/manager/orderInfo/index.vue'),
				name: 'orderInfo',
				meta: { title: '活动列表', icon: 'nested', affix: true }
			},
		]
	},
	{
		path: '/invite',
		name: 'invite',
		component: () => import('@/layout/index.vue'),
		redirect: '/invite',
		children: [
			{
				path: '/invite',
				component: () => import('@/views/manager/invite/index.vue'),
				name: 'invite',
				meta: { title: '邀请关系', icon: 'nested', affix: true }
			},
		]
	},
]

const router = new VueRouter({

	mode: 'hash',
	base: process.env.BASE_URL,
	routes

}
)

export default router
