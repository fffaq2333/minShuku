//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nickName:'默认data',
    avatarUrl:'默认avatarUrl',
    gender:"默认性别",
    province:"默认省份",
    city:"默认城市",
    authorized:"尚未授权",
    username:"",
    password:""
  },
  onLoad: function(){
  },

  chageState:function(){
    this.setData(
      {
        authorized:"正确"
      }
    )
  },
   //授权登录点击事件
   getUserInfo:function(){
     var userInfo //用户信息对象(不包含openid等敏感信息)
     var nickName
     var avatar
     var gender
     var province
     var city
     this.setData(
      {
        authorized:"授权",
        login:"未登录"
      }
     )
     wx.getUserInfo({
      //获取用户信息
       
       success: function(res){
          userInfo = res.userInfo
          nickName = userInfo.nickName
          avatar = userInfo.avatarUrl
          gender = userInfo.gender
          province = userInfo.province
          city = userInfo.city
          //页面跳转
          wx.switchTab({
            url: 'pages/index/index',
            events:{
              gotoMPage: function(res){
                console.log(data)
              }
            },
            success: function(res){
                
            }
          })
       }
     })
   },
   usernameInput: function(e){
      this.setData(
        {
          username:e.detail.value
        }
      )
   },
   passwordInput: function(e){
     this.setData(
       {
          password:e.detail.value
       }
     )
   },
   login: function(){
     var that = this;
    // 用户名或者密码判断空
     if(that.data.username==""||that.data.password==""){
       wx.showToast({
         title: '用户名或者密码为空',
         icon:'none',
         duration:2000
       })
     }
     
   }
})
