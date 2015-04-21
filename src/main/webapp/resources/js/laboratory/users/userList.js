$(function() {
    pULStatusInit();
    pULJSTableInit();
});

function pULStatusInit() {

}

function pULJSTableInit() {
    pULGetLoginUserInfoList(function(loginUserInfoList) {
        $("#pULJSTable tbody").empty();
        var tableRow = "";
        if (loginUserInfoList.length <= 0) {
            tableRow += "<tr>当前还没有注册的用户！</tr>";
        } else {
            $.each(loginUserInfoList, function(i, item) {
                tableRow += "<tr><td class='pULIdTd width15percent'>" + item.id + "</td>" +
                    "<td class='pULLoginNameTd width25percent wrapByCharacter'>" + item.loginName + "</td>" +
                    "<td class='pULPasswordTd width40percent wrapByCharacter'>" + item.password + "</td>" +
                    "<td class='pULNameTd width20percent wrapByCharacter'>" + item.name + "</td></tr>";
            });
        }
        $("#pULJSTable tbody").append(tableRow);
        $("#pULJSTable").tablesorter( {sortList: [[0,0], [1,0]]} );
    });
}

function pULGetLoginUserInfoList(callback) {
    $.ajax({
        url: $.getBaseURL() + "/laboratory/getLoginUserInfoList",
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
