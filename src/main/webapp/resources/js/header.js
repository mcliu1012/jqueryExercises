$(function() {
    setLogoImgListener();
});

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