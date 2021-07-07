<template>
  <view>
    <view class="top-tab flex-wrp flex-tab">
      <view
        v-for="(item, index) in navTab"
        :key="index"
        :class="currentNavtab === index ? 'toptab flex-item active' : 'toptab flex-item'"
        @tap="switchTab(index)"
      >
        {{ item }}
      </view>
    </view>
    <scroll-view
      scroll-y
      class="container discovery withtab"
    >
      <view
        class="ctnt0"
        :hidden="currentNavtab==0 ? false : true"
      >
        <swiper
          class="activity"
          indicator-dots="true"
          autoplay
          interval="5000"
          duration="500"
        >
          <swiper-item
            v-for="item in imgUrls"
            :key="item"
          >
            <image
              :src="item"
              class="slide-image"
              width="355"
              height="375"
            />
          </swiper-item>
        </swiper>
        <feed
          v-for="(item, index) in feed"
          :key="index"
          :feed-source-img="item.feed_source_img"
          :feed-source-name="item.feed_source_name"
          :feed-source-txt="item.feed_source_txt"
          :question="item.question"
          :answer-ctnt="item.good_num"
          :good-num="item.comment_num"
          :comment-num="item.commentNum"
        />
      </view>
      <view
        v-if="currentNavtab === 1"
        class="txcenter"
      >
        <text>圆桌</text>
      </view>
      <view
        v-else-if="currentNavtab === 2"
        class="txcenter"
      >
        <text>热门</text>
      </view>
      <view
        v-else-if="currentNavtab === 3"
        class="txcenter"
      >
        <text>收藏</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
// import './discovery.scss'
import Feed from '../../components/feed/feed.vue'
import img1 from '../../asset/images/24213.jpg'
import img2 from '../../asset/images/24280.jpg'
import img3 from '../../asset/images/1444983318907-_DSC1826.jpg'
import img4 from '../../asset/images/icon1.jpeg'
import img5 from '../../asset/images/icon8.jpg'
import img6 from '../../asset/images/icon9.jpeg'


const PROD_ENV_MAP = {
  test: 'test',
  gray: 'gary'
}

const GET_CURRENT_ENV = (type) => PROD_ENV_MAP[type]
const FRUIT_LIST = ['apple', 'parnora']
export default {
  components: {
    feed: Feed
  },
  data () {
    return {
      imgUrls: [img1,img2,img3],
      currentNavtab: 0,
      navTab: ['推荐', '圆桌', '热门', '收藏'],
      feed:[
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }
      ],
    }
  },

  mounted() {
    this.env = GET_CURRENT_ENV('gray')
    this.fruitIndex = FRUIT_LIST.findIndex(item => item === 'apple')
    this.fruit = FRUIT_LIST.includes('apple')
    console.log(this.fruitIndex )
  },

  methods: {
    switchTab(index, e) {
      this.currentNavtab = index
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 1500px;
}
.top-tab{
  width: 750px;
  height: 100px;
  background: #298DE5;
  color: #8CCEFD;
  font-size: 28px;
  line-height: 100px;
  box-shadow: 0 2px 2px #bebebe;
  margin: 0 0 8px 0;
  z-index: 9999;

  .active {
    color: #ffffff;
    border-bottom: solid 2px #ffffff;
  }
}

.activity{
  width: 750px;
  height: 375px;
}
.activity image,.activity img{
  width: 750px;
  height: 400px;
}
.placehold{
  font-size: 28px;
  padding: 80px 0;
}

</style>
