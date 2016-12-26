<template>

  <md-whiteframe md-elevation="3">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">知乎日报</h2>
      <span style="flex: 1"></span>

      <md-menu md-direction="bottom left">
        <md-button md-menu-trigger class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item id="custom" @click="openDialog('dialog1')">关于作者</md-menu-item>
        </md-menu-content>
      </md-menu>

    <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
      <md-dialog-title>Lorem ipsum dolor sit amet</md-dialog-title>

      <md-dialog-content>Nemo, nobis necessitatibus ut illo, ducimus ex.</md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>
        <md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

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
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      }
    }
  }
</script>

<style>

</style>
