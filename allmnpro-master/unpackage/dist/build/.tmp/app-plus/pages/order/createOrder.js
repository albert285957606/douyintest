(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/createOrder"],{1299:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("454f"));function r(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{maskState:!1,desc:"",payType:1,checkedGoodsList:[],goods:{goodsTotalPrice:0,couponPrice:0},couponList:[],checkedAddress:{name:"请选择地址",province:"",tel:"",city:"",county:"",addressDetail:"",id:0},couponId:0,grouponRulesId:0,grouponLinkId:0,cartId:0,message:"",addressData:{name:"许小星",mobile:"13853989563",addressName:"金九大道",address:"山东省济南市历城区",area:"149号",default:!1}}},onLoad:function(){this.onloadstart()},onShow:function(){this.onloadstart()},onPullDownRefresh:function(){this.cartdata(!0),this.compondata()},methods:{onloadstart:function(){this.cartId=t.getStorageSync("cartId")?t.getStorageSync("cartId"):this.cartId,this.couponId=t.getStorageSync("couponId")?t.getStorageSync("couponId"):this.couponId,this.grouponRulesId=t.getStorageSync("grouponRulesId")?t.getStorageSync("grouponRulesId"):this.grouponRulesId,this.cartdata(),this.compondata()},openmask:function(){this.maskState=!0},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},goto:function(e){t.navigateTo({url:"/pages/address/address"})},cartdata:function(e){var o=this;t.showLoading({title:"正在加载"});var r="/cart/checkout?cartId=".concat(this.cartId,"&addressId=").concat(this.checkedAddress.id,"&couponId=").concat(this.couponId,"&grouponRulesId=").concat(this.grouponRulesId);n.default.httpget(r).then(function(n){var r=n.data;0==r.errno&&(o.checkedGoodsList=r.data.checkedGoodsList,o.goods=r.data,o.couponId=o.goods.couponId,o.checkedAddress=r.data.checkedAddress,console.log(a(o.checkedAddress.name," at pages/order/createOrder.vue:188"))),e&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(o){t.showToast({title:res.data.errmsg,icon:"none"}),t.hideLoading(),e&&t.stopPullDownRefresh()})},compondata:function(){var t=this,e="/coupon/selectlist?cartId="+this.cartId+"&grouponRulesId=0";n.default.httpget(e).then(function(e){0==e.data.errno&&(t.couponList=e.data.data.list)}).catch(function(t){})},toggleMask:function(t){this.maskState=!1,this.couponId=t,this.cartdata()},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){var e=this;if(0==this.checkedAddress.id)return t.showToast({title:"请选择收货地址",icon:"none"}),!1;var o="/order/submit";t.showLoading({title:"正在加载"}),n.default.httppost(o,{addressId:this.checkedAddress.id,cartId:this.cartId,couponId:this.couponId,grouponLinkId:0,grouponRulesId:this.grouponRulesId,message:this.message}).then(function(o){if(0==o.data.errno){var a=o.data.data.orderId;t.setStorageSync("couponId",0),e.paysub(a)}else t.showToast({title:o.data.errmsg,icon:"none"}),setTimeout(function(){t.redirectTo({url:"/pages/order/order?state=0"})},500);t.hideLoading()}).catch(function(t){}),t.hideLoading()},paysub:function(e){t.showLoading({title:"正在加载"});var o="/order/prepay";o="/order/prepayDouyin",n.default.httppost(o,{orderId:e,code:t.getStorageSync("code")}).then(function(e){if(0===e.data.errno){var o=e.data.data;t.requestPayment({timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.packageValue,signType:o.signType,paySign:o.paySign,success:function(e){console.log(a(e.errno," at pages/order/createOrder.vue:268")),0==e.errno?(t.showToast({title:"支付成功！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=2"})):(t.showToast({title:"支付失败！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=1"})),t.hideLoading()},fail:function(e){t.showToast({title:"支付失败！",icon:"none"}),t.redirectTo({url:"/pages/order/order?state=1"}),t.hideLoading()},complete:function(e){t.hideLoading()}})}else t.hideLoading(),t.redirectTo({url:"/pages/order/order?state=1"}),t.showToast({title:e.data.errmsg,icon:"none"})})},stopPrevent:function(){}}};e.default=d}).call(this,o("6e42")["default"],o("0de9")["default"])},"30ab":function(t,e,o){"use strict";var a=o("f5bf"),n=o.n(a);n.a},"58c8":function(t,e,o){"use strict";o.r(e);var a=o("1299"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"84f8":function(t,e,o){"use strict";(function(t){o("d82e"),o("921b");a(o("66fd"));var e=a(o("f943"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},ba7a:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},f5bf:function(t,e,o){},f943:function(t,e,o){"use strict";o.r(e);var a=o("ba7a"),n=o("58c8");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("30ab");var d=o("2877"),s=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports}},[["84f8","common/runtime","common/vendor"]]]);