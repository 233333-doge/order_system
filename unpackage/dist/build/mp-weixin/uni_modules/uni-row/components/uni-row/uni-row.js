(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-row/components/uni-row/uni-row"],{"44c1":function(t,n,u){"use strict";u.r(n);var e=u("c34e"),r=u.n(e);for(var i in e)"default"!==i&&function(t){u.d(n,t,(function(){return e[t]}))}(i);n["default"]=r.a},"5f50":function(t,n,u){},"9f3b":function(t,n,u){"use strict";var e=u("5f50"),r=u.n(e);r.a},abd8:function(t,n,u){"use strict";u.r(n);var e=u("c3d6"),r=u("44c1");for(var i in r)"default"!==i&&function(t){u.d(n,t,(function(){return r[t]}))}(i);u("9f3b");var a,c=u("f0c5"),o=Object(c["a"])(r["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=o.exports},c34e:function(t,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="uni-row",r="--",i={name:"uniRow",componentName:"uniRow",options:{virtualHost:!0},props:{type:String,gutter:Number,justify:{type:String,default:"start"},align:{type:String,default:"top"},width:{type:[String,Number],default:750}},created:function(){},computed:{marginValue:function(){return this.gutter?-this.gutter/2:0},typeClass:function(){return"flex"===this.type?"".concat(e+r,"flex"):""},justifyClass:function(){return"start"!==this.justify?"".concat(e+r,"flex-justify-").concat(this.justify):""},alignClass:function(){return"top"!==this.align?"".concat(e+r,"flex-align-").concat(this.align):""}}};n.default=i},c3d6:function(t,n,u){"use strict";var e;u.d(n,"b",(function(){return r})),u.d(n,"c",(function(){return i})),u.d(n,"a",(function(){return e}));var r=function(){var t=this,n=t.$createElement,u=(t._self._c,Number(t.marginValue)),e=Number(t.marginValue);t.$mp.data=Object.assign({},{$root:{m0:u,m1:e}})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-row/components/uni-row/uni-row-create-component',
    {
        'uni_modules/uni-row/components/uni-row/uni-row-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("abd8"))
        })
    },
    [['uni_modules/uni-row/components/uni-row/uni-row-create-component']]
]);
