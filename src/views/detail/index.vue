<template>
    <div class="view-detail" id="detail" v-html="htmlStr">
    </div>
</template>

<script>
import {getDetail} from 'src/common/api'

export default {
  name: 'detail',
  data () {
    return {
      detailId: '',
      htmlStr: '',
      styleUrl: ''
    }
  },
  created () {
    this.detailId = this.$route.params.id
    getDetail(this.detailId).then(res => {
      this.htmlStr = res.data.body
      console.log(res)
    })
  }
}
</script>

<style lang="sass">
.view-detail
    padding-top: 64px;

</style>