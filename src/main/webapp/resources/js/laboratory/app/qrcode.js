$(function() {
    pQRSetListener();
});

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
        var qrWidth = isNum(qr_width) && (qr_width >= 100 && qr_width <= 500) ? parseInt(qr_width, 10) : 100;
        var qrHeight = isNum(qr_height) && (qr_height >= 100 && qr_height <= 500) ? parseInt(qr_height, 10) : 100;

        // 生成二维码
        $("#div-qrcode-show").css("width", qrWidth + "px");
        $("#div-qrcode-show").css("height", qrHeight + "px");
        var qrcode = new QRCode($("#div-qrcode-show")[0], {
            width : qrWidth,//设置宽高
            height : qrHeight
        });
        qrcode.makeCode(qr_content);
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