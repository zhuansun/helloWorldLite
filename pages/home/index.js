import Notify from '../../dist/notify/notify';
//获取应用实例
const app = getApp()

Page({
  data: {
    // Banner数据
    images: [
      "http://img.zcool.cn/community/014056564bd8596ac7251c94eb5559.jpg",
      "http://img.zcool.cn/community/01e03b58047e96a84a0e282b09e8fc.jpg",
      "http://pic.90sjimg.com/back_pic/00/00/69/40/d678a42886e0232aaea0d6e69e9b1945.jpg",
      "http://img.zcool.cn/community/0132dd55800bc700000059ffbe83e9.jpg@1280w_1l_2o_100sh.jpg",
      "http://img.zcool.cn/community/0154755a2df102a80120ba3828b5af.jpg@1280w_1l_2o_100sh.jpg",
      "http://pic.90sjimg.com/back_pic/00/00/69/40/bf4f8e2ab7e05dc3c7cc2a7f7e9c2fe7.jpg",
      "http://img.zcool.cn/community/01a2a2594943d3a8012193a328e0fd.jpg@1280w_1l_2o_100sh.jpg"
    ],
    // 是否显示面板指示点
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    // 自动切换
    autoplay: true,
    // 采用衔接滑动
    circular: true,
    // 自动切换时间间隔2s
    interval: 3500,
    // 滑动动画时长0.5s
    duration: 500,
    // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    previousMargin: 0,
    // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0,
    //获取的设备高度
    deviceHeight: null,
    //后台列表数据
    dataList: [],
    //是否隐藏加载中
    hiddenScrollLoading: false,
    //分页数据
    paginate: {
      page: 1,
      pageSize: 20,
      hasNext: false
    },
    //测试数据
    gridData: [
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "2",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "3",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "4",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "5",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转",
        "info": "99"
      }, {
        "id": "6",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "7",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "8",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "8",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "10",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "11",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "12",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "13",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "14",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "15",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "16",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "17",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }, {
        "id": "18",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }
    ],
    //测试数据
    gridDataPush: [
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },
      {
        "id": "1",
        "icon": "https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200603192412.png",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }
    ]
  },

  /**
   * 小程序的生命周期：当页面加载的时候，调用接口获取数据
   */
  onLoad: function () {
    this.getSystemInfo();
    this.getModuleList(this.data.paginate.page);
  },


  /**
   * 获取系统信息，设备高度等
   */
  getSystemInfo: function () {
    const _this = this;
    wx.getSystemInfo({
      success(res) {
        console.log(res.windowHeight)
        _this.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight,
        })
      }
    })
  },


  /**
   * 点击某一个模块，开始使用模块
   */
  clickToUseModule: function (e) {
    console.log(e)
    console.log(e.currentTarget.id);
    console.log(app.urlConfig.basePath)

    const currentId = e.currentTarget.id;
    const list = this.data.dataList;
    let jumpUrl = null;
    for (var i = 0; i < list.length; i++) {
      console.log("--->list-id:" + list[i].id);
      if (list[i].id == currentId) {
        console.log(list[i].jumpUrl);
        jumpUrl = list[i].jumpUrl;
        break;
      }
    }

    wx.navigateTo({
      url: jumpUrl + "?module_id=" + e.currentTarget.id
    })
  },

  // // 下拉刷新
  // onRefresh: function() {
  //   // 显示顶部刷新图标
  //   wx.showNavigationBarLoading();
  //   console.log("下拉刷新");
  //   this.getModuleList(1);
  //   // 隐藏导航栏加载框
  //   wx.hideNavigationBarLoading();
  //   // 停止下拉动作
  //   wx.stopPullDownRefresh();
  // },
  // onPullDownRefresh:function(){
  //   console.log("下拉刷新");
  //   wx.stopPullDownRefresh()
  // },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {
    console.log('fresh')
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉上拉")
    this.setData({
      hiddenScrollLoading: false
    })
    console.log(this.data.hiddenScrollLoading)
    var _this = this;
    setTimeout(function () {
      var tempArr = _this.data.gridData;
      tempArr.push.apply(tempArr, _this.data.gridDataPush)
      _this.setData({
        gridData: tempArr,
        hiddenScrollLoading: true
      })
    }, 1500);
    console.log("上拉结束");
  },

  //获取首页数据，进行加载
  getModuleList: function (currentPage) {

    this.setData({
      spinShow: true
    })

    //获取token
    const token = wx.getStorageSync('token');
    console.log("---->" + currentPage);
    const _this = this;

    //将token放在请求头中。进行请求获取
    wx.request({
      url: app.urlConfig.basePath + '/api/module/list',
      data: {
        'page': currentPage,
        'pageSize': this.data.paginate.pageSize,
        'query': {}
      },
      method: "POST",
      header: {
        'content-type': 'application/json', // 默认值
        'authorization': token
      },
      success(res) {
        if (res.data.code == 200) {
          console.log("success");
          if (currentPage === 1) {
            _this.setData({
              dataList: res.data.voList,
              paginate: {
                page: res.data.paginate.page,
                pageSize: res.data.paginate.perPage,
                hasNext: res.data.paginate.hasNext
              }
            })
          } else {
            _this.setData({
              dataList: [..._this.data.dataList, ...res.data.voList],
              paginate: {
                page: res.data.paginate.page,
                pageSize: res.data.paginate.perPage,
                hasNext: res.data.paginate.hasNext
              }
            })
            wx.hideLoading();
          }
        } else if (res.data.code == 207 || res.data.code == 206) {
          //失败
          app.globalData.errorMessage = res.data.msg;
          wx.removeStorageSync("token");
          wx.redirectTo({
            url: '../index/index',
          })
        } else {
          console.log("服务器失败");
        }
        _this.setData({
          spinShow: false
        })
      },
      fail() {
        console.log("请求失败");
        _this.setData({
          spinShow: false
        })
      }
    })

  }
})