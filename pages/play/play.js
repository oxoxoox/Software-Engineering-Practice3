// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diceImage: "",
    flag: true,
    msg: "开始",
    dice: [],
    diceRecord: []
  },
  play: function(){
    let obj = this;
    if(obj.data.flag == true){
      obj.setData({
        flag: false,
        msg: "停止",
        diceImage: "/image/dice.gif",
      })
    }
    else{
      for(var i=1,dice_=[];i<=6;i++){
        dice_.push(Math.floor(Math.random() * 6)+1);
      }
      var record=wx.getStorageSync('record');
      if(record){
        record.push(dice_);
        wx.setStorageSync('record', record);
      }
      else{
        wx.setStorageSync('record', [dice_]);
      }
      obj.setData({
        dice: dice_,
        flag: true,
        msg: "开始",
        diceImage: "",
        diceRecord:wx.getStorageSync('record')
      })
    }
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
    wx.removeStorageSync('record');
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