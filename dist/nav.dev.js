"use strict";

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  // 循环模式选项
  autoplay: 1000,
  autoplayDisableOnInteraction: false,
  prevButton: ".swiper-button-prev",
  nextButton: ".swiper-button-next",
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination'
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});