$(function() {
    setPFCommitBtnClickHandler();
});

/**
 * 点击【提交】按钮
 */
function setPFCommitBtnClickHandler() {
    $("#pPFForm").off("submit").on("submit", function() {
        var loginNameInput = $("#pPFLoginNameInput").val();
        if (loginNameInput === "") {
            $("#pPFLoginNameInput").focus();
            return false;
        }
        return true;
    });
}
