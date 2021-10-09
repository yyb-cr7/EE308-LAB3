// pages/index/main_index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        msg : "规则"
    },
    
        toenterRoom(){
            wx.navigateTo({
              url: '/pages/enterRoom/enterRoom',
            })
          },
          tosingleGame(){
            wx.navigateTo({
              url: '/pages/singleGame/singleGame',
            })
          },
          tocreateRoom(){
            wx.navigateTo({
              url: '/pages/createRoom/createRoom',
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