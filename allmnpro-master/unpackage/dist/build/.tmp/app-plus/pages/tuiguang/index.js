(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuiguang/index"],{1477:function(t,e,n){},"2b04":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=n("2f62"),c=r(n("454f"));r(n("8e4a"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e,n,i,o,a,c){try{var r=t[a](c),s=r.value}catch(u){return void n(u)}r.done?e(s):Promise.resolve(s).then(i,o)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function c(t){d(a,i,o,c,r,"next",t)}function r(t){d(a,i,o,c,r,"throw",t)}c(void 0)})}}var h=function(){return n.e("components/auth").then(n.bind(null,"9cb0"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("pages/product/share")]).then(n.bind(null,"d467"))},p={components:{share:f,auth:h},data:function(){return{hasphone:!0,specClass:"none",specSelected:[],tmpSpecText:"请选择",checkedSpecPrice:0,haslogin:!1,id:"",goods:{sortOrder:0,counterPrice:0,retailPrice:0},number:1,topicList:[],productList:[{number:0}],goodsnum:0,responsdata:{attribute:[]},brand:{},comment:{data:[]},sharedata:{},imgList:[],descontent:"",checkedGroupon_id:"",groupon:[{checked:!1}],specificationList:[]}},onLoad:function(){var t=l(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.loadData(e);case 1:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onPullDownRefresh:function(){this.productdata(!0)},computed:s({},(0,a.mapState)(["hasLogin"])),methods:s({},(0,a.mapMutations)(["login"]),{gobrand:function(){t.navigateTo({url:"/pages/brandDetail/brandDetail?id="+this.brand.id})},loadData:function(e){t.showLoading({title:"正在加载"}),""==t.getStorageSync("hasphone")&&(this.hasphone=!1),this.id=e?e.id:this.id,this.productdata()},productdata:function(e){var n=this,i="/goods/detail?id="+this.id;c.default.httpget(i).then(function(i){var o=i.data;if(t.hideLoading(),0==o.errno){n.responsdata=o.data,n.brand=n.responsdata.brand,n.goods=n.responsdata.info,n.productList=n.responsdata.productList,n.comment=n.responsdata.comment,n.specificationList=n.responsdata.specificationList,n.groupon=n.responsdata.groupon;var a=n.goods.detail,c=new RegExp("<img","gi");a=a.replace(c,'<img style="width: 100%;"'),n.descontent=a,n.sharedata={title:n.goods.name,id:n.id}}e&&t.stopPullDownRefresh()}).catch(function(n){t.hideLoading(),e&&t.stopPullDownRefresh()});var o="/goods/related?id="+this.id;c.default.httpget(o).then(function(t){var e=t.data;0==e.errno&&(n.topicList=e.data.list)}).catch(function(t){});var a="/cart/goodscount";c.default.httpget(a).then(function(t){var e=t.data;0==e.errno&&(n.goodsnum=e.data)}).catch(function(t){})},clickGroupon:function(t){t.goodsName;for(var e=t.id,n=this.groupon,i=0;i<n.length;i++)n[i].id==e?n[i].checked?n[i].checked=!1:(n[i].checked=!0,this.checkedGroupon_id=n[i].id):n[i].checked=!1;this.groupon=n},toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},cutNumber:function(){this.number=this.number-1>1?this.number-1:1},addNumber:function(){this.number=this.number+1},addToCart:function(e){var n=this;if("hide"===this.specClass)this.specClass="show";else{if(!this.isCheckedAllSpec())return t.showToast({title:"请选择完整规格",icon:"none"}),!1;var i=this.getCheckedProductItem(this.getCheckedSpecKey());if(!i||i.length<=0)return t.showToast({title:"没有库存",icon:"none"}),!1;var o=i[0];if(o.number<=0)return t.showToast({title:"没有库存",icon:"none"}),!1;t.showLoading({title:"正在加载"});var a="/cart/add";e&&(a="/cart/fastadd"),c.default.httppost(a,{goodsId:n.goods.id,number:n.number,productId:o.id}).then(function(i){var o=i.data;0==o.errno?(t.setStorageSync("grouponRulesId",n.checkedGroupon_id),e?n.buy(o.data):t.showToast({title:"添加成功"}),n.specClass,n.goodsnum=o.data,n.toggleSpec()):t.showToast({title:o.errmsg,icon:"none"}),t.hideLoading()})}},clickSkuValue:function(t){for(var e=t.specification,n=t.id,i=this.specificationList,o=0;o<i.length;o++)if(i[o].name===e)for(var a=0;a<i[o].valueList.length;a++)i[o].valueList[a].id==n?i[o].valueList[a].checked?i[o].valueList[a].checked=!1:i[o].valueList[a].checked=!0:i[o].valueList[a].checked=!1;this.specificationList=i,this.changeSpecInfo()},changeSpecInfo:function(){var t=this.getCheckedSpecValue(),e=t.filter(function(t){return 0!=t.valueId}).map(function(t){return t.valueText});if(e.length>0?this.tmpSpecText=e.join("　"):this.tmpSpecText="请选择规格数量",this.isCheckedAllSpec()){this.checkedSpecText=this.tmpSpecText;var n=this.getCheckedProductItem(this.getCheckedSpecKey());if(!n||n.length<=0)return this.soldout=!0,void console.error(i("规格所对应货品不存在"," at pages/tuiguang/index.vue:448"));var o=n[0];o.number>0?(this.checkedSpecPrice=o.price,this.soldout=!1):(this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!0)}else this.checkedSpecText="规格数量选择",this.checkedSpecPrice=this.goods.retailPrice,this.soldout=!1},getCheckedProductItem:function(t){return this.productList.filter(function(e){return e.specifications.toString()==t.toString()})},isCheckedAllSpec:function(){return!this.getCheckedSpecValue().some(function(t){if(0==t.valueId)return!0})},getCheckedSpecKey:function(){var t=this.getCheckedSpecValue().map(function(t){return t.valueText});return t},getCheckedSpecValue:function(){for(var t=[],e=this.specificationList,n=0;n<e.length;n++){for(var i={name:e[n].name,valueId:0,valueText:""},o=0;o<e[n].valueList.length;o++)e[n].valueList[o].checked&&(i.valueId=e[n].valueList[o].id,i.valueText=e[n].valueList[o].value);t.push(i)}return t},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){var e=this;t.showLoading({title:"请稍后"});var n="/collect/addordelete";c.default.httppost(n,{type:0,valueId:this.id}).then(function(n){var i=n.data;0==i.errno?(e.responsdata.userHasCollect=!e.responsdata.userHasCollect,e.responsdata.userHasCollect?t.showToast({title:"收藏成功",icon:"none"}):t.showToast({title:"取消收藏",icon:"none"})):501==i.errno&&t.navigateTo({url:"../public/login"}),t.hideLoading()}).catch(function(e){t.hideLoading()})},buy:function(e){t.setStorageSync("cartId",e),t.navigateTo({url:"/pages/order/createOrder"})},navto:function(){t.navigateTo({url:"/pages/commentlist/index?id=".concat(this.id)})},navtocart:function(e){t.switchTab({url:"/pages/cart/cart",success:function(t){var e=getCurrentPages().pop();e.onLoad()}})},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/product?id=".concat(n)})}})};e.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},"35f9":function(t,e,n){"use strict";n.r(e);var i=n("463f"),o=n("f3a8");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("f1f9");var c=n("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"463f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},ccdd:function(t,e,n){"use strict";(function(t){n("d82e"),n("921b");i(n("66fd"));var e=i(n("35f9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f1f9:function(t,e,n){"use strict";var i=n("1477"),o=n.n(i);o.a},f3a8:function(t,e,n){"use strict";n.r(e);var i=n("2b04"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}},[["ccdd","common/runtime","common/vendor"]]]);