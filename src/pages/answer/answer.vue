<template>
  <view class="answer_container">
    <view
      class="question"
      @tap="navigateTo('/pages/question/question')"
    >
      <text class="question-title">
        选择 Kindle 而不是纸质书的原因是什么？
      </text>
    </view>
    <view class="answerer-wrp">
      <view class="bg-half" />
      <view class="answerer flex-wrp">
        <view class="avatar flex-item">
          <image src="../../asset/images/icon1.jpeg" />
        </view>
        <view class="answerer-info flex-item">
          <text class="answerer-name">
            Rebecca
          </text>
          <text class="answerer-des">
            WEB前端*不靠谱天气预报员*想做代码小仙女
          </text>
        </view>
        <view class="follow flex-item">
          <text>十 关注</text>
        </view>
      </view>
    </view>
    <view class="answer-content">
      <text>
        难道不明白纸质书更贵啊！！！
        若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
        另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
        而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
        碎片时间阅读总不能天天背着一本书吧，那么占地方。
        看到描述最后一段，感觉有骗答案的嫌疑
      </text>
    </view>
    <view class="answer-footer flex-wrp">
      <view class="good flex-item">
        <view class="good-bad">
          <image src="../../asset/images/good-bad.png" />
        </view>
        <view class="good-num">
          2.1k
        </view>
      </view>
      <view class="operation-wrp flex-item">
        <view class="operation flex-wrp flex-tab">
          <view class="operation-btn flex-item">
            <image src="../../asset/images/flag.png" />
            <text>没有帮助</text>
          </view>
          <view class="operation-btn flex-item">
            <image src="../../asset/images/heart2.png" />
            <text>感谢</text>
          </view>
          <view class="operation-btn flex-item">
            <image src="../../asset/images/star2.png" />
            <text>收藏</text>
          </view>
          <view class="operation-btn flex-item">
            <image src="../../asset/images/comment.png" />
            <text>302</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  methods: {
    navigateTo(url) {
        Taro.navigateTo({ url: url })
    },

  }
}
</script>

<style lang="scss" scoped>
.answer_container {
  padding: 0;
  min-height: 500px;
  font-size: 14px;
  background: #F0F4F3;
  color: #000;
}
.question {
  position: relative;
  width: 650px;
  padding: 40px 50px 30px;
  background: #298DE5;
  color: #fff;
  font-size: 38px;
  line-height: 48px;
}
.answerer-wrp{
  position: relative;
  width: 750px;
  height: 150px;
  background: #fff;
  .bg-half{
    position: absolute;
    top: 0;
    width: 750px;
    height: 75px;
    background: #298DE5;
  }
}
.answerer-wrp
.answerer {
  position: relative;
  margin: 0 auto;
  width: 630px;
  height: 90px;
  padding: 30px;
  background: #fff;
  border: solid 1px #ebebeb;
  border-radius: 3px;
  box-shadow: 0 1px 2px #bebebe;
  .avatar {
    flex: 1;
    width: 90px;
    height: 90px;
    img,image {
      display: inline-block;
      width: 90px;
      height: 90px;
      border-radius: 90px;
    }
  }
  .answerer-info{
    flex: 5;
    text-align: left;
    padding: 10px 20px;
    line-height: 38px;
    text,span{
      display: block;
    }
    .answerer-name{
      font-size: 32px;
    }
    .answerer-des{
      font-size: 22px;
      color: #808080;
      line-height: 28px;
    }
    .answerer-des{
      font-size: 22px;
      color: #808080;
      line-height: 28px;
    }
  }
  .follow{
    flex: 2;
    padding: 15px 0;
    font-size: 22px;
    span,text{
      display: inline-block;
      padding: 15px 20px;
      color: #40bcd0;
      border: solid 2px #40bcd0;
      border-radius: 6px;
    }
  }
}

.answer-content{
  padding: 30px 40px;
  background: #ffffff;
  text,span{
    font-size: 32px;
    color: #454545;
    line-height: 44px;
  }
  image,img{
    width: 100%;
    margin: 20px 0;
  }
}
.answer-footer{
  position: fixed;
  bottom: 0;
  height: 70px;
  border-top: solid 1px #ebebeb;
  background: #ffffff;
  width: 670px;
  padding: 20px 40px;
  .good{
    flex: 1;
    height: 40px;
    border: solid 1px #d1d1d1;
    border-radius: 3px;
    padding: 10px 8px;
    margin: 10px 0;
    .good-bad{
      display: inline-block;
    }
    image, img{
      display: inline-block;
      width: 38px;
      height: 38px;
      vertical-align: middle;
    }
    .good-num{
      display: inline-block;
      padding: 10px 4px;
    }
  }
  .operation-wrp{
    flex: 5;
  }
  .operation{
    justify-content: space-between;
    padding: 0 0 0 60px;
    image, img {
      display: block;
      margin: 0 auto;
      width: 50px;
      height: 50px;
    }
  }
  .operation-btn{
    flex: 1;
    text-align: center;
    text,span{
      display: block;
      font-size: 14px;
      color: #bebebe;
    }
  }

}

</style>
