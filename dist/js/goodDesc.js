define(["jquery", "jquery-cookie"], function ($) {
    console.log("gooddes");
    function download() {
        //找到详情页加载商品的id
        var id = valueByName(location.search, "id");
        // alert(id);
        // 通过id找到信息
        $.ajax({
            type: "get",
            url: "../data/productdata.json",
            success: function (arr) {
                // alert(arr);
                //通过id找到商品数据
                var goodMsg = arr.find(item => item.id == id);
                console.log(goodMsg);
                var node = $(`   
                <div class="con clearfix" id="detail_main">
                    <div class="con_left" id="detail_left">
                        <div class="small">
                            <img src=${goodMsg.img} alt="">
                            <div class="mark"></div>
                        </div>
                        <div class="big">
                            <img src=${goodMsg.img} alt="">
                        </div>
                        <!-- 橱窗图片 -->
                        <div class="play-picture" id="detail_playPicture" style="display: block;">
                            <!-- <a class="left-button" id="play_picture_leftbtn" style="opacity: 1;">
                                <div class="triangle-wrap">
                                    <div id="triangle-left"></div>
                                    <div id="triangle-left1"></div>
                                </div>
                            </a>
                            <a class="right-button" id="play_picture_rightbtn" style="opacity: 1;">
                                <div class="triangle-wrap">
                                    <div id="triangle-right"></div>
                                    <div id="triangle-right1"></div>
                                </div>
                            </a> -->
                            <div class="list" id="detail_playPicture_list">
                                <ul>
                                    <li data-index="1" class="">
                                        <a href="">
                                            <img
                                                src="//p1.lefile.cn/product/adminweb/2017/06/08/zNj9p07kLZXQ0YYbRilQ0O0IG-6813.w84.jpg">
                                        </a>
                                    </li>
                                    <li data-index="2">
                                        <a href="">
                                            <img
                                                src="//p2.lefile.cn/product/adminweb/2017/06/08/IQuPPokBUZ4QPOdb3hy5SRJq9-6843.w84.jpg">
                                        </a>
                                    </li>
                                    <li data-index="3" class="checked">
                                        <a href="">
                                            <img
                                                src="//p4.lefile.cn/product/adminweb/2017/06/08/2DYx4r6WlzuRX0pkq5p1pNPKf-6848.w84.jpg">
                                        </a>
                                    </li>
                                    <li data-index="4">
                                        <a href="">
                                            <img
                                                src="//p2.lefile.cn/product/adminweb/2017/06/08/EMtJ59hPvOglUQ99CNuEGjHQK-7195.w84.jpg">
                                        </a>
                                    </li>
                                    <li data-index="5">
                                        <a href="">
                                            <img
                                                src="//p4.lefile.cn/product/adminweb/2017/06/08/QWM6Szb7dU26znbNtWSq5ahEF-7307.w84.jpg">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="con_right">
                        <div>
                            <h1 title="联想（Lenovo） KN100无线键鼠套装" class="title" id="span_product_name">${goodMsg.tit}</h1>
                            <div class="dec" id="div_product_dec">${goodMsg.model}</div>
                        </div>
                        <div class="price-area">
                            <div class="price-detail-wrap">
                                <div class="prc-container">
                                    <div class="price-desc" style="color: rgb(67, 66, 66);">商城价</div>
                                    <div class="sign-prc-group">
                                        <span class="price-sign">¥</span>
                                        <span class="price-show" id="span_price">${goodMsg.OldPrice}</span>
                                    </div>
                                </div>
                                <!-- 评价 -->
                                <div class="total-evaluate-wrap">
                                    <div class="total-evaluate-desc">累计评价</div>
                                    <div id="total-evaluate-count">999
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 购买数量 -->
                        <div class="business-staff-container clearfix" id="container_purchase_count">
                            <div class="business-title">购买数量</div>
                            <div class="business-detail modify-buy-counts">
                                <div class="add-count-wrap" id="addcountbox">
                                    <span class="reduce" id="reduce_buy_number">
                                        <i class="buy-count-plus"></i>
                                    </span>
                                    <input type="text" class="txt" id="buy_number" value="1">
                                    <span class="add" id="add_buy_number">
                                        <i class="buy-count-minus"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- 立即购买加入购物车 -->
                        <div class="business-staff-container clearfix">
                            <div class="business-title">&nbsp;</div>
                            <div class="business-detail">
                                <div id="div_button_group">
                                    <div class="button-pay" id="ljgm">立即购买</div>
                                    <div class="button-add" id="jrgwc"> <a href="/cart.html">加入购物车</a></div>
                                </div>
                            </div>
                        </div>
                    </div>        
            </div>`).insertAfter(".detail .nav");
            },
            error: function (msg) {
                console.log(msg)
            }
        })
    }


    //获取
    function valueByName(search, name) {
        //查找键值对开始位置
        var start = search.indexOf(name + "=");
        if (start == -1) {
            return null;
        } else {
            var end = search.indexOf("&", start);
            if (end == -1) {
                end = search.length
            }
            //提取想要的键值对
            var str = search.substring(start, end);
            var arr = str.split("=");
            return arr[1];
        }

    }
    return {
        download: download,
    }
})