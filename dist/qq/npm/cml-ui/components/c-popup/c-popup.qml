<view qq:if="{{show}}" class="c-popup  cml-base cml-view" style="{{containerStyle}}">
  <view class="{{maskClass}}  cml-base cml-view" bindtap="_cmlEventProxy" data-eventtap="{{['closeevent']}}"></view>
  
  <view class="c-popup-content  cml-base cml-view" style="{{contentStyle}}" catchtap="_cmlEventProxy" data-eventtap="{{['contentTap']}}">
    <slot class=" cml-base cml-slot"></slot>
  </view>
</view>