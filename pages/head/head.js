Page({
  data:{
    isDog:true,
    isCat:false,
    index:0,
    year:"2000-11-24",
    month:"01",
    petArr:['八哥犬','博美犬','吉娃娃','哈士奇','拉布拉多','泰迪犬','萨摩耶犬','八哥犬','贵宾犬','边境牧羊犬','金毛','other'],

    month_index:0,
    monthArr:['01','02','03','04','05','06','07','08','09','10','11','12']
  },
  tapDog: function(){
      this.setData({
          isDog:true,
          isCat:false
      })
      
  },
  tapCat: function(){
      this.setData({
          isDog:false,
          isCat:true
      })
      
      console.log('data.isDog')
  },
  toSecondPage:function(){
      wx.navigateTo({
        url: '../introduce/introduce',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  changePetSelected:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  yearSelected:function(e){
    console.log(e.detail.value)
    this.setData({
      year:e.detail.value
    })
  },
  monthSelected:function(e){
    this.setData({
      month_index:e.detail.value
    })
  }
})
