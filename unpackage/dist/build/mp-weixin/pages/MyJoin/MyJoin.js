(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/MyJoin/MyJoin"],{"1ab3":function(e,t,n){"use strict";(function(e){n("c7ef");o(n("66fd"));var t=o(n("7f09"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"6d7e":function(e,t,n){"use strict";n.r(t);var o=n("fbcc"),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},"7f09":function(e,t,n){"use strict";n.r(t);var o=n("cedc"),r=n("6d7e");for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n("85db");var a,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"4d3fc082",null,!1,o["a"],a);t["default"]=s.exports},"85db":function(e,t,n){"use strict";var o=n("bf45"),r=n.n(o);r.a},bf45:function(e,t,n){},cedc:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o}));var r=function(){var e=this,t=e.$createElement;e._self._c},c=[]},fbcc:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("a34a")),r=n("03d2");function c(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,o,r,c,a){try{var u=e[c](a),s=u.value}catch(i){return void n(i)}u.done?t(s):Promise.resolve(s).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var c=e.apply(t,n);function u(e){a(c,o,r,u,s,"next",e)}function s(e){a(c,o,r,u,s,"throw",e)}u(void 0)}))}}var s={data:function(){return{userName:"",userNumber:"",tabIndex:0,coursename:"",class:"",CourseList:[],tabList:[{name:"全部"},{name:"点名中"}]}},methods:{getId:function(t){return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.getSessionId)(t.code).then((function(t){200===t.code?e.setStorage({key:"sessionId",data:t.data.sessionId,success:function(){console.log("success")}}):wx.showModal({title:"提示",content:"登录失败（获取sessionId失败）"})}));case 2:case"end":return n.stop()}}),n)})))()},Login:function(){var t=this;return u(o.default.mark((function n(){var c;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.getStorageSync("id")){n.next=2;break}return n.abrupt("return");case 2:c=t,wx.login({success:function(t){console.log(t,"Aaaaa"),c.getId(t),t.code&&!e.getStorageSync("id")?wx.showModal({title:"温馨提示",content:"亲，授权微信登录后才能正常使用小程序功能",success:function(t){e.getUserInfo({desc:"使用前请先授权",lang:"zh_CN",success:function(t){console.log(t,"sssss"),(0,r.wxLogin)({iv:t.iv,encryptedData:t.encryptedData,sessionId:e.getStorageSync("sessionId")}).then((function(t){200==t.code?e.setStorageSync("id",t.data.id):wx.showModal({title:"提示",content:"登录失败（获取id失败）"})}))},fail:function(e){console.log(e,"ssss")}})}}):console.log("登录失败！"+t.errMsg)}});case 4:case"end":return n.stop()}}),n)})))()},getJoinList:function(){var t=this;return u(o.default.mark((function n(){var c;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.getStorageSync("id"),n.next=3,(0,r.getJoinList)(c).then((function(e){t.CourseList=e.data,t.CourseList.sort((function(e,t){return t.type-e.type}))}));case 3:case"end":return n.stop()}}),n)})))()},sign:function(e){var t=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.userNumber){n.next=3;break}return n.next=3,t.getStudentInfo();case 3:return n.next=5,(0,r.Sign)({courseId:e.id,studentNumber:t.userNumber,time:e.time}).then((function(e){200===e.code?wx.showModal({title:"提示",content:"签到成功"}):404===e.code?wx.showModal({title:"提示",content:"您已签到，不可重复签到"}):wx.showModal({title:"提示",content:"请先在个人信息中绑定姓名学号"})}));case 5:t.getJoinList();case 6:case"end":return n.stop()}}),n)})))()},slectTab:function(e){console.log(e),this.tabIndex=e.index},getStudentInfo:function(){var t=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,r.getStudentInfo)({id:e.getStorageSync("id")}).then((function(e){t.userNumber=e.data.number,t.userName=e.data.name}));case 2:case"end":return n.stop()}}),n)})))()},init:function(){var t=this,n=setInterval((function(){e.getStorageSync("id")?(t.getJoinList(),clearInterval(n)):console.log("dasd")}),250)},showDetail:function(t){var n=this;return u(o.default.mark((function r(){return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n.userNumber){o.next=3;break}return o.next=3,n.getStudentInfo();case 3:e.navigateTo({url:"OrderDetail?courseId=".concat(t.id,"&number=").concat(n.userNumber,"&name=").concat(t.name,"&time=").concat(t.time),fail:function(e){console.log(e)},success:function(e){console.log(e,"success")}});case 5:case"end":return o.stop()}}),r)})))()}},onReady:function(){this.Login()},onTabItemTap:function(){e.getStorageSync("id")&&this.getJoinList()},onLoad:function(){this.init()}};t.default=s}).call(this,n("543d")["default"])}},[["1ab3","common/runtime","common/vendor"]]]);