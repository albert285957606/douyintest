(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fx/apply"],{"690c":function(t,e,n){"use strict";var a=n("8a76"),i=n.n(a);i.a},7886:function(t,e,n){"use strict";n.r(e);var a=n("ce21"),i=n("a808");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("690c");var r=n("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"8a76":function(t,e,n){},a808:function(t,e,n){"use strict";n.r(e);var a=n("c765"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},b116:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("7886"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c765:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("454f"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{inputid:1,allmoney:0,carouselList:[{url:"../../static/temp/fxbanner.jpg"},{url:"../../static/temp/fxbanner.jpg"},{url:"../../static/temp/fxbanner.jpg"}],moneyinput:"",username:"",userId:"",mobile:""}},onLoad:function(e){this.userId=e.id,t.showModal({title:"",content:"您还不是分销商，请先提交申请",success:function(e){e.confirm||t.navigateBack()}})},onPullDownRefresh:function(){this.init(!0)},onShareAppMessage:function(t){return{title:"",imageUrl:"/static/temp/banner3.jpg",path:"/pages/index/index"}},methods:{subdrawbtn:function(){if(""==this.username)return t.showToast({title:"请输入姓名",icon:"none"}),!1;if(""==this.mobile||!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(this.mobile))return t.showToast({title:"请输入正确的手机号吗",icon:"none"}),!1;var e=t.getStorageSync("userInfo"),n=t.getStorageSync("userId"),i={headImage:e.avatarUrl,nickName:e.nickName,name:this.username,mobile:this.mobile,level:0,retailUserId:n};a.default.httppostfx("/retailUser/add",i).then(function(e){var n=e.data;200==n.code?(t.showToast({title:"提交申请成功！",icon:"none"}),setTimeout(function(){t.navigateBack()},1e3)):t.showToast({title:n.errmsg,icon:"none"}),t.hideLoading()})}}};e.default=o}).call(this,n("6e42")["default"])},ce21:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["b116","common/runtime","common/vendor"]]]);