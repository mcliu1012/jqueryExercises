$(function() {
    $("#pPRFConfirmBtn").off("click").on("click", function() {
        $.ajax({
            url: $.getBaseURL() + "/passwordResetFinal",
            type: "POST",
            cache: false,
            data: {

            },
            dataType: "json",
            scriptCharset : "UTF-8",
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            beforeSend : function(xhr) {
                xhr.overrideMimeType("text/html;charset=UTF-8");
            },
            success: function(data, textStatus) {

            },
            error: function(request, status, error) {

            },
            complete: function(XMLHttpRequest, textStatus) {

            }
        });
    });
});