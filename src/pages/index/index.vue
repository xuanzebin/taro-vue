<template>
  <view>
    <view class="search flex-wrp">
      <view class="search-left flex-item">
        <view class="flex-wrp">
          <view
            class="flex1"
          >
            <image src="../../asset/images/search.png" />
          </view>
          <view
            class="flex6"
          >
            <input
              type="text"
              placeholder="搜索话题, 问题或人"
              placeholderClass="search-placeholder"
            >
          </view>
        </view>
      </view>
      <view class="search-right flex-item">
        <image
          src="../../asset/images/lighting.png"
          @tap="updateList"
        />
      </view>
    </view>
    <scroll-view
      class="container"
      scroll-y
      scroll-with-animation
      scroll-top="0"
      lower-threshold="10"
      upper-threshold="10"
      style="height: 300px"
      @scroll-to-upper="updateList"
      @scroll-to-lower="appendNextPageList"
    >
      <view
        v-if="loading"
        class="txcenter"
      >
        加载中
      </view>
      <feed
        v-for="item in list"
        v-else
        :key="item.item"
        :feed-source-img="item.feed_source_img"
        :feed-source-name="item.feed_source_name"
        :feed-source-txt="item.feed_source_txt"
        :question="item.question"
        :answer-ctnt="item.good_num"
        :good-num="item.comment_num"
        :comment-num="item.commentNum"
      />
    </scroll-view>
  </view>
</template>

<script>
import './index.scss'
import Feed from '../../components/feed/feed.vue'

export default {
  components: {
    Feed
  },
  data() {
    return {
      loading: true,
      list: []
    }
  },
  methods: {
    updateList() {
      if (this.loading) {
        return
      }
      this.loading = true
      Taro.showLoading({ title: '加载中' })
      Taro.request({
        url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      }).then(res => {
        this.loading = false
        Taro.hideLoading()
        if (res.data.success) {
          this.list = res.data.data
        }
      })
    },
    appendNextPageList() {
      if (this.state.loading) {
        return
      }
      this.loading = true
      Taro.showLoading({ title: '加载中' })
      Taro.request({
        url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
      }).then(res => {
        Taro.hideLoading()
        this.loading = false
        if (res.data.success) {
          this.list.push(...res.data.data)
        }
      })
    }
  }
}
</script>
