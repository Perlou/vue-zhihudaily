/**
 * 应用入口
 * @author Perlou(perloukevin@gmail.com)
 */

'use strict'

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'

// view
import Home from './views/home'
import Detail from './views/detail'

// css
import 'vue-material/dist/vue-material.css'

// middle
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'orange',
    accent: 'green'
  }
})

// router
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
