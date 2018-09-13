/**
 * 统一配置axios
 * 使用qs.stringify解决axios跨域问题
 * 配置axios请求类型为post时，使用qs.stringify来实现跨域访问，以及每次请求携带token
 * 配置请求成功后res，实现诸如登录失败，登录超时，账户密码错误和请求错误等拦截器
 */
import axios from 'axios'
// import Raven from 'raven-js'
// import qs from 'qs'
import { Message } from 'element-ui'
import router from '../router/index.js'
import store from '@/store'
import { getToken } from '@/utils/auth'
// axios 配置
axios.defaults.timeout = 10000 // 请求超时设置
axios.defaults.baseURL = process.env.BASE_API //  通过获取当前环境来决定使用哪个API
// 同后台配置一致，格式统一为json格式
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 文件下载
const downloadUrl = (url) => {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function() {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // config.data = qs.parse(config.data);//上传文件时不能转
    } else if (config.method === 'get') {
      // console.log(config);
    }
    //  每次请求携带token
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
/**
 * 拦截器也可以判定返回的response成功时的状态码进行拦截
 */
axios.interceptors.response.use(
  res => {
    if (res.headers['content-type'] !== 'application/json') {
      downloadUrl(res.config.url)
    }
    // 拦截主系统
    switch (parseInt(res.data.errCode)) {
      case 0: //  请求成功
        return res
      case 100001: // 密码错误
        Message({
          type: 'error',
          message: '登陆密码错误,请重新输入!',
          duration: 1 * 1000
        })
        return res
      case 100002: // 账号错误
        Message({
          type: 'error',
          message: '登陆账号错误,请重新输入!',
          duration: 1 * 1000
        })
        return res
      case 100003: // token失效
        Message({
          type: 'error',
          message: 'token失效,请重新登陆',
          duration: 1 * 1000
        })
        router.replace({
          path: '/login'
        })
        return res
      default:
        // return res;
        break
    }
  },
  error => {
    // Raven.captureException(error)
    if (error.response) {
      switch (error.response.code) {
        case 401:
        // 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    } else {
      Message({
        message: '网络请求超时，请稍后再试或联系管理员',
        type: 'error',
        duration: 1 * 2000
      })
    }
  })
export default axios
