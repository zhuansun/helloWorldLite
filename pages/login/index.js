//index.js
import Notify from '../../dist/notify/notify';

var api = require('../../etc/httpUtil.js').default;
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
    steps: [{
        text: '获取头像信息',
        desc: '请授权本小程序使用您的微信头像和昵称',
      },
      {
        text: '登录程序',
        desc: '请登录使用本小程序',
      }
    ],
  },

  toUse: function (e) {
    this.setData({
      loadingLogin: true
    })
    //拿到用户的头像信息之后，紧接着请求服务器接口进行登陆
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var params = {
          "code": res.code
        }
        const _this = this;
        api.login(params).then(res => {
          this.setData({
            loadingLogin: false
          })
          var responseData = res.data;
          if (responseData.success) {
            Notify({
              type: 'success',
              message: "登陆成功"
            });
            _this.toTool();
          }
        }, err => {
          console.log(err)
          this.setData({
            loadingLogin: false
          })
          Notify({
            type: 'danger',
            message: err.errMsg
          });
        })
      }
    })
  },

  /**
   * 跳转到工具页面开始使用
   */
  toTool: function (e) {
    console.log("跳转到首页，准备使用了。。。。。。");
    wx.switchTab({
      url: '../tool/index'
    })
  },

  /**
   * 游客登陆使用 
   */
  touristLogin: function (e) {
    this.toTool();
  },

  onLoad: function () {
    const app = getApp()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        active: 1
      });
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          active: 1
        });
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            active:1
          });
        }
      })
    }
    //todo  这里有问题
    // let token = wx.getStorageSync('token');
    let token = '1111111';
    console.log(app.globalData.userInfo)
    console.log(token)
    if (app.globalData.userInfo && token) {
      this.toUse();
    }

  },


  /**
   * 获取用户的微信信息头像和昵称
   */
  getUserAvatarAndName: function (e) {
    if (e.detail.userInfo === undefined) {
      Notify({
        type: 'danger',
        message: '已拒绝授权'
      });
    } else {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        active: 1
      })
      Notify({
        type: 'success',
        message: '授权成功'
      });
    }
  }
})