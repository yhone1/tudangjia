// pages/youhui/youhui.js
Page({
  onLoad(options) {
    this.setData({
      title: options.title
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    youhui:{
      myyouhui: [
        {
          jine: 50,
          manjian: 200,
          kaishi: "2018-11-12",
          jiesu: "2018-12-20"
        },
        {
          jine: 10,
          manjian: 50,
          kaishi: "2018 - 11 - 12",
          jiesu: "2018 - 12 - 20"
        }
      ]
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