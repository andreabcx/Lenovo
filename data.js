//主页数据加载
define(["jquery"], function ($) {
    //数据下载
    function download() {
        $.ajax({
            type: "get",
            url: "./data/data.json",
            success: function (arr) {
                for (var i = 0; i < arr.length; i++) {
                    // var firstData = arr[0];
                    var node = $(`
                    <h2>${arr[i].Title}</h2>
                    <section>
                    <img src="${arr[i].Pic}">
                    <div class="list-box">
                    </div>
                    </section>`);
                    node.appendTo("#case .case-list");

                    for (var j = 0; j < arr[i].case.length; j++) {
                        $(`
                        <article>
                        <a href="product.html?id=${arr[0].case[j].id}">
                        <img src="${arr[i].case[j].img}" alt="">
                        <p>${arr[i].case[j].tit}</p>
                        <h4>${arr[i].case[j].model}</h4>
                        <aside>    
                        </a>
                        <span>￥${arr[i].case[j].OldPrice}</span>
                        </aside>
                        </article>
                        `).appendTo(node.find(".list-box"));
                        // console.log(arr[i].case[j].id);
                    }
                }

            },
            error: function (msg) {
                console.log(msg);
            }
        })
    }
    return {
        download: download
    }
});