<view class="content"><view class="mp-search-box"><input class="ser-input" type="text" placeholder="输入商品关键字搜索" data-event-opts="{{[['input',[['__set_model',['','searchtxt','$event',[]]],['searchinput',['$event']]]]]}}" value="{{searchtxt}}" bindinput="__e"/></view><view class="navbar"><view data-event-opts="{{[['tap',[['tabClick',[0]]]]]}}" class="{{['nav-item',(filterIndex===0)?'current':'']}}" bindtap="__e">综合排序</view><view data-event-opts="{{[['tap',[['tabClick',[2]]]]]}}" class="{{['nav-item',(filterIndex===2)?'current':'']}}" bindtap="__e"><text>价格</text><view class="p-box"><text class="{{['yticon icon-shang',(priceOrder==='asc'&&filterIndex===2)?'active':'']}}"></text><text class="{{['yticon icon-shang xia',(priceOrder==='desc'&&filterIndex===2)?'active':'']}}"></text></view></view></view><block wx:if="{{goodsList.length>0}}"><view class="goods-list"><block wx:for="{{goodsList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['navToDetailPage',['$0'],[[['goodsList','',index]]]]]]]}}" class="goods-item" bindtap="__e"><view class="image-wrapper"><image src="{{item.picUrl}}" mode="aspectFill"></image></view><text class="title clamp">{{item.name}}</text><view class="price-box"><text class="price">{{item.retailPrice}}</text><text>{{"原价 "+item.counterPrice}}</text></view></view></block></view></block><block wx:else><view class="ectouch-notcont" style="margin-top:130rpx;"><view class="img"><image mode="aspectFit" src="/static/category/no_content.png"></image></view><text class="cont">亲,没有相关产品内容</text></view></block></view>