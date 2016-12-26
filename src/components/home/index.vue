<template>
  <md-list class="md-double-line">
    <div>111</div>

    <md-subheader>今日热文</md-subheader>

    <!-- stories list -->
    <md-list-item
      v-for="item in stories"
      :id="item.id"
      @click.stop="toDetail(item.id)">
      <div class="md-list-text-container">
        {{item.title}}
      </div>
      <md-avatar>
        <img :src="item.images" alt="">
        <!-- <img src="../../assets/2.jpg" alt=""> -->
      </md-avatar>
    </md-list-item>
    <!-- end stories list -->
<!--     <md-list-item>
      <md-avatar class="md-avatar-icon">
        <md-icon>folder</md-icon>
      </md-avatar>

      <div class="md-list-text-container">
        <span>Photos</span>
        <p>Jan 9, 2014</p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon>info</md-icon>
      </md-button>
    </md-list-item> -->

  </md-list>
</template>

<script>
  import swiper from 'swiper'

  console.log(swiper)
  export default {
    name: 'home',
    data () {
      return {
        stories: [],
        topStories: []
      }
    },
    created () {
      // 热文信息
      this.$http.get('/api/topStory').then(res => {
        let data = res.body.data
        console.log(data)
        this.stories = data.stories
        this.topStories = data.top_stories
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      toDetail (detailId) {
        window.location.href = '#/uiLib'
      }
    }
  }
</script>

<style lang="sass">


</style>
