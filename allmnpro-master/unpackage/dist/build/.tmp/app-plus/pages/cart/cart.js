(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"04b7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"26a6":function(t,e,n){"use strict";n.r(e);var a=n("04b7"),o=n("707c");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("b318");var i=n("2877"),c=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"707c":function(t,e,n){"use strict";n.r(e);var a=n("a527"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"8bc4":function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");a(n("66fd"));var e=a(n("26a6"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a527:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(n("a34a")),o=n("2f62"),r=c(n("454f")),i=c(n("8e4a"));function c(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,o,r,i){try{var c=t[r](i),u=c.value}catch(d){return void n(d)}c.done?e(u):Promise.resolve(u).then(a,o)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(a,o){var r=t.apply(e,n);function i(t){u(r,a,o,i,c,"next",t)}function c(t){u(r,a,o,i,c,"throw",t)}i(void 0)})}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){l(t,e,n[e])})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=function(){return n.e("components/uni-number-box").then(n.bind(null,"fa35"))},f={components:{uniNumberBox:h},data:function(){return{total:0,allChecked:!0,empty:!1,cartList:[],haslogin:!1,cartTotal:{},goodsList:[],agentId:7813}},onLoad:function(){this.loadData(),this.loadtopData()},onPullDownRefresh:function(){this.loadData(!0),this.loadtopData()},computed:s({},(0,o.mapState)(["hasLogin"])),methods:s({},(0,o.mapMutations)(["login"]),{onShareAppMessage:function(t){i.default.sharebtn(t)},navToDetailPage:function(e){t.navigateTo({url:"/pages/product/product?id=".concat(e)})},getUserInfo:function(){},gologin:function(e,n){var a=this,o="/auth/login_by_weixin";r.default.httppost(o,e).then(function(e){0==e.data.errno&&(a.haslogin=!0,t.setStorageSync("token",e.data.data.token),t.setStorageSync("haslogin",!0),a.loadData()),t.hideLoading()}).catch(function(e){t.showToast({title:res.data.errmsg,icon:"none"}),t.hideLoading()})},loadData:function(){var e=d(a.default.mark(function e(n){var o,i=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),o="/cart/index",r.default.httpget(o).then(function(e){var a=e.data;0==a.errno?(i.cartList=a.data.cartList,i.cartTotal=a.data.cartTotal,i.cartList.forEach(function(t){t.checked||(i.allChecked=!1)})):t.showToast({title:a.errmsg,icon:"none"}),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),loadtopData:function(){var e=d(a.default.mark(function e(n){var o,i=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t.showLoading({title:"正在加载"}),o="/home/index",r.default.httpget(o).then(function(e){var a=e.data,o=a.data;0==a.errno&&(i.goodsList=o.hotGoodsList,t.setStorageSync("goodsList",i.goodsList)),n&&t.stopPullDownRefresh(),t.hideLoading()}).catch(function(e){t.hideLoading(),n&&t.stopPullDownRefresh()});case 3:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onImageLoad:function(t,e){this.$set(this[t][e],"loaded","loaded")},onImageError:function(t,e){this[t][e].image="/static/errorImage.jpg"},navToLogin:function(){t.navigateTo({url:"/pages/public/login"})},check:function(e,n,a){var o=this,i=[],c={};if("item"===e)this.cartList[n].checked=!this.cartList[n].checked,c={isChecked:a.checked?1:0,productIds:[a.productId]};else{var u=!this.allChecked,d=this.cartList;d.forEach(function(t){t.checked=u,i.push(t.productId)}),this.allChecked=u,c.productIds=i,c={isChecked:this.allChecked?1:0,productIds:i}}this.calcTotal();var s="/cart/checked";r.default.httppost(s,c).then(function(e){var n=e.data;0==n.errno&&o.loadData(),t.hideLoading()}).catch(function(e){t.hideLoading()})},numberChange:function(e,n){var a=this;t.showLoading({title:"正在加载"});var o="/cart/update";r.default.httppost(o,{goodsId:e.goodsId,id:e.id,number:e.number,productId:e.productId}).then(function(e){var n=e.data;0==n.errno&&a.loadData(),t.hideLoading()}).catch(function(e){t.hideLoading()})},deleteCartItem:function(t){this.deletepro([t])},deletepro:function(e){var n=this;t.showLoading({title:"正在加载"});var a="/cart/delete";r.default.httppost(a,{productIds:e}).then(function(e){var a=e.data;0==a.errno&&(n.cartList=a.data.cartList),t.hideLoading()}).catch(function(e){t.hideLoading()})},clearCart:function(){var e=this,n=[];t.showModal({content:"清空购物车？",success:function(t){t.confirm&&(e.cartList.forEach(function(t){n.push(t.id)}),e.deletepro(n))}})},calcTotal:function(){var t=this.cartList;if(0!==t.length){var e=0,n=!0;t.forEach(function(t){!0===t.checked?e+=t.price*t.number:!0===n&&(n=!1)}),this.allChecked=n,this.total=Number(e.toFixed(2))}else this.empty=!0},cutNumber:function(t){t.number=t.number-1>1?t.number-1:1,this.numberChange(t)},addNumber:function(t){t.number=t.number+1,this.numberChange(t)},createOrder:function(){if(this.cartTotal.checkedGoodsAmount<=0)return!1;t.setStorageSync("cartId",0),t.navigateTo({url:"/pages/order/createOrder"})}})};e.default=f}).call(this,n("6e42")["default"])},b318:function(t,e,n){"use strict";var a=n("dea2"),o=n.n(a);o.a},dea2:function(t,e,n){}},[["8bc4","common/runtime","common/vendor"]]]);