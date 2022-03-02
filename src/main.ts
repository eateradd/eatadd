import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from '@/lang'
import echarts from 'echarts';
import "@/assets/css/reset.css";
import '@/utils/modules/ui.js';
// import './permission.js' // permission control
import './utils/modules/rem.js';
Vue.prototype.$echarts = echarts
import '@/styles/index.scss' // global css
new Vue({
    store,
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
