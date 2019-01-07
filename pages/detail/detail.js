// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'',
    name:'',
    price:'',
    unit: '',
    discribe:'',
    shu:0
  },
  jianshu:function(){
    var that=this
    this.setData({
      shu:function(){
        var a=that.data.shu-1
        if (that.data.shu==0){
          a=0
        }
        return a
      }()
    })
  },
  jiashu: function () {
    var that = this
    this.setData({
      shu: function () {
        var a = that.data.shu + 1;
        return a
      }()
    })
  },
  tian:function(){
    wx.navigateBack({
      url:'../home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      pic:options.pic,
      name:options.name,
      price:options.price,
      unit:options.unit,
      discribe:options.discribe
    })
    // wx.setNavigationBarTitle({
    //   title: that.data.title,
    // })
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