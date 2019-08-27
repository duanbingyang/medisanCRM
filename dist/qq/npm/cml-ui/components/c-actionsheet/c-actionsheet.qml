<c-popup show="{{show}}" bindclose="_cmlEventProxy" data-eventclose="{{['cancelclick']}}" position="bottom" class=" cml-view cml-c-popup">
  <view class="action-wrap  cml-base cml-view">
    <view class="action-header  cml-base cml-view" qq:if="{{title || pickerStyle}}">
      <text class="action-header-text  cml-base cml-text" style="{{actionHeaderStyle}}">{{title}}</text>
      <view class="cancel-wrap  cml-base cml-view" qq:if="{{pickerStyle}}" bindtap="_cmlEventProxy" data-eventtap="{{['cancelclick']}}">
        <text class="cancel-text  cml-base cml-text" style="{{actionCancelStyle}}">{{cancelTxt}}</text>
      </view>
    </view>
    <view class="action-content  cml-base cml-view" style="{{actionContentStyle}}">
      <cml-buildin-list class="action-list  cml-base cml-list" height="{{listHeight}}">
        <view qq:for="{{list}}" qq:for-index="i" qq:for-item="item" data-idx="{{i}}" data-value="{{item}}" bindtap="_cmlEventProxy" data-eventtap="{{['itemClick']}}" class="action-list-item  cml-base cml-cell">
          <text qq:if="{{i === active}}" style="{{activeTextStyle}}" class="text-active  cml-base cml-text">{{item}}</text>
          <text qq:else style="{{textStyle}}" class="text  cml-base cml-text">{{item}}</text>
        </view>     
      </cml-buildin-list>
    </view>
    <block qq:if="{{!pickerStyle}}" class=" cml-base cml-block">
      <view class="action-space  cml-base cml-view"></view>
      <text style="{{actionCancelStyle}}" bindtap="_cmlEventProxy" data-eventtap="{{['cancelclick']}}" class="cancel-btn  cml-base cml-text">{{cancelTxt}}</text>
    </block>
  </view>
</c-popup>