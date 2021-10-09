// pages/index/main_index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg : "规则"
    },
    
        toFuture(){
            wx.navigateTo({
              url: '/pages/future/future',
            })
          },
          toRule(){
            wx.navigateTo({
              url: '/pages/Rule/Rule',
            })
          },
          toServer(){
            wx.navigateTo({
              url: '/pages/Server/Server',
            })
          }
    
})