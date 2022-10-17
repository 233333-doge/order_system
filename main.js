import App from './App'
// import request from './request/ruquest.js'
// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
Vue.use(uView);
import store from "@/store/index.js"

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  //将请求挂载到全局
  // app.config.globalProperties.$http = myRequest
  // app.use(store)
  return {
    app
  }
}
// #endif
