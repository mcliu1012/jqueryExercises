$(function() {
    pLeftSetListener();

    $('.active').removeClass('active');
    if ($('#pIndexContentDiv')[0]) {
        $('#pLeftRH').addClass('active');
    } else if ($('#pVEDiv')[0]) {
        $('#pLeftF1').addClass('active');
    }
});

function pLeftSetListener() {
    $('.pLeftOuterDiv li').off('click').on('click', function() {
        var pLeftId = $(this).attr('id');
        switch (pLeftId) {
            case 'pLeftRH':
                window.location.href = "index";
                break;
            case 'pLeftF1':
                window.location.href = "validateExercise";
                break;
            case 'pLeftF2':
                break;
            case 'pLeftF3':
                break;
        }
    });
}