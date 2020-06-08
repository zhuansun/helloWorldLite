 // 设置API接口的ip地址和端口
let host = 'http://127.0.0.1:8080/hello'  
let apiList = {
   //用户登录的API
  login: host +'/user/app-user/login'

}
//暴露出来
module.exports = apiList;