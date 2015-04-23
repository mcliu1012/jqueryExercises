$(function() {
    pNetInitStatus();
    pNetSetListener();
});

/**
 * 状态初始化
 */
function pNetInitStatus() {

}

function pNetSetListener() {
    // 点击查询按钮
    checkIpBtnClickHandler();
}

/**
 * 点击查询按钮
 */
function checkIpBtnClickHandler() {
    $("#btn-check-ip").off("click").on("click", function() {
        $("#input-check-ip").focus();
        if ($("#input-check-ip").val() === "") {
            return;
        }
        setCheckIpBtnDisabledStatus();
        $.ajax({
            url: $.getBaseURL() + "/laboratory/checkIp",
            type: "POST",
            cache: false,
            dataType: "json",
            data: {
                "checkIp" : $("#input-check-ip").val()
            },
            success: function(data, textStatus) {
                $(".span-ip-address").text(data.checkIpAddress);
            },
            error: function(request, status, error) {

            },
            complete: function(XMLHttpRequest, textStatus) {

            }
        });
    });
}

/**
 * 设置一秒钟后按钮变为可点击状态
 */
function setCheckIpBtnDisabledStatus() {
    $("#btn-check-ip").prop("disabled", true);
    setTimeout(function() {
        $("#btn-check-ip").prop("disabled", false);
    }, 1000);
}