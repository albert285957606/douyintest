<view class="container"><view class="post-comment"><view class="goods"><view class="img"><image src="{{orderGoods.picUrl}}"></image></view><view class="info"><view class="t"><text class="name">{{orderGoods.goodsName+" x"+orderGoods.number}}</text></view><view class="attr">{{orderGoods.goodsSpecificationValues}}</view></view></view><view class="input-box"><textarea class="content" focus="true" maxlength="140" placeholder="留言经过筛选后，对所有人可见" data-event-opts="{{[['input',[['bindInputValue',['$event']]]]]}}" bindinput="__e"></textarea><text class="count">{{140-content.length}}</text></view><view class="weui-uploader"><view class="weui-uploader__hd"><view class="weui-uploader__title">图片上传</view><view class="weui-uploader__info">{{picUrls.length+"/"+files.length}}</view></view><view class="weui-uploader__bd"><view class="weui-uploader__files" id="uploaderFiles"><block wx:for="{{files}}" wx:for-item="item" wx:for-index="index" wx:key="index"><block><view data-event-opts="{{[['tap',[['previewImage',['$event']]]]]}}" class="weui-uploader__file" bindtap="__e"><image class="weui-uploader__img" src="{{item}}" mode="aspectFill"></image></view></block></block><view class="weui-uploader__input-box"><view data-event-opts="{{[['tap',[['chooseImage',['$event']]]]]}}" class="weui-uploader__input" bindtap="__e"></view></view></view></view></view><view class="btns"><view data-event-opts="{{[['tap',[['onClose',['$event']]]]]}}" class="close" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['onPost',['$event']]]]]}}" class="post" bindtap="__e">发表</view></view></view><auth class="vue-ref" vue-id="1" data-ref="open" bind:__l="__l"></auth></view>