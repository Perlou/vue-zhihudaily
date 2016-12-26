<template>

  <md-list class="md-double-line" :class="'home-list'">
    <div class="swiper-container">

    </div>

    <md-subheader>今日热文</md-subheader>

    <!-- stories list -->
    <md-list-item
      v-for="item in stories"
      :id="item.id"
      :class="'home-list-item'"
      @click.stop="toDetail(item.id)">
      <div class="md-list-text-container">
        {{item.title}}
      </div>
      <md-avatar>
        <img :src="item.images" alt="">
      </md-avatar>
    </md-list-item>
    <!-- end stories list -->

    <md-subheader>过往消息({{ getYesterday }})</md-subheader>

    <!-- history stories list -->
    <md-list-item
      v-for="item in stories"
      :id="item.id"
      :class="'home-list-item'"
      @click.stop="toDetail(item.id)">
      <div class="md-list-text-container">
        {{item.title}}
      </div>
      <md-avatar>
        <img :src="item.images" alt="">
      </md-avatar>
    </md-list-item>
    <!-- end history stories lsit -->

  </md-list>
</template>

<script>
  // import swiper from 'swiper'
  import * as api from 'src/common/api'
  import moment from 'moment'

  import 'swiper/dist/css/swiper.css'

  // console.log(swiper)
  export default {
    name: 'home',
    data () {
      return {
        stories: [],
        topStories: [],
        historyStories: [],
        nowTime: moment().format('x')
      }
    },
    created () {
      // 获取热文信息
      api.getLatestStory().then(res => {
        let data = res.data
        this.stories = data.stories
        this.topStories = data.top_stories
      }).catch(err => {
        console.log(err)
      })

      // 获取过往消息
      api.getHistoryStory(moment().format('YYYYMMDD')).then(res => {
        let data = res.data
        this.historyStories = data.stories
      }).catch(err => {
        console.log(err)
      })
    },
    // 计算属性
    computed: {
      getYesterday () {
        return moment(Number(this.nowTime - 86400000)).format('YYYYMMDD')
      }
    },
    methods: {
      toDetail (detailId) {
        window.location.href = '#/uiLib'
      }
    }
  }
</script>

<style lang="sass">

.home-list
  background-color: rgba(200, 200, 200, 0.1) !important;

  .md-list-item
    width: 92%;
    margin-left: 4%;
    margin-bottom: 12px;
    background-color: #FFFFFF;

</style>
