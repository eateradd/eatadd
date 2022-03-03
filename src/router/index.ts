import Vue from 'vue'
import VueRouter, {
	RouteConfig
}
<<<<<<< HEAD
	from 'vue-router'

// import Layout from '@/layout'
=======
  from 'vue-router'

import Layout from '@/layout'
>>>>>>> 576f812de8d135fa9076d80f21b9e7855705e943
import Home from '../views/Home.vue'
import Check from '../views/Check.vue'
import Dapp from '../views/dapp/index.vue'
import info from '../views/dapp/personalInfo.vue'
import test from '../views/dapp/tipsCopy.vue'
import noticeList from '../views/dapp/noticeList/index.vue'

Vue.use(VueRouter)

const routes = [
	{

<<<<<<< HEAD
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
=======
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
      component: () => import('@/layout'),
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
	    component: () => import('@/layout'),
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
	    component: () => import('@/layout'),
	    redirect: '/QA',
		  children: [
		    {
		      path: '/QA',
		      component: () => import('@/views/manager/QorA/index.vue'),
		      name: 'QorA',
		      meta: { title: '问答设置', icon: 'nested', affix: true }
		    },
		  ]
>>>>>>> 576f812de8d135fa9076d80f21b9e7855705e943
	},
]

const router = new VueRouter({

<<<<<<< HEAD
	mode: 'history',
	base: process.env.BASE_URL,
	routes
=======
  mode: 'history',
  base: process.env.BASE_URL,
  routes
>>>>>>> 576f812de8d135fa9076d80f21b9e7855705e943

}
)

export default router
