<view class="container  cml-base cml-view">
  <image src="../../assets/images/banner.jpg" style="width:100%;hight:300px" class=" cml-base cml-image"></image>
  <view class="videoContainer  cml-base cml-view">
    <view class="prizeBox firstPrize  cml-base cml-view">
      <p class="prizeTitle firstPrizeTitle  cml-base cml-p">一等奖</p>
      <view qq:for="{{firstPrize}}" qq:for-index="videoIndex" qq:for-item="videoItem" class="viewBox  cml-base cml-view">
        <h5player url="{{videoItem['url']}}" v-bind:componentid="componentID(videoIndex) + '_first'" class=" cml-view cml-h5player"></h5player>
        <p class="title  cml-base cml-p">{{videoItem['desc']}}<span class="desc  cml-base cml-span">{{videoItem['department']}}</span></p>
      </view>
    </view>
    <view class="prizeBox secondPrize  cml-base cml-view">
      <p class="prizeTitle secondPrizeTitle  cml-base cml-p">二等奖</p>
      <view qq:for="{{secondPrize}}" qq:for-index="videoIndex" qq:for-item="videoItem" class="viewBox  cml-base cml-view">
        <h5player url="{{videoItem['url']}}" v-bind:componentid="componentID(videoIndex) + '_second'" class=" cml-view cml-h5player"></h5player>
        <p class="title  cml-base cml-p">{{videoItem['desc']}}<span class="desc  cml-base cml-span">{{videoItem['department']}}</span></p>
      </view>
    </view>
    <view class="prizeBox thirdPrize  cml-base cml-view">
      <p class="prizeTitle thirdPrizeTitle  cml-base cml-p">三等奖</p>
      <view qq:for="{{thirdPrize}}" qq:for-index="videoIndex" qq:for-item="videoItem" class="viewBox  cml-base cml-view">
        <h5player url="{{videoItem['url']}}" poster="1" v-bind:componentid="componentID(videoIndex) + '_third'" class=" cml-view cml-h5player"></h5player>
        <p class="title  cml-base cml-p">{{videoItem['desc']}}<span class="desc  cml-base cml-span">{{videoItem['department']}}</span></p>
      </view>
    </view>
    <view class="prizeBox forthPrize  cml-base cml-view">
      <p class="prizeTitle forthPrizeTitle  cml-base cml-p">优秀奖</p>
      <view qq:for="{{forthPrize}}" qq:for-index="videoIndex" qq:for-item="videoItem" class="viewBox  cml-base cml-view">
        <h5player url="{{videoItem['url']}}" v-bind:componentid="componentID(videoIndex) + '_forth'" class=" cml-view cml-h5player"></h5player>
        <p class="title  cml-base cml-p">{{videoItem['desc']}}<span class="desc  cml-base cml-span">{{videoItem['department']}}</span></p>
      </view>
    </view>
  </view>
</view>