<template>
  <div class="app-viewport" id="app">
    <v-side-nav></v-side-nav>
    <v-tool-bar></v-tool-bar>
    <router-view></router-view>

    <div class="bottom-bar">

      <md-bottom-bar md-fixed-bottom>

        <md-bottom-bar-item md-icon="history">
          <router-link to="/home">首页</router-link>
        </md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" md-active>
          <router-link to="/bar">ui库</router-link>
        </md-bottom-bar-item>
      </md-bottom-bar>
    </div>

  </div>
</template>

<script>
  import toolBar from 'src/components/toolBar'
  import sideNav from 'src/components/sideNav'

  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
      'v-tool-bar': toolBar,
      'v-side-nav': sideNav
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      }
    }
  }
</script>

<style lang="sass">
html,
body,
.app-viewport
  height: 100%;
  overflow: auto;

.app-viewport
  display: flex;
  flex-flow: column;

  .md-list
    overflow: auto;

  .bottom-bar
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;


</style>
