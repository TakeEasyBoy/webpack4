import Vue from 'vue'
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'
// Raven.config('http://6657f1c98b0e4d22b6412eeb3bcf66ee@sentry.shijiyunhe.com/3')
//   .addPlugin(RavenVue, Vue)
//   .install()
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
import './element.js'
import '../theme/index.css'
import '../theme/display.css'
import '../static/icon_font/iconfont.css'
import './style/common.scss'
import './style/userelement.scss'
import 'babel-polyfill'

import store from './store'
// import './permission'
// md5加密
import {
  md5
} from './utils/md5'
import {
  transNum,
  transNum2Str
} from './utils/common'

Vue.prototype.$md5 = md5
Vue.prototype.$transNum = transNum
Vue.prototype.$transNum2Str = transNum2Str
Vue.config.productionTip = false
// Vue.config.errorHandler = function(err, vm, info) {
//   Raven.captureException(err)
// }
new Vue({
  el: '#app',
  router,
  store, // 将store注册到vue实例中
  template: '<App/>',
  components: {
    App
  }
})
