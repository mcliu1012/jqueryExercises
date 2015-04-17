$(function() {
    $("#pPRFConfirmBtn").off("click").on("click", function() {
        var pPRFPasswordInput = $("#pPRFPasswordInput").val();
        var pPRFConfirmPasswordInput = $("#pPRFConfirmPasswordInput").val();
        if (pPRFPasswordInput === "") {
            $("#pPRFPasswordInput").focus();
            return;
        } else if (pPRFConfirmPasswordInput === "") {
            $("#pPRFConfirmPasswordInput").focus();
            return;
        }

        $.ajax({
            url: $.getBaseURL() + "/passwordResetFinal",
            type: "POST",
            cache: false,
            data: {
                passwordFirst: $("input[type='password'][name='passwordFirst']").val(),
                password: $("input[type='password'][name='password']").val(),
                loginName: $("input[type='hidden'][name='loginName']").val()
            },
            dataType: "json",
            scriptCharset : "UTF-8",
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            beforeSend : function(xhr) {
                xhr.overrideMimeType("text/html;charset=UTF-8");
            },
            success: function(data, textStatus) {
                if (data.error) {
                    $(".errorMsg").text(data.error);
                    return;
                }
                window.location.href = $.getBaseURL() + "/passwordResetSuccess";
            },
            error: function(request, status, error) {
                window.location.href = $.getBaseURL() + "/login";
            },
            complete: function(XMLHttpRequest, textStatus) {

            }
        });
    });
});