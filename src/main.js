import Vue from 'vue'
import router from './router'
import app from './app.vue'
import './mock/mockServer'
import './common/stylus/index.styl'

new Vue({
  el: '#app',
  render: h => h(app),
  router
})
