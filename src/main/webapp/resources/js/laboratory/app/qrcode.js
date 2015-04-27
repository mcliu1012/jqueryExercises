$(function() {
    pQRInitStatus();
    pQRSetListener();
});

function pQRInitStatus() {
    $("#img-qrcode").prop("src", "");
}

function pQRSetListener() {
    // 点击生成二维码按钮
    setQRCodeBtnClickHandler();
}

/**
 * 点击生成二维码按钮
 */
function setQRCodeBtnClickHandler() {
    $("#btn-qr-generate").off("click").on("click", function() {
        $("#input-qr-content").focus();
        if ($("#input-qr-content").val() === "") {
            return;
        }
        setQRCodeBtnDisabledStatus();

        var qr_content = $("#input-qr-content").val();
        var qr_width = $("#input-qr-width").val();
        var qr_height = $("#input-qr-height").val();
        $.ajax({
            url: $.getBaseURL() + "/laboratory/qrcode_gnrt",
            type: "POST",
            cache: false,
            dataType: "json",
            data: {
                "content" : qr_content,
                "width" : isNum(qr_width) && (qr_width >= 100 && qr_width <= 500) ? parseInt(qr_width, 10) : 0,
                "height" : isNum(qr_height) && (qr_height >= 100 && qr_height <= 500) ? parseInt(qr_height, 10) : 0,
            },
            success: function(data, textStatus) {
                $("#img-qrcode").prop("src", data.qrPath);
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
function setQRCodeBtnDisabledStatus() {
    $("#btn-qr-generate").prop("disabled", true);
    setTimeout(function() {
        $("#btn-qr-generate").prop("disabled", false);
    }, 1000);
}