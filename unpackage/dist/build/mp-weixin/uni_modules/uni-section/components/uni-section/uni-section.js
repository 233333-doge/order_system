(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-section/components/uni-section/uni-section"],{6639:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(e){t.report&&""!==e&&t.report("title",e)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n}).call(this,n("543d")["default"])},"8d2f":function(t,e,n){"use strict";n.r(e);var i=n("6639"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=u.a},"9dcd":function(t,e,n){"use strict";n.r(e);var i=n("f2da"),u=n("8d2f");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("e8fa");var a,o=n("f0c5"),f=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);e["default"]=f.exports},ae5f:function(t,e,n){},e8fa:function(t,e,n){"use strict";var i=n("ae5f"),u=n.n(i);u.a},f2da:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-section/components/uni-section/uni-section-create-component',
    {
        'uni_modules/uni-section/components/uni-section/uni-section-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9dcd"))
        })
    },
    [['uni_modules/uni-section/components/uni-section/uni-section-create-component']]
]);
