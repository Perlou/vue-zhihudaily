<template>
  <div class="app-viewport" id="app">

    <!-- tool-bar component -->
    <v-tool-bar
      @toggle="toggleNav"
    ></v-tool-bar>
    <!-- end tool-bar component -->

    <router-view></router-view>
  </div>
</template>

<script>
  import toolBar from 'src/components/toolBar'

  export default {
    name: 'app',
    data () {
      return {
        toggleBtn: false
      }
    },
    components: {
      'v-tool-bar': toolBar
    },
    methods: {
      toggleNav () {
        this.toggleBtn = !this.toggleBtn
        console.log(this.toggleBtn)
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
