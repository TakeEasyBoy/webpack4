'use strict'
//开发环境，用于node模拟接口
var os = require('os'),
    ifaces = os.networkInterfaces()
	//localIp = ifaces['以太网'][1].address;
	// http://172.16.0.113:8000
	// `"http://${localIp}"`
module.exports = {
    NODE_ENV: '"development"',
    ENV_CONFIG: '"dev"',
    BASE_API: '"http://120.76.224.157:8000"', //	在后台兄弟开始开发的时候，需将该地址改成对应后台接口
}
