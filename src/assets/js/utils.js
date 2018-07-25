/**
 * 统一配置axios
 * 使用qs.stringify解决axios跨域问题
 * 配置axios请求类型为post时，使用qs.stringify来实现跨域访问，以及每次请求携带token
 * 配置请求成功后res，实现诸如登录失败，登录超时，账户密码错误和请求错误等拦截器
 */
import axios from 'axios'
import qs from 'qs'
// axios 配置
axios.defaults.timeout = 10000; //请求超时设置
axios.defaults.baseURL = process.env.BASE_API; //通过获取当前环境来决定使用哪个API
// 同后台配置一致，格式统一为json格式
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.parse(config.data);//上传文件时不能转
        } else if (config.method === 'get') {
			// console.log(config);
		}
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
/**
 * 拦截器也可以判定返回的response成功时的状态码进行拦截
 */
axios.interceptors.response.use(
    res => {
		// 拦截主系统
        switch (parseInt(res.data.code)) {

            default:
                // return res;
                break;
		}
    },
    error => {
    });
export default axios;
