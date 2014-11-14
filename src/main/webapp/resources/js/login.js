$(function() {
    initLoginFormValue();
});

/**
 * Login Form Initialization
 */
function initLoginFormValue() {
    if ("init" === $('#pageStatus').val()) {
        if ($.cookie('login_name')) {
            $('#loginNameInput').val($.cookie('login_name'));
            $('#keepLoginName').attr('checked', 'checked');
        } else {
            $('#loginNameInput').val();
            $('#keepLoginName').removeAttr('checked');
        }
    }
}