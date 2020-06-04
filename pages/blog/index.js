//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    value: '',
    active: 0,
    imageURL: 'https://youdao-note-images.oss-cn-hangzhou.aliyuncs.com/2020-05/20200514170342.png'
  },
  onLoad: function () {

  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    wx.showToast({
      title: `搜索 ${this.data.value}`,
      icon: 'none',
    });
  },
  onSearchClick() {
    wx.showToast({
      title: `搜索 ${this.data.value}`,
      icon: 'none',
    });
  },

  onTabsClick(event) {
    wx.showToast({
      title: `点击标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

})