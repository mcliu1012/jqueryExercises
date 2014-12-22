$(function() {
    pULStatusInit();
    pULTableInit();
});

function pULStatusInit() {
    $("#pULSuccessInfoDiv").txtCrossFade("恭喜你！注册成功");
}

function pULTableInit() {
    pULGetLoginUserInfoList(function(loginUserInfoList) {
        $.each(loginUserInfoList, function(i, item) {
//            $("#pULTable")
        });
    });
}

function pULGetLoginUserInfoList(callback) {
    $.ajax({
        url: $.getBaseURL() + "/validateExercise/getLoginUserInfoList",
        type: "GET",
        cache: false,
        dataType: "json",
        success: function(data, textStatus) {
            callback(data.loginUserInfoList);
        },
        error: function(request, status, error) {

        },
        complete: function(XMLHttpRequest, textStatus) {

        }
    });
}
