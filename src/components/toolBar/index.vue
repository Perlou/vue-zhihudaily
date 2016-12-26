<template>
  <div class="tool-bar">
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
            <md-menu-item>ui库</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-dialog md-open-from="#custom" md-close-to="#custom" ref="dialog1">
          <md-dialog-title>关于作者</md-dialog-title>

          <md-dialog-content>
            Perlou <a href="https://github.com/Perlou">github</a>
            <p>本应用 API 均由 知乎（Zhihu.Inc） 提供，若被告知需停止共享与使用，本人会及时删除此页面与整个项目</p>
          </md-dialog-content>

          <md-dialog-actions>
            <md-button class="md-primary" @click="closeDialog('dialog1')">确认</md-button>
          </md-dialog-actions>
        </md-dialog>

      </md-toolbar>
    </md-whiteframe>
  </div>



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

<style lang="sass">
.tool-bar
  position: fixed;
  width: 100%;
  z-index: 101;

</style>
