<template>
  <div class="view-home">
    <div v-if="topStories" class="swiper-container top-banner" id="top-banner">
        <div class="swiper-wrapper">
            <div
              v-for="item in topStories"
              class="swiper-slide"
              @click="toDetail(item.id)">
              <img :src="item.image" alt="img" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

    <md-list class="md-double-line" :class="'home-list'">


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

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import * as api from 'src/common/api'
  import moment from 'moment'

  import 'swiper/dist/css/swiper.css'

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
    // created
    created () {
      // 获取热文信息
      api.getLatestStory().then(res => {
        let data = res.data
        this.stories = data.stories
        this.topStories = data.top_stories

        setTimeout(() => {
          this.mySwiper = new Swiper('#top-banner', {
            direaction: 'vertical',
            pagination: '.swiper-pagination'
          })
        }, 200)
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
        console.log(detailId)
        // window.location.href = '#/uiLib'
      }
    }
  }
</script>

<style lang="sass">
.view-home
  padding-top: 64px;

.top-banner
  height: 220px;
  width: 100%;

  img
    margin-top: -50px;

  .swiper-pagination-bullet
    width: 6px;
    height: 6px;
    margin: 0 2px !important;

    &.swiper-pagination-bullet-active
      background-color: #2196f3;

.home-list
  padding-top: 0 !important;
  background-color: rgba(200, 200, 200, 0.1) !important;

  .home-list-item
    width: 92%;
    margin-left: 4%;
    margin-bottom: 12px;
    background-color: #FFFFFF;



</style>
