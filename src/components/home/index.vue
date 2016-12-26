<template>
  <md-list class="md-double-line">
    <md-card>
      <md-card-media>
        <img src="../../assets/1.jpg" alt="Her">
      </md-card-media>
    </md-card>

    <md-subheader>今日热文</md-subheader>

    <!-- stories list -->

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
        this.stories = data.stories
        this.topStories = data.top_stories
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {

    }
  }
</script>

<style>

</style>
