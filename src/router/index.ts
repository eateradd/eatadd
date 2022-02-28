import Vue from 'vue'
import VueRouter, {
  RouteConfig
}
  from 'vue-router'
import Home from '../views/Home.vue'
import Check from '../views/Check.vue'
import Dapp from '../views/dapp/index.vue'
import info from '../views/dapp/personalInfo.vue'
import test from '../views/dapp/tipsCopy.vue'
import noticeList from '../views/dapp/noticeList/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {

    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BackCheck',
    name: 'Check',
    component: Check
  },
  {
    path: '/dapp',
    name: 'Dapp',
    component: Dapp,
  },
  {
    path: "/dapp/info",
    name: 'dappInfo',
    component: info,
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
	path: '/noticeList',
	name: 'noticeList',
	component: noticeList
  }
]

const router = new VueRouter({

  mode: 'hash',
  base: process.env.BASE_URL,
  routes

}
)

export default router
