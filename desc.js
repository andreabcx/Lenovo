console.log("desc加载成功");
// //配置要引入所有模块
// //配置引入的文件的路径
require.config({
  paths: {
    "jquery": "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    goodDesc:"goodDesc",
    detailpage:"detailpage"
  },
  //jquery-cookie 依赖于jquery
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    parabola: {
      exports: "_",
    },
  },
})

require(['goodDesc','detailpage'], function (goodDesc,detailpage) {
    goodDesc.download();
    detailpage.magnify();

})  
