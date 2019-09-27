<view class="container  cml-base cml-view">
  <view class="titleFont  cml-base cml-view">哈三联通讯录9102</view>
  <view bottom-offset="{{bottomOffset}}" class="phoneList  cml-base cml-view">
    <block qq:for="{{list}}" qq:for-index="indexTop" qq:for-item="item" data-idx="{{indexTop}}" class=" cml-base cml-block">
      <view class="cell boxList  cml-base cml-view" qq:for="{{list[indexTop]}}" qq:for-index="organization" qq:for-item="organizationItem">
        <view class="boxItem  cml-base cml-view" data-idx="{{indexTop}}" bindtap="_cmlEventProxy" data-eventtap="{{['tapOrgFunction']}}">
            <text class="text {{toporgdomshowId == indexTop ? 'bottom' : 'right'}}  cml-base cml-text">{{organization}}</text>
        </view>
        <view class="panelChild  cml-base cml-view" style="{{toporgdomshowId == indexTop ? 'display:block' : 'display: none'}}">
          <block qq:for="{{list[indexTop][organization]}}" qq:for-index="index" qq:for-item="item" data-idx="{{index}}" class=" cml-base cml-block">
            <view class="cell  cml-base cml-view" qq:for="{{list[indexTop][organization][index]}}" qq:for-index="department" qq:for-item="departmentItem">
              <view class="panelItem  cml-base cml-view" data-idx="{{index}}" bindtap="_cmlEventProxy" data-eventtap="{{['tapFunction']}}">
                <text class="text {{topdomshowId == index ? 'bottom' : 'right'}}  cml-base cml-text">{{department}}</text>
              </view>
              <view class="panelChild  cml-base cml-view" animation="{{animationData[index]}}" bindtransitionend="_cmlInline" data-eventtransitionend="{{['_animationCb','animationData[index]','$event']}}" style="{{topdomshowId == index ? 'display:block' : 'display: none'}}">
                <block qq:for="{{list[indexTop][organization][index][department]}}" qq:for-index="i" qq:for-item="childItem" class=" cml-base cml-block">
                  <view class="cell  cml-base cml-view" qq:for="{{list[indexTop][organization][index][department][i]}}" qq:for-index="name" qq:for-item="nameItem">
                    <view class="panelChildItem  cml-base cml-view" data-idx="{{i}}" bindtap="_cmlEventProxy" data-eventtap="{{['tapChildFunction']}}">
                      <text class="text {{topchilddomshowId == i ? 'bottom' : 'right'}}  cml-base cml-text">{{name}}</text>
                    </view>
                    <view class="detail  cml-base cml-view" animation="{{animationChildData[i]}}" bindtransitionend="_cmlInline" data-eventtransitionend="{{['_animationCb','animationChildData[i]','$event']}}" style="{{topchilddomshowId == i ? 'display:block' : 'display: none'}}">
                      <view class="cell  cml-base cml-view" qq:for="{{list[indexTop][organization][index][department][i][name]}}" qq:for-index="msg" qq:for-item="msgItem" data-idx="{{msg}}">
                        <view class="detailItem  cml-base cml-view">
                          <text class="text  cml-base cml-text">{{msg}}: {{msgItem}}</text>
                        </view>
                      </view>
                    </view>
                  </view>
                </block>
              </view>
            </view>
          </block>
        </view>
      </view>
    </block>
  </view>
</view>