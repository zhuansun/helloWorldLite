//index.js
import Notify from '../../dist/notify/notify';
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    active: 0,
    errorMessage: null,
    loadingLogin: false,
    steps: [
      {
        text: '获取头像信息',
        desc: '请授权本小程序使用您的微信头像和昵称',
      },
      {
        text: '登录程序',
        desc: '请登录使用本小程序',
      }
    ],
  },

  toUse: function(e) {
    console.log("跳转到首页，准备使用了。。。。。。");
    wx.switchTab({
      url: '../home/index'
    })
  },

  login: function(e) {
    this.setData({ loadingLogin:true })
    //拿到用户的头像信息之后，紧接着请求服务器接口进行登陆
    wx.login({
      success: res => {
        const _this = this;
              console.log("success");
              Notify({ type: 'success', message: '登录成功' });
              //将token保存下来
              wx.setStorageSync('token', "12312313123123")
              this.setData({ loadingLogin:false })
              _this.toUse();


        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      //   wx.request({
      //     url: app.urlConfig.basePath + '/api/user/login',
      //     data: {
      //       code: res.code
      //     },
      //     method: "POST",
      //     header: {
      //       'content-type': 'application/json' // 默认值
      //     },
      //     success(res) {
      //       console.log(res.data.code);
      //       if (res.data.code == 200) {
      //         console.log("success");
      //         $Message({
      //           content: "登陆成功",
      //           type: 'success'
      //         });
      //         _this.setData({
      //           active: 2,
      //           hasLogin: true
      //         })
      //         //将token保存下来
      //         wx.setStorageSync('token', res.data.vo)
      //       } else {
      //         $Message({
      //           content: res.data.msg,
      //           type: 'error'
      //         });
      //       }
      //       _this.setData({
      //         loadingLogin: false
      //       })
      //     },
      //     fail() {
      //       //将token保存下来
      //       $Message({
      //         content: "请求失败",
      //         type: 'error'
      //       });
      //       _this.setData({
      //         loadingLogin: false
      //       })
      //     }
      //   })
      }
    })
  },


  onLoad: function() {
    const app = getApp()
    console.log("userinfo"+app.globalData.userInfo);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        active: 1
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          active: 1
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          console.log(res.userInfo);
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            active: 1
          })
        }
      })
    }

    let token = wx.getStorageSync('token');
    console.log("token:"+token);
    console.log("userinfo:" + this.data.hasUserInfo);

    console.log("44444-->" + (app.globalData.userInfo && token));
    if (app.globalData.userInfo && token) {
      this.toUse();
    }
    //有可能是用其他页面跳转过来的，需要设置errorMessage
    this.setData({
      errorMessage: app.globalData.errorMessage
    })

  },


  /**
   * 获取用户的微信信息头像和昵称
   */
  getUserAvatarAndName: function(e) {
    if (e.detail.userInfo === undefined) {
      Notify({ type: 'danger', message: '已拒绝授权' });
    } else {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        active: 1
      })
      Notify({ type: 'success', message: '授权成功' });
    }
  }
})