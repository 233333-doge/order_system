import Vue from 'vue'
 
import Vuex from 'vuex'
 
Vue.use(Vuex)
// 方法1（直接写）
const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
	    status: 1
    },
    getters: {
      
    },
    mutations: {
	
	},
    actions: {
	}
})
export default store
