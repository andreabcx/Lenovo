console.log("加载成功");
// //配置要引入所有模块
// //配置引入的文件的路径
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "index",
    banner: "banner",
    nav: "nav"
  },
  //jquery-cookie 依赖于jquery
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //某一个模块，不遵从AMD
    parabola: {
      exports: "_",
    },
  },
})

require(['index', 'banner', "nav"], function (index, banner, nav) {
  //     //下载首页的商品
  //     index.download();
  //     //加入购物车按钮添加点击事件
  //     index.sc_BtnHandleClick();
  //     //实现右侧购物车的移入移出效果
  //     index.sc_Right_HandleHover();
  //     //实现右侧购物车商品的删除功能
  //     index.sc_Goods_Delete_HandleClick();
  //     //实现+和-的功能
  //     index.sc_Good_Add_Minus_HandleClick();

  //     //实现轮播图效果
  // banner.bannerMain();
  // nav.swiper();
})