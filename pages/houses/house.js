// pages/houses/house.js
Page({

  /**
   * Page initial data
   */
  data: {

    minShuKU_list:[
      {
        id:1,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整套公寓',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"<<黑森林>>夫子庙地铁口巨幕宜家两居",
        minShuKu_cost :199,
        minShuKu_cost_org:298,
        minShuKu_star:5,
        
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },{
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      },
      {
        id:2,
        minShuKu_start_time:'2020-10-1',
        minShuKu_stop_time:'2020-10-10',
        minShuKu_city:"南京",
        minShuKu_pic:'../images/login.jpg',
        minShuKu_type:'整间loft',
        minShuKu_room:2,
        minShuKu_bath:1,
        minShuKu_bed:1,
        minShuKu_name:"【拉尔斯之光】巨幕投影",
        minShuKu_cost :262,
        minShuKu_cost_org:249,
        minShuKu_star:5
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    //获取index界面传回的data
   
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  navigatorDetail: function(){
    wx.navigateTo({
      url: '/pages/detail/datail',
    })
  }
  
})