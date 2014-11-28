$(function() {
    pLeftSetListener();
});

function pLeftSetListener() {
    $('.pLeftOuterDiv li').off('click').on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
}