<view class="container"><view class="brand-info"><view class="name"><image class="img" src="{{brand.picUrl}}" background-size="cover"></image><view class="info-box"><view class="info"><text class="txt">{{brand.name}}</text><text class="line"></text></view></view></view><view class="desc">{{''+brand.desc+''}}</view></view><view class="cate-item"><block wx:if="{{goodsList.length>0}}"><view class="b"><block wx:for="{{goodsList}}" wx:for-item="iitem" wx:for-index="index" wx:key="index"><view><navigator class="item item-b" url="{{'/pages/product/product?id='+iitem.id}}"><image class="img" src="{{iitem.picUrl}}" background-size="cover"></image><text class="name">{{iitem.name}}</text><text class="price">{{"￥"+iitem.retailPrice}}</text></navigator></view></block></view></block><block wx:else><view class="ectouch-notcont" style="padding-top:100rpx;"><view class="img"><image mode="aspectFit" src="/static/category/no_content.png"></image></view><text class="cont">亲,暂无相关品牌商内容</text></view></block></view></view>