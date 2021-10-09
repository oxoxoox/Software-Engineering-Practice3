// pages/index/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    userName: app.globalData.userName,
    userImage:app.globalData.userImage
  },
  //点击事件
  goHome: function(){
    wx.switchTab({
      url: '../home/home',
    })
  },
  playGame: function(){
      console.log("abc");
      wx.navigateTo({
        url: '/pages/play/play'
      })
  },
  openRule: function(){
    this.setData({
      showModal: true
    })
  },
  goRule: function() { 
    this.setData({
    showModal: false
    })
  },
  preventTouchMove: function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userName: app.globalData.userName,
      userImage:app.globalData.userImage
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})