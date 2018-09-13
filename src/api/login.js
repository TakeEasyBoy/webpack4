import axios from '../configs/http.js'

/**
 * 账号密码登录
 * @param username
 * @param password
 */
export const accountLogin = (username, password) => axios({
  method: 'post',
  url: '/user/login',
  data: {
    username,
    password
  }
})

/**
 * 获取用户token
 * @param token
 */
export const getUserInfo = (token) => axios({
  method: 'post',
  url: '/users/info',
  data: {
    token
  }
})

export const logout = () => axios({
  method: 'post',
  url: '/user/logout'
})
//  用户自己修改自己密码
export const modPass = (password, password_new, password_confirm) => axios({
  method: 'post',
  url: '/user/modify_password',
  data: {
    password,
    password_new,
    password_confirm
  }
})
