// pages/order/order.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgC:"orange",
    btnC:[
      "全部",
      "火锅",
      "小吃",
      "酒水",
      "套餐"
    ],
    shu:1,
    clickId:0,
    clickItem:"全部"
  },
  jianshu: function () {
    var that = this
    this.setData({
      shu: function () {
        var a = that.data.shu - 1
        if (that.data.shu == 0) {
          a = 0
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
  allBtn:function(event){
    // console.log(event._relatedInfo.anchorTargetText=='全部')
    console.log(event.currentTarget.dataset)
    var id = event.currentTarget.dataset.id;  //获取自定义的ID值
    this.setData({
      id: id
    })
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