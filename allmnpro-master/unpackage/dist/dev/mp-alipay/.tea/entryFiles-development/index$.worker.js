if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../pages/index/index');
require('../../pages/product/product');
require('../../pages/product/searchlist');
require('../../pages/set/set');
require('../../pages/webview/index');
require('../../pages/commentlist/index');
require('../../pages/user/help');
require('../../pages/user/feedback');
require('../../pages/order/orderDetail');
require('../../pages/category/hot');
require('../../pages/brandDetail/topiclist');
require('../../pages/brandDetail/comment');
require('../../pages/brandDetail/topicDetail');
require('../../pages/brandDetail/groupbuy');
require('../../pages/brandDetail/brand');
require('../../pages/brandDetail/brandDetail');
require('../../pages/order/comment');
require('../../pages/userinfo/userinfo');
require('../../pages/cart/cart');
require('../../pages/public/login');
require('../../pages/public/reg');
require('../../pages/user/user');
require('../../pages/detail/detail');
require('../../pages/order/order');
require('../../pages/money/money');
require('../../pages/mystore/mystore');
require('../../pages/mycoloect/mycoloect');
require('../../pages/tuiguang/index');
require('../../pages/mycoupon/couponlist');
require('../../pages/mycoupon/mycoupon');
require('../../pages/order/createOrder');
require('../../pages/address/address');
require('../../pages/address/addressManage');
require('../../pages/money/pay');
require('../../pages/money/paySuccess');
require('../../pages/notice/notice');
require('../../pages/category/category');
require('../../pages/product/list');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}