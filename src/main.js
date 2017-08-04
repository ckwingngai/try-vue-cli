// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { createStore } from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: createStore(),
  router,
  template: '<App/>',
  components: { App }
})
// const renderer = require('vue-server-renderer').createRenderer()
//
// // Step 3: Render the Vue instance to HTML
// renderer.renderToString(app123, (err, html) => {
//   if (err) throw err
//   console.log(html)
//   // => <div data-server-rendered="true">Hello World</div>
// })
