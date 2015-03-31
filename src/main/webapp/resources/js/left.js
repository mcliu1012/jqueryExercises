$(function() {
    pLeftSetStatus();
    pLeftSetListener();
});

function pLeftSetStatus() {
    $(".active").removeClass("active");
    if ($("#pIndexContentDiv")[0]) {
        $("#pLeftRH").addClass("active");
    } else if ($("#pVERegistDiv")[0]) {
        $("#pLeftLaboratory").addClass("active");
    } else if($("#pGameOutDiv")[0]) {
        $("#pLeftGame").addClass("active");
    } else if ($("#pBootstrapMainDiv")[0]) {
        $("#pLeftBD").addClass("active");
    }
}

function pLeftSetListener() {
    $(".pLeftOuterDiv li").off("click").on("click", function() {
        var pLeftId = $(this).attr("id");
        switch (pLeftId) {
            case "pLeftRH":
                window.location.href = $.getBaseURL() + "/index";
                break;
            case "pLeftLaboratory":
                window.location.href = $.getBaseURL() + "/validateExercise";
                break;
            case "pLeftGame":
                window.location.href = $.getBaseURL() + "/game";
                break;
            case "pLeftBD":
                window.location.href = $.getBaseURL() + "/bootstrap";
                break;
        }
    });
}