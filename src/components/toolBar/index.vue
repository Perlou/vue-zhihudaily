<template>

  <md-whiteframe md-elevation="3">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">知乎日报</h2>
      <span style="flex: 1"></span>

      <md-button class="md-icon-button">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>
  </md-whiteframe>


</template>

<script>
  export default {
    name: 'toolbar',
    data () {
      return {

      }
    },
    methods: {
      toggleLeftSidenav () {
        console.log(this.$parent.$refs)
        // this.$parent.$refs.leftSidenav.toggle()
        // this.$refs.leftSidenav.toggle()
      }
    }
  }
</script>

<style>

</style>
