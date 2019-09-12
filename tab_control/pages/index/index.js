//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
    items: [{
        name: "选项卡一"
      },
      {
        name: "选项卡二"
      },
      {
        name: "选项卡三"
      }
    ]
  },
  //点击切换
  switchtab: function(e) {
    this.setData({
      currentTab : e.currentTarget.dataset.index
    })
  },
  onLoad: function() {

  }
})