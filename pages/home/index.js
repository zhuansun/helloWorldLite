import Notify from '../../dist/notify/notify';
//获取应用实例
const app = getApp()

Page({
  data: {
        // Banner数据
        images:[
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
        interval: 2000,
        // 滑动动画时长0.5s
        duration: 500,
        // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
        previousMargin: 0,
        // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
        nextMargin: 0,
    timer: null, // 保存定时器
    scrollTop: 5, // 设定触发条件的距离
    deviceHeight: null,
    dataList: [],
    spinShow: false,
    paginate: {
      page: 1,
      pageSize: 20,
      hasNext: false
    },
    gridData:[
      {
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"2",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"3",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"4",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"5",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转",
        "info":"99"
      },{
        "id":"6",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"7",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"8",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"8",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"10",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"11",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"12",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"13",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"14",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"15",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"16",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"17",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"18",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"19",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      },{
        "id":"20",
        "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
        "link-type": "navigateTo",
        "url": 11,
        "text": "Navigate 跳转"
      }
    ],
    gridDataPush:
        {
          "icon": "http://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-02/ec9b6-691582636626_.pic.jpg",
          "link-type": "navigateTo",
          "url": 11,
          "text": "Navigate 跳转"
        }
  },

  getSystemInfo: function() {
    const _this = this;
    wx.getSystemInfo({
      success(res) {
        console.log("asdasdasd")
        console.log(res.windowHeight)
        _this.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight,
        })
      }
    })
  },

  onLoad: function() {
    this.getSystemInfo();
    this.getModuleList(this.data.paginate.page);
  },

  /**
   * 点击某一个模块，开始使用模块
   */
  clickToUseModule: function(e) {
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
   * 页面上拉触底事件的处理函数
   */
  getMore: function() {
    if(this.data.paginate.hasNext){
      console.log("上拉加载上拉加载上拉加载上拉加载上拉加载");
      // 显示加载图标
      // wx.showLoading({
      //   title: '玩命加载中',
      // })
      this.getModuleList(this.data.paginate.page + 1);
      // wx.hideLoading();
    }
    
  },

  onPullDownRefresh() {
    // 监听该页面用户下拉刷新事件
    // 可以在触发时发起请求，请求成功后调用wx.stopPullDownRefresh()来结束下拉刷新
     console.log('下拉拉拉')
    },
    refresh() { // 函数式触发开始下拉刷新。如可以绑定按钮点击事件来触发下拉刷新
      wx.startPullDownRefresh({
        success(errMsg) {
          console.log('开始下拉刷新', errMsg)
        },
        complete() {
          console.log('下拉刷新完毕')
        }
      });
    },
    scrollFn(e) { 
    // 防抖，优化性能
    // 当滚动时，滚动条位置距离页面顶部小于设定值时，触发下拉刷新
    // 通过将设定值尽可能小，并且初始化scroll-view组件竖向滚动条位置为设定值。来实现下拉刷新功能，但没有官方的体验好
      clearTimeout(this.timer)
      if (e.detail.scrollTop < this.data.scrollTop) {     
        this.timer = setTimeout( () => {
          this.refresh()
        }, 350)
      }
    },
    loadMore() { // 触底加载更多
      console.log("上拉上拉")
      for(let i=0; i<20; i++){
        this.data.gridData.push(this.data.gridDataPush)
        
        this.setData({
          'gridData': this.data.gridData
       })
      }
        
           console.log("上拉结束")
     },

  // onReachBottom: function(){
  //   console.log("上拉加载上拉加载上拉加载上拉加载上拉加载");
  // },

  //获取首页数据，进行加载
  getModuleList: function(currentPage) {
    
    this.setData({
      spinShow: true
    })

    //获取token
    const token = wx.getStorageSync('token');
    console.log("---->"+currentPage);
    const _this = this;
    
    //将token放在请求头中。进行请求获取
    wx.request({
      url: app.urlConfig.basePath + '/api/module/list',
      data: {
        'page': currentPage,
        'pageSize': this.data.paginate.pageSize,
        'query':{}
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
          }else{
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