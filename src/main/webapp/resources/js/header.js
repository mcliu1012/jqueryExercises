$(function() {
    setListener();
});

function setListener() {
    setLogoImgListener();

    // 显示/隐藏 侧边栏
    $("#pHeaderShowHideP").click(function() {
        // 通过判断按钮btn有没有active这个class名判断是否已经点击过
        if ($(this).hasClass("active")) {
            // 如果有了active，假设已经点击过了
            // 执行你的代码
            $("#left").animate({"margin-left":"0px"}, 300);
            // 把active去掉
            $(this).removeClass("active");
        } else {
            // 没有active，假设还没有点击过
            // 执行你的代码
            $("#left").animate({"margin-left":"-240px"}, 300);
            $(this).addClass("active");
        }
    });
}

/**
 * LOGO Image
 */
function setLogoImgListener() {
    if ($("#pHeaderMsgDiv").is(":visible")) {
        $("#pHeaderImg").css("cursor", "pointer").off("click").on("click", function() {
            window.location.href = $.getBaseURL() + "/index";
        });
    }
}