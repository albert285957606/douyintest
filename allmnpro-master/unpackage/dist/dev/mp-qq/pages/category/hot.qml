<view class="container"><view class="brand-info"><view class="name"><image class="img" src="{{bannerInfo.imgUrl}}" background-size="cover"></image><view class="info-box"><view class="info"><text class="txt">{{bannerInfo.name}}</text><text class="line"></text></view></view></view></view><view class="sort"><view class="sort-box"><view class="item active"><text class="txt">综合</text></view></view></view><view class="cate-item"><view class="b"><block wx:for="{{goodsList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><block><navigator class="{{['item ',(index%2==0)?'item-b':'']}}" url="{{'../product/product?id='+item.id}}"><image class="img" src="{{item.picUrl}}" background-size="cover"></image><text class="name">{{item.name}}</text><text class="price">{{"￥"+item.retailPrice}}</text></navigator></block></block></view></view></view>