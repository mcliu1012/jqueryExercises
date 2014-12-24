$(function() {
    pULStatusInit();
    pULTableInit();
});

function pULStatusInit() {

}

function pULTableInit() {
    pULGetLoginUserInfoList(function(loginUserInfoList) {
        $("#pULTable tbody").empty();
        var tableRow = "";
        if (loginUserInfoList.length <= 0) {
            tableRow += "<tr>当前还没有注册的用户！</tr>";
        } else {
            $.each(loginUserInfoList, function(i, item) {
                tableRow += "<tr><td class='pULIdTd width20percent'>" + item.id + "</td>" +
                                "<td class='pULLoginNameTd width20percent'>" + item.loginName + "</td>" +
                                "<td class='pULPasswordTd width20percent'>" + item.password + "</td>" +
                                "<td class='pULNameTd width20percent'>" + item.name + "</td></tr>";
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
