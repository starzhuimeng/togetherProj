import Vue from 'vue'
import App from './App'
import global from "./global.js"
Vue.config.productionTip = false
Vue.prototype.$global = global
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
