// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:{
      "imgUrls": [
        "../../images/banner1.jpg",
        "../../images/banner2.jpg",
        "../../images/banner3.jpg"
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 1000,
      inColor: "rgba(255,255,255,.8)",
      inAcColor: "gray"
    },
    foods: {
      myfoods:[
        {
          foodPic: "../../images/food/IMG_1302.jpg",
          foodName: "招牌红锅兔",
          foodPrice: 88,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id:1,
          kind:"火锅"
        },
        {
          foodPic: "../../images/food/IMG_1303.jpg",
          foodName: "招牌酸菜鱼",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 2,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1304.jpg",
          foodName: "招牌大排（清汤）",
          foodPrice: 88,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 3,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1305.jpg",
          foodName: "水煮肉片",
          foodPrice: 48,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 4,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1306.jpg",
          foodName: "玉米排骨",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 5,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1307.jpg",
          foodName: "红锅魔芋鸭",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 6,
          kind: "火锅"
        },
        {
          foodPic: "../../images/xiaochi/01.jpg",
          foodName: "薯条",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 7,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/02.jpg",
          foodName: "抄手",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 8,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/03.jpg",
          foodName: "红糖糍粑",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 9,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/04.jpg",
          foodName: "南瓜饼",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 10,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/05.jpg",
          foodName: "煎饺",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 11,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/06.jpg",
          foodName: "米饭",
          foodPrice: 2,
          foodunit: "碗",
          footdiscribe: "超好吃！",
          id: 12,
          kind: "小吃"
        }
      ]
    }
  },

  huoguo: function (e) {
    this.setData({
      'foods.myfoods': [{
        foodPic: "../../images/food/IMG_1302.jpg",
        foodName: "招牌红锅兔",
        foodPrice: 88,
        foodunit:"锅",
        footdiscribe: "超好吃！",
        id: 1,
        kind: "火锅"
      },
        {
          foodPic: "../../images/food/IMG_1303.jpg",
          foodName: "招牌酸菜鱼",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 2,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1304.jpg",
          foodName: "招牌大排（清汤）",
          foodPrice: 88,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 3,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1305.jpg",
          foodName: "水煮肉片",
          foodPrice: 48,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 4,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1306.jpg",
          foodName: "玉米排骨",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 5,
          kind: "火锅"
        },
        {
          foodPic: "../../images/food/IMG_1307.jpg",
          foodName: "红锅魔芋鸭",
          foodPrice: 68,
          foodunit: "锅",
          footdiscribe: "超好吃！",
          id: 6,
          kind: "火锅"
        }]
    });
  },
  xiaochi:function(){
    this.setData({
      'foods.myfoods': [{
        foodPic: "../../images/xiaochi/01.jpg",
        foodName: "薯条",
        foodPrice: 18,
        foodunit: "份",
        footdiscribe: "超好吃！",
        id: 7,
        kind: "小吃"
      },
        {
          foodPic: "../../images/xiaochi/02.jpg",
          foodName: "抄手",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 8,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/03.jpg",
          foodName: "红糖糍粑",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 9,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/04.jpg",
          foodName: "南瓜饼",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 10,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/05.jpg",
          foodName: "煎饺",
          foodPrice: 18,
          foodunit: "份",
          footdiscribe: "超好吃！",
          id: 11,
          kind: "小吃"
        },
        {
          foodPic: "../../images/xiaochi/06.jpg",
          foodName: "米饭",
          foodPrice: 2,
          foodunit: "碗",
          footdiscribe: "超好吃！",
          id: 12,
          kind: "小吃"
        }]
    })
  },
  yinliao:function(e){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  mydetail:function(e){
    var that=this;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/detail?pic=' + that.data.foods.myfoods[id].foodPic + '&name=' + that.data.foods.myfoods[id].foodName + '&price=' + that.data.foods.myfoods[id].foodPrice + '&unit=' + that.data.foods.myfoods[id].foodunit + '&discribe=' + that.data.foods.myfoods[id].footdiscribe,
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