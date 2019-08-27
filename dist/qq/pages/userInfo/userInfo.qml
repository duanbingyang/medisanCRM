<view class="container  cml-base cml-view">
  <text class="titleStyle  cml-base cml-text">哈三联  为您服务</text>
  <view class="containerBox  cml-base cml-view">
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle  cml-base cml-row">
      <text class="textStyle  cml-base cml-text">姓名：</text>
      <cml-buildin-input placeholder="请输入你的用户名" focus="{{isfocus}}" bindinput="_cmlEventProxy" data-eventinput="{{['nameInput']}}" cStyle="padding-top: 22cpx;padding-bottom: 22cpx;font-size: 26cpx;" style="flex:3" return-key-type="next" class=" cml-base cml-input"></cml-buildin-input>
    </cml-buildin-row>
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle rowpick  cml-base cml-row">
      <text class="select-text textStyle  cml-base cml-text">性别：</text><text class=" cml-base cml-text">{{sex[sexIndex]}}</text>
      <text class="textHide  cml-base cml-text" bindtap="_cmlEventProxy" data-eventtap="{{['showClick']}}" id="sex"></text>
      <c-picker-panel qq:if="{{pickerShow.sex}}" show="{{pickerShow.sex}}" height="{{500}}" header-height="{{100}}" bindcancel="_cmlEventProxy" data-eventcancel="{{['cancel']}}" bindconfirm="_cmlEventProxy" data-eventconfirm="{{['confirm']}}" class=" cml-view cml-c-picker-panel">
              <c-picker-item text-align="center" height="{{400}}" list="{{sex}}" default-index="{{defaultSexIndex}}" bindselectchange="_cmlEventProxy" data-eventselectchange="{{['sexSelectchange']}}" class=" cml-base cml-c-picker-item">
              </c-picker-item>
      </c-picker-panel>
    </cml-buildin-row>
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle  cml-base cml-row">
      <text class="textStyle  cml-base cml-text">手机：</text>
      <cml-buildin-input placeholder="请输入你的手机号" cStyle="padding-top: 22cpx;padding-bottom:22cpx;font-size: 26cpx;" style="flex:3" type="number" maxlength="{{11}}" bindinput="_cmlEventProxy" data-eventinput="{{['mobileInput']}}" return-key-type="next" class=" cml-base cml-input">
      </cml-buildin-input>
    </cml-buildin-row>
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle  cml-base cml-row">
      <text class="textStyle  cml-base cml-text">验证码：</text>
      <cml-buildin-row style="flex:3" class=" cml-base cml-row">
        <cml-buildin-input placeholder="请输入验证码" cStyle="width: 300cpx;height: 40px;border-radius: 4px 0 0 4px;padding-top: 22cpx;padding-bottom: 22cpx;font-size: 26cpx;" maxlength="{{4}}" bindinput="_cmlEventProxy" data-eventinput="{{['codeInput']}}" return-key-type="next" class=" cml-base cml-input">
        </cml-buildin-input>
        <cml-buildin-button type="blue" text="{{sendCodeText}}" disabled="{{sendCodeDis}}" bindonclick="_cmlEventProxy" data-eventonclick="{{['sendCode']}}" size="auto" btn-style="height: 40px;border-radius: 0 4px 4px 0;padding: 22cpx 0;line-height: normal;width: 186cpx" text-style="font-size:26cpx;" class=" cml-base cml-button">  
        </cml-buildin-button>
      </cml-buildin-row>
    </cml-buildin-row>
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle rowpick  cml-base cml-row">
      <text class="select-text textStyle  cml-base cml-text">所在地：</text><text class=" cml-base cml-text">{{provins[provinsIndex]}}</text>
      <text class="textHide  cml-base cml-text" bindtap="_cmlEventProxy" data-eventtap="{{['showClick']}}" id="provins"></text>
      <c-picker-panel qq:if="{{pickerShow.provins}}" show="{{pickerShow.provins}}" height="{{500}}" header-height="{{100}}" bindcancel="_cmlEventProxy" data-eventcancel="{{['cancel']}}" bindconfirm="_cmlEventProxy" data-eventconfirm="{{['confirm']}}" class=" cml-view cml-c-picker-panel">
              <c-picker-item text-align="center" height="{{400}}" list="{{provins}}" default-index="{{defaultProvinsIndex}}" bindselectchange="_cmlEventProxy" data-eventselectchange="{{['provinsSelectchange']}}" class=" cml-base cml-c-picker-item">
              </c-picker-item>
      </c-picker-panel>
    </cml-buildin-row>
    <cml-buildin-row justify="start" margin="{{40}}" class="rowstyle  cml-base cml-row">
      <text class="textStyle  cml-base cml-text">工作单位：</text>
      <cml-buildin-input placeholder="请输入你的工作单位" focus="{{isfocus}}" bindinput="_cmlEventProxy" data-eventinput="{{['companyInput']}}" cStyle="padding-top: 22cpx;padding-bottom: 22cpx;font-size: 26cpx;" style="flex:3" return-key-type="next" class=" cml-base cml-input"></cml-buildin-input>
    </cml-buildin-row>
  </view>
  <cml-buildin-button style="margin-top:100rpx" type="blue" text="确定" disabled="{{submitDis}}" bindonclick="_cmlEventProxy" data-eventonclick="{{['submitForm']}}" class="submitBtn  cml-base cml-button">  
  </cml-buildin-button>
</view>