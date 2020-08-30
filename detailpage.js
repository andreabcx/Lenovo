define([
  'jquery', "jquery-cookie"
], function ($) {
  console.log("放大镜模块加载");
  function magnify() {
    $(".detail").on("mouseenter", ".small", function () {
      $(".mark").add(".big").show();
      // $(".mark").show();
    })
    $(".detail").on("mouseleave", ".small", function () {
      $(".mark").add(".big").hide();
    })
    $(".detail").on("mousemove", ".small", function (ev) {
      var l = ev.clientX - $(this).offset().left - 100;
      l = Math.max(l, 0);
      l = Math.min(300, l);
      var t = ev.clientY - $(this).offset().top - 100;
      t = Math.max(t, 0);
      t = Math.min(529, t);
      console.log(l);
      console.log(t);
      $(".mark").css({
        left: l,
        top: t
      })
      //放大的图片，反方向对应倍数移动
      $(".big img").css({
        left: -2 * l,
        top: -2 * t
      })
      
    })
  }
    // $(".small").mouseenter(function () {
    //   // console.log($(this));

    //   // console.log(123);
    // }).mouseleave(function () {
    //   $(".mark").add(".big").hide();
    // }).mousemove(function (ev) {
    //   var l = ev.clientX - $(this).offset().left - 100;
    //   l = Math.max(l, 0);
    //   l = Math.min(300, l);
    //   var t = ev.clientY - $(this).offset().top - 100;
    //   t = Math.max(t, 0);
    //   t = Math.min(529, t);
    //   $(".mark").css({
    //     left: l,
    //     top: t
    //   })
    //   //放大的图片，反方向对应倍数移动
    //   $(".big img").css({
    //     left: -2 * l,
    //     top: -2 * t
    //   })
    // })

  return {
    magnify: magnify
  }
});