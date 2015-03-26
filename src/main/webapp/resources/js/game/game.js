$(function() {
    set2048ImgListener();
});

/**
 * 2048 Image
 */
function set2048ImgListener() {
    $('[data-toggle="popover"]').popover();

    $("#pGame2048Img").hover(function() {
        $("#pGame2048Img").next().children("div").eq(1).css("color", "chocolate");
    });
}