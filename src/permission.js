import router from './router'
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getToken, getRole } from '@/utils/auth' // 验权
const NProgress = require('nprogress') // Progress 进度条

//  定义免鉴权白名单
const whiteLists = ['/login', '/error', '/admin']

//  浏览器检测

router.beforeEach((to, from, next) => {
  // 404页面
  if (to.matched.length === 0) {
    router.push('/error')
    return
  }
  NProgress.start()
  //  鉴权的流程，根据后期业务来定义
  /**
   * 鉴权流程
   * 1.所有页面可以跳转，但是通过
    */

  if (getToken()) {
    //  登陆页面不用判断，直接跳转
    if (to.path === '/login') {
      next()
    } else {
      if (to.meta.role != null) {
        if (getRole().indexOf(to.meta.role) !== -1) {
          next()
        } else {
          next({ path: '/noaccess' })
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteLists.indexOf(to.path) !== -1) {
      NProgress.done()
      next()
    } else {
      // 暂时hack方法:点击后退按钮后再次刷新ogin页面
      next({ path: '/login' })
    }
  }
})

//  路由跳转如果要跳转到页面的顶部，必须要使用下面的方式，让新的页面跳转到页面顶部
router.afterEach((to) => {
  //  路由跳转成功，关闭进度条
  // console.log(Nprogress.done())
  const pathlength = to.path.split('/').length
  NProgress.done()
  if (pathlength === 2) {
    window.scrollTo(0, 0)
  }
})
