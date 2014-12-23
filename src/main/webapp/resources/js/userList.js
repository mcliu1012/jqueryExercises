$(function() {
    pULStatusInit();
    pULTableInit();
});

function pULStatusInit() {

}

function pULTableInit() {
    pULGetLoginUserInfoList(function(loginUserInfoList) {
        $("#pULTable tbody").empty();
        var tableRow = "<tr><td>ID</td><td>Email</td><td>Password</td><td>Nick Name</td></tr>";
        if (loginUserInfoList.length <= 0) {
            tableRow += "<tr><td colspan='4'>当前还没有注册的用户！</td></tr>";
        } else {
            $.each(loginUserInfoList, function(i, item) {
                tableRow += "<tr><td>" + item.id + "</td>" +
                                "<td>" + item.loginName + "</td>" +
                                "<td>" + item.password + "</td>" +
                                "<td>" + item.name + "</td></tr>";
            });
        }
        $("#pULTable tbody").append(tableRow);
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
