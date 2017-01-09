<template>
  <div class="tool-bar">
    <md-whiteframe md-elevation="3">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggle">
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

    <!-- side-nav -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://avatars1.githubusercontent.com/u/12897436" alt="author">
            </md-avatar>

            <span style="flex: 1"></span>

          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>Perlou (FE development engineer)</span>
              <span>perloukevin@gmail.com</span>
            </div>
          </md-list-item>
        </md-list>
      </md-toolbar>
      <md-list>
        <md-list-item
          @click="$refs.leftSidenav.toggle()"
          class="md-primary"
          :class="'side-list-item'">
          <span>首页</span><md-icon>home</md-icon>
        </md-list-item>
        <md-list-item
          v-for="item in others"a
          :class="'side-list-item'">
          <span>{{item.name}}</span><md-icon>plus</md-icon>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <!-- end side-nav -->

  </div>

</template>

<script>
import * as api from 'src/common/api'

export default {
  name: 'toolbar',
  data () {
    return {
      others: []
    }
  },
  created () {
    api.getThemesList().then(res => {
      let data = res.data
      this.others = data.others
    })
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    toggle () {
      this.$refs.leftSidenav.toggle()
      // this.$emit('toggle')
    }
  }
}
</script>

<style lang="sass">
.tool-bar
  position: fixed;
  width: 100%;
  z-index: 101;

  .md-sidenav-content
    position: fixed !important;
    z-index: 150;

  .md-backdrop
    position: fixed !important;
    z-index: 149;

  .side-list-item
    height: 36px;
    line-height: 36px;

    .md-list-item-container
      min-height: 36px;


</style>
