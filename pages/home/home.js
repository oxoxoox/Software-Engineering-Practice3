// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    userName:app.globalData.userName,
    userImage:app.globalData.userImage,
    canIUseGetUserProfile:false,
    hasUserInfo: false
  },
  openRule: function(){
    this.setData({
      showModal: true
    })
  },
  go: function() { 
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
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile:function(){
    var that =  this;
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success:res => {
        that.setData({
          userName: res.userInfo.nickName,
          userImage: res.userInfo.avatarUrl,
          hasUserInfo: true
        })
        app.globalData.userName= res.userInfo.nickName;
        app.globalData.userImage= res.userInfo.avatarUrl;
      }
    })
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
    wx.navigateTo({
      url: '../index/index'
    })
    wx.redirectTo({
      url: '../index/index'
    })
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