// pages/play/play.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diceImage: "/image/dice.gif",
    flag: true,
    msg: "开始",
    dice: [1,1,1,1,1,1],
    diceRecord: [],
    result: ""
  },
  play: function(){
    let obj = this;
    if(obj.data.flag == true){
      obj.setData({
        flag: false,
        msg: "停止",
      })
    }
    else{
      var a=0;
      for(var i=1,dice_=[],count=[0,0,0,0,0,0];i<=6;i++){
        a=Math.floor(Math.random() * 6) + 1;
        dice_.push(a);
        count[a]++;
      }
      if(count[3]==4&&count[0]==2){
        obj.setData({
          result: "状元插金花",
        })
      }
      else if(count[3]==6){
        obj.setData({
          result: "满堂红",
        })
      }
      else if(count[0]==6){
        obj.setData({
          result: "遍地锦",
        })
      }
      else if(Math.max.apply(null,count)==6){
        obj.setData({
          result: "六勃黑",
        })
      }
      else if(count[3]==5){
        obj.setData({
          result: "五王",
        })
      }
      else if(count[3]==4&&count[0]!=2){
        obj.setData({
          result: "状元",
        })
      }
      else if(Math.max.apply(null,count)==1){
        obj.setData({
          result: "对堂",
        })
      }
      else if(count[3]==3){
        obj.setData({
          result: "三红",
        })
      }
      else if(Math.max.apply(null,count)==4){
        obj.setData({
          result: "四进",
        })
      }
      else if(count[3]==2){
        obj.setData({
          result: "二举",
        })
      }
      else if(count[3]==1){
        obj.setData({
          result: "一秀",
        })
      }
      else {
        obj.setData({
          result: "未中奖",
        })
      }
      var record=wx.getStorageSync('record');
      var dice_String=dice_.map(String);
      dice_String.push(obj.data.result);
      if(record){
        record.push(dice_String);
        wx.setStorageSync('record', record);
      }
      else{
        wx.setStorageSync('record', [dice_String]);
      }
      obj.setData({
        dice: dice_,
        flag: true,
        msg: "开始",
        diceRecord:wx.getStorageSync('record')
      })
      wx.showToast({
        title: '恭喜：'+obj.data.result,
        icon:"none",
        duration: 2000
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