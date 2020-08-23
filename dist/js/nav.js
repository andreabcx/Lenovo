define([
    'require',
    "jquery"
], function ($) {
    // 'use strict';
    var swiper = new Swiper('.swiper-container', {
        loop: true, 
        speed:300,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        // effect : 'fade',

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    })
    return {
        swiper: swiper
    }
});