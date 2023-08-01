// 置顶
// 获取置顶按钮元素
var up = document.getElementsByClassName("up")[0];

// 监听页面的滚动事件
window.onscroll = function () {
    // 获取当前滚动位置
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    // 根据滚动位置来判断是否显示或隐藏置顶按钮
    if (scrollPos > 0) {
        up.style.display = "block"; // 显示按钮
    }
    else if (scrollPos == 0) {
        up.style.display = "none"; // 隐藏按钮
    }
};

// 点击置顶按钮时，回到页面顶部
up.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth", display: none });
});