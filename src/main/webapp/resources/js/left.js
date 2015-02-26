$(function() {
    pLeftSetStatus();
    pLeftSetListener();
});

function pLeftSetStatus() {
    $(".active").removeClass("active");
    if ($("#pIndexContentDiv")[0]) {
        $("#pLeftRH").addClass("active");
    } else if ($("#pVEDiv")[0]) {
        $("#pLeftJV").addClass("active");
    } else if($("#pGameOutDiv")[0]) {
        $("#pLeftGame").addClass("active");
    }
}

function pLeftSetListener() {
    $(".pLeftOuterDiv li").off("click").on("click", function() {
        var pLeftId = $(this).attr("id");
        switch (pLeftId) {
            case "pLeftRH":
                window.location.href = $.getBaseURL() + "/index";
                break;
            case "pLeftJV":
                window.location.href = $.getBaseURL() + "/validateExercise/init";
                break;
            case "pLeftGame":
                window.location.href = $.getBaseURL() + "/game";
                break;
            case "pLeftF3":
                break;
        }
    });
}