var madsType = "";
var contextPath = "/digital_signage/";
var index = "index";

/**
 * 初期化
 */
function init() {

    $("#main").show();

    $('[rel=popover]').popover();

    $('.squere').on({
        'mouseenter' : function() {
            $(this).find('p').show();
        },
        'mouseleave' : function() {
            $(this).find('p').hide();
        }
    });

    $(".menuitem").click(function() {
        window.location = $(this).find("a").attr("href");
        return false;
    });

    $('tbody tr').addClass('clickable').delegate('*', 'click', function() {
        return false;
    });

    smallmenu();

    // ハッシュタグ付きURL
    if (document.URL.indexOf("#") !== -1) {
        // メニュー表示
        smallmenuRestore();
    }

    else if ($("#mediaTop")[0] || $("#advertiserTop")[0]) {
        // TOP
        // smallmenu最小化
        smallmenuMinimize();
    }

    scroll();

    setDocumentUrl(document);

    // fixed #21822 mousewheelの場合、ツールチップを消す
    $(document).mousewheel(function(event, delta) {
        removePopover();
    });
}

/**
 * リサイズ
 */
$(function() {
    resizeWindow();
});

function resizeWindow() {

    $(window).off("resize").resize(function(event) {
        resizeHeight();
        resizeWidth();
        resizeTable();
    });
}
function resizeHeight() {
    // 全体の縦幅制御

    // 注文・注文練習縦伸縮処理
    if ($("#advertiserOrder")[0] || $("#advertiserPractice")[0] || $("#advertiserPureAdOrder")[0]) {
        var height = 500;
        if (mpOrderInfo.monitor) {
            height = 525;
        }
        var orderheight = Number($(window).height() - height);
        $("#orderEdit,#orderEditPractice,#adPaoOrderEdit").find(".shadowDesignParent").css("height", orderheight);
        $("#orderEdit,#orderEditPractice,#adPaoOrderEdit").find(".order-conditions-body").css("height", orderheight - 60);
        $("#orderEdit,#orderEditPractic,#adPaoOrderEdite").find(".order-conditions-body-cantSearch").css("height", orderheight - 60);
    } else if ($("#advertiserCreative")[0]) {
        $("#thumbnails").css("height", ($(window).height() - 251));
    } else if ($("#advertiserPureAdCreative")[0]) {
        $("#adPacThumbnails").css("height", ($(window).height() - 251));
    } else if ($("#advertiserMediaPlanSearch")[0]) {
        var mpsPlanHeight = Number(($(window).height()));
        $("#mpsForm").find(".shadowDesignParent").css("height", (mpsPlanHeight - 251)/2);
        $("#mpsForm").find("#showMpsSearchBtnMain").css("margin-top", (mpsPlanHeight - 209)/2 - 111);
    } else if ($("#advertiserMediaPlan")[0]) {
        var height = Number($(window).height() - 505);
        var dataTableHeight = parseInt($("#mpResultWrapper .dataTables_scrollBody .dataTable").css("height"), 10);
        if (height > dataTableHeight) {
            height = dataTableHeight;
        }
        $("#mpResultWrapper .DTFC_LeftBodyWrapper").css("height", height);
        $("#mpResultWrapper .dataTables_scrollBody").css("height", height + 17);

        var scrollBodyHeight = parseInt($("#mpResultWrapper .dataTables_scroll").css("height"), 10);
        $("#mpResultWrapper .DTFC_LeftWrapper").css("height", scrollBodyHeight - 17);
        $("#mpResultWrapper .DTFC_ScrollWrapper").css("height", scrollBodyHeight);
    }
}

function resizeWidth() {

    if (!$("#dialog-extend-fixed-container").find(".ui-dialog")[0]) {
        if ($('#madsType').val() === "media") {
            $(".ui-dialog").css({
                "left" : "50%",
                "margin-left" : "-103px"
            });
        } else if ($('#madsType').val() === "advertiser" || $('#madsType').val() === "blade") {
            $(".ui-dialog").css({
                "left" : "50%",
                "margin-left" : "-167px"
            });
        }
    }
    if ($("#advertiserOrder")[0] || $("#advertiserPractice")[0] || $("#advertiserPureAdOrder")[0]) {
        var orderWidth = Number($(window).width() - 1050);
        $("#resultChartDivMoniNames,#resultChartDivMoniNamesPra").css("width", orderWidth);
    }
}

function resizeTable() {
    if ($('div.dataTables_scrollBody')[0]) {
        if ($('#madsType').val() === "media") {
            // media
            if ($("#mediaMonitor")[0]) {
                resizeTableSetting($("#adFrameList_wrapper"), "adFrameList", 232);
            } else if ($("#approveListTable_wrapper")[0]) {
                resizeTableSetting($("#approveListTable_wrapper"), "approveListTable", 310);
                resizeTableSetting($("#unapproveListTable_wrapper"), "unapproveListTable", 307);
                resizeTableSetting($("#disapprovedListTable_wrapper"), "disapprovedListTable", 307);
            } else if ($("#pureAdProductTable_wrapper")[0]) {
                resizeTableSetting($("#pureAdProductTable_wrapper"), "pureAdProductTable", 220);
            } else if ($("#mediaPaoJdTbl_wrapper")[0]) {
                resizeTableSetting($("#mediaPaoJdTbl_wrapper"), "mediaPaoJdTbl", 220);
            }
        } else if ($('#madsType').val() === "advertiser") {
            // 広告主
            if ($("#advertiserCreative")[0]) {
                resizeTableSetting($("#materiallist_wrapper"), "materiallist", 267);
            } else if ($("#advertiserPlan")[0]) {
                resizeTableSetting($("#structList_wrapper"), "structList", 271);
            } else if ($("#advertiserCreativeMatch")[0]) {
                height = 271;
                resizeTableSetting($("#creativeMatchList_wrapper"), "creativeMatchList", height);
                datatablesStyleChange($("#creativeMatchList_wrapper"), "#69bf9a", "#c2e2d2");
            } else if ($("#advertiserBudget")[0]) {
                height = 604;
                resizeTableSetting($("#advertiserBudgetList_wrapper"), "advertiserBudgetList", height);
                resizeTableSetting($("#advertiserBudgetOnedayList_wrapper"), "advertiserBudgetOnedayList", height);
                datatablesStyleChange($("#advertiserBudgetList_wrapper"), "#90be52", "#dee493");
                datatablesStyleChange($("#advertiserBudgetOnedayList_wrapper"), "#90be52", "#dee493");
            } else if ($("#advertiserOrderList")[0]) {
                resizeTableSetting($("#orderedGroupList_wrapper"), "orderedGroupList", 322);
                if ($("#fixedList_wrapper:visible")[0]) {
                    resizeTableSetting($("#fixedList_wrapper"), "fixedList", 345);
                }
                if ($("#finishedList_wrapper:visible")[0]) {
                    resizeTableSetting($("#finishedList_wrapper"), "finishedList", 325);
                }
            } else if ($("#advertiserReport")[0]) {
                resizeTableSetting($("#structSummaryList_wrapper"), "structSummaryList", 613);
            } else if ($("#advertiserPureAdCreative")[0]) {
                resizeTableSetting($("#adPacMateriallist_wrapper"), "adPacMateriallist", 267);
            } else if ($("#advertiserPureAdOrderList")[0]) {
                if ($("#adPaoListRequestedTbl_wrapper").height()) {
                    resizeTableSetting($("#adPaoListRequestedTbl_wrapper"), "adPaoListRequestedTbl", 300);
                }
                if ($("#adPaoListFixedTbl_wrapper").height()) {
                    resizeTableSetting($("#adPaoListFixedTbl_wrapper"), "adPaoListFixedTbl", 300);
                }
            }
        }
    }
}

/**
 *
 * @param $datatableWrapper
 * @param targetTableId
 * @param height
 */
function resizeTableSetting($datatableWrapper, targetTableId, height) {
    var otable = $('#' + targetTableId).dataTable({
        "bRetrieve" : true,
        "sScrollY" : ($(window).height() - height),
        "bPaginate" : false,
        "bJQueryUI" : true
    });
    // datatables 横幅調整
    otable.fnAdjustColumnSizing();
    // datatables 縦幅調整
    var $tableScrollBody = $datatableWrapper.find(".dataTables_scrollBody");
    $tableScrollBody.css('height', ($(window).height() - height));
}

/**
 * スモールメニュ表示
 */
function smallmenu() {
    var dialogclass = "";
    if ($('#madsType').val() === "media") {
        dialogclass = 'smallmenumedia';
    } else if ($('#madsType').val() === "advertiser" || $('#madsType').val() === "blade") {
        dialogclass = 'smallmenuad';
    }
    $('#smenuMediaPlan').hide();
    $('#smenuPureAd').hide();
    $('#smenu').show();
    $('#smallmenu').dialog({
        "title" : "メニュー",
        "position" : [ "center", "top" ],
        "height" : 123,
        "resizable" : false,
        "dialogClass" : dialogclass
    }).dialogExtend({
        "closable" : false,
        "minimizable" : true,
        "titlebar" : "none"
    });

    $('.ui-dialog').css({
        "top" : "3px",
        "height" : "79px"
    });

    // 最小化ボタン押下
    $(".ui-dialog-titlebar-minimize, .ui-dialog-titlebar-minimize *").click(function() {
        smallmenuMinimize();
    });

    // リストアボタン押下時
    $(".ui-dialog-titlebar-restore, .ui-dialog-titlebar-restore span").click(function() {
        smallmenuRestore();
    });

    // ホバー時のその他グレースケール化
    $(".smallsquerelist div").children().hover(function() {
        // マウスホバーの処理
        $(this).siblings().css({
            "-webkit-filter" : "grayscale(50%)"
        }).addClass("grayscale");
    }, function() {
        // マウスアウトの処理
        $(this).siblings().css({
            "-webkit-filter" : "grayscale(0%)"
        }).removeClass("grayscale");

    });
    $(".selectedmenu").siblings().css({
        "-webkit-filter" : "grayscale(50%)"
    }).addClass("grayscale");

}

// サブメニュー最小化
function smallmenuMinimize() {
    $("#smallmenu").dialogExtend("minimize");
    $("#menutext").remove();
    $(".ui-dialog").css({
        "height" : "35px",
        "cursor" : "default"
    }).append("<span id='menutext'>メニュー</span>");
    $("#dialog-extend-fixed-container").find(".ui-dialog-titlebar").css({
        "margin-top" : "11px",
        "margin-right" : "4px"
    });

    $(".ui-dialog-draggable-handle").css({
        "background-image" : "none",
        "border" : "none"
    });

    // 最小ボックスクリックでリストア
    $("#dialog-extend-fixed-container").off('click').on('click', function() {
        smallmenuRestore();
    });
}

// サブメニューリストア
function smallmenuRestore() {
    $("#smallmenu").dialogExtend("restore");
    $("#smallmenu").css({
        "height" : "62px"
    });
    $('.ui-dialog').css({
        "height" : "79px"
    });

    $(".ui-dialog-titlebar").css({
        "margin-top" : "-4px",
        "margin-right" : "2px"
    });
    $(".ui-dialog-draggable-handle").css({
        "background-image" : "url('resources/img/common/dialogheader.png')",
        "border" : "1px solid #E4E4E4"
    });

    $("#menutext").remove();

}

/**
 * MADS変更
 */
$(function() {

    // userIDをキー madsIDをバリューとしたクッキー
    if ($.cookie($('#userId').val()) != null) {
        $('#madsId').val($.cookie($('#userId').val()));
    } else {
        $('#madsId').val($('#madsId option:first-child').val());
    }
    $("#madsId").change(function() {
        $.cookie($('#userId').val(), $("#madsId").val(), {
            secure : true
        });
    });

    function format(mads) {
        var str = "";
        if (mads.text.indexOf("media") !== -1) {
            // メディア
            var madsname = mads.text;
            madsname = madsname.replace(/\(media\)/, "");
            str = "<div class='madsmedia'>" + madsname + "</div>";
            return str;
        } else if (mads.text.indexOf("advertiser") !== -1) {
            // 広告主
            var madsname = mads.text;
            madsname = madsname.replace(/\(advertiser\)/, "");

            str = "<div class='madsadvertiser'>" + madsname + "</div>";
            return str;
        } else if (mads.text.indexOf("blade") !== -1) {
            // blade
            var madsname = mads.text;
            madsname = madsname.replace(/\(blade\)/, "");

            str = "<div class='madsadvertiser'>" + madsname + "</div>";
            return str;
        }
    }

    $('#madsId').select2({
        formatResult : format,
        formatSelection : format,
        escapeMarkup : function(m) {
            return m;
        }
    });

    $('#madsId').bind('change', function() {
        var data = {
            madsId : $(this).val()
        };

        $.ajax({
            type : 'POST',
            data : data,
            cache : false,
            url : 'changeMads',
            dataType : 'text',
            complete : function(XMLHttpRequest, textStatus) {
                window.location.href = "";
            }
        });
    });

});

/**
 * スクロール
 */
function scroll() {

    $('a.pager').off('click').on('click', function() {
        var madsType = $("#madsType").val();
        if (madsType == "advertiser" && mpOrderInfo.monitor) {
            // メディアプラン＝＞注文の場合
            adOrderInitSubMenu($(this));
        } else {
            // 上記以外の場合
            var id = "";
            id = $(this).attr("href").split(contextPath)[1];
            // var indexUrl = contextPath + index;
            // window.location.href = indexUrl + "#" + id;
            window.location.href = id;
            //
            setDocumentUrl(document);
            smallmenuRestore();
        }
        return false;
    });
}

/**
 * URLセット
 *
 * @param documentUrl
 */
function setDocumentUrl(document) {

    var documentUrl = document.URL;

    // メディアプラン対象のクリン
    mpInfo = null;

    // 子画面のurlをチェックし、親画面を設定する。
    documentUrl = checkDirectAccessUrl(documentUrl);
    setUrl(documentUrl);
}

/**
 * 子画面のurlをチェックし、親画面を設定する。
 *
 * @param documentUrl
 */
function checkDirectAccessUrl(documentUrl){
    if (documentUrl.indexOf("#") !== -1) {
        if (documentUrl.split("#")[1] === "advertiserMediaPlanSearch" || documentUrl.split("#")[1] === "advertiserMediaPlan") {
            documentUrl = contextPath + 'index#advertiserMediaPlanMenu';
        }
    }
    return documentUrl;
}

function setUrl(url) {
    if (url.indexOf("#") !== -1) {
        // ハッシュタグ付きURL
        var tag = url.split("#")[1];
        var hash = "";
        var param = 0;
        var isMediaHasMonitor = $('#madsType').val() === "media" && $('#pureAdMonitorCount').val() === "0";
        var isAccessUnable = tag === "mediaPureAdProduct" || tag === "mediaPureAdOrderJudgement";
        if (isMediaHasMonitor && isAccessUnable) {
            window.location.href = url.split("#")[0];
        }
        if ($('#madsType').val() === "media") {
            hash = tag;
            switch (tag) {
            case "mediaMonitor":
            case "mediaAdJudgement":
            case "mediaPureAdProduct":
            case "mediaPureAdOrderJudgement":
                break;
            default:
                hash = "";
                break;
            }
        } else if ($('#madsType').val() === "advertiser") {
            // ハッシュ内にパラメータ無し
            if (tag.indexOf("&") == -1) {
                hash = tag;
                switch (hash) {
                case "advertiserCreative":
                case "advertiserPlan":
                case "advertiserBudget":
                case "advertiserAddCreative":
                case "advertiserOrder":
                case "advertiserReport":
                case "advertiserPractice":
                case "advertiserOrderList":
                case "advertiserPureAdCreative":
                case "advertiserPureAdOrder":
                case "advertiserPureAdOrderList":
                case "advertiserMediaPlanMenu":
                case "advertiserMediaPlanSearch":
                case "advertiserMediaPlan":
                    break;
                default:
                    hash = "";
                    break;
                }
            } else {
                // #advertiserXXX&p=XXからハッシュとパラメータに分解
                var p = tag.split("&")[1];
                param = p.split("p=")[1];
                hash = tag.split("&")[0];
            }
        } else if ($('#madsType').val() === "blade") {
            hash = tag;
            switch (hash) {
            case "advertiserTop":
            case "advertiserPractice":
                break;
            default:
                hash = "";
                alert("現在利用できるメニューは、「注文練習」のみです。");
                break;
            }
        }

        if (param == 0) {
            url = contextPath + hash;
            updateScroll(url, hash);
        } else {
            switch (hash) {
            case "advertiserBudget":
                url = contextPath + hash + "?structId=" + param;
                break;
            case "advertiserAddCreative":
                url = contextPath + hash + "?structId=" + param;
                break;
            default:
                url = contextPath + hash;
                break;
            }
            updateScrollParam(url, hash);
        }

    }
}

function updateScroll(url, hash) {
    var href = contextPath + index;
    if (hash !== "") {
        href = href + "#" + hash;
    }
    window.location.href = href;
    
    if (hash !== "") {
        mainDrawAnimate(url);
    }

    return false;
}

function updateScrollParam(url, hash, param) {
    mainDrawAnimate(url);
    return false;
}

/**
 * 各ページ遷移時のアニメーション処理
 *
 * @param url
 */
function mainDrawAnimate(url) {
    var size = $(window).width();
    size = parseInt(size) + 2000;
    $('.main').delay(100).animate({
        marginLeft : '-=' + size + 'px',
        marginRight : '+=' + size + 'px',
        opacity : '0'
    }, 750).css({
        marginLeft : "-1500px",
        marginRight : "1500px"
    });
    size = 0;

    $.ajax({
        type : 'GET',
        url : url,
        dataType : 'html',
        cache : false,
        success : function(data) {
            $('.main').html(data);
            $('.main').delay(100).animate({
                marginLeft : '0px',
                marginRight : '0px',
                opacity : '1'
            }, {
                duration : 750,
                complete : function() {
                    // メディア
                    if ($("#mediaMonitor")[0]) {
                        var oTable = $("#adFrameList").dataTable();
                        oTable.fnAdjustColumnSizing();
                    }
                    if ($("#mediaAdJudgement")[0]) {
                        var oTable = $("#unapproveListTable").dataTable();
                        oTable.fnAdjustColumnSizing();
                    }

                    // 広告主
                    if ($("#advertiserOrderList")[0]) {
                        var oTable = $("#orderedGroupList").dataTable();
                        oTable.fnAdjustColumnSizing();
                    }
                    if ($("#advertiserReport")[0]) {
                        var oTable = $("#structSummaryList").dataTable();
                        oTable.fnAdjustColumnSizing();
                    }
                },
                step : function(param) {
                    if ((param * 10) % 2 === 0) {
                        // メディア
                        if ($("#mediaMonitor")[0]) {
                            var oTable = $("#adFrameList").dataTable();
                            oTable.fnAdjustColumnSizing();
                        }
                        if ($("#mediaAdJudgement")[0]) {
                            var oTable = $("#unapproveListTable").dataTable();
                            oTable.fnAdjustColumnSizing();
                        }

                        // 広告主
                        if ($("#advertiserOrderList")[0]) {
                            var oTable = $("#orderedGroupList").dataTable();
                            oTable.fnAdjustColumnSizing();
                        }
                        if ($("#advertiserReport")[0]) {
                            var oTable = $("#structSummaryList").dataTable();
                            oTable.fnAdjustColumnSizing();
                        }
                    }
                }
            });
            record = 0;
        },
        error : function(xhr, textStatus, error) {
            window.location.href = contextPath + index;
        },
        complete : function(XMLHttpRequest, textStatus) {
            if ($('#madsType').val() === "media") {
                mediaScrollComp();
            } else if ($('#madsType').val() === "advertiser" || $('#madsType').val() === "blade") {
                advertiserScrollComp();
            }
        }
    });
    $(".main").queue([]);
    $(".main").stop();
}

/**
 * media用画面表示
 */
function mediaScrollComp() {
    materialrecord = 0;
    programrecord = 0;
    record_num = 30;
    materialautoscroll = true;
    programautoscroll = true;
    var materialSearchURL = "async/mediaSearchMaterialList";
    $(".selectedmenu").removeClass("selectedmenu");
    $(".notselectedmenu").removeClass("notselectedmenu");
    if ($("#mediaTop")[0]) {
        // TOP
        // smallmenu最小化
        smallmenuMinimize();
        $("#menuiconFirst").removeClass();
        $("#menuiconSecond").removeClass().unbind();
        $("#menuiconThird").removeClass().unbind();
        $("#menuType").removeClass().unbind();
        scroll();
        $('a[rel=popover]').popover();
    } else {
        if ($("#mediaMonitor")[0]) {
            // 放映枠
            $("#smallmenuMediaMonitor").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().addClass("mediaMonitor");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            record = 0;
            mediaMonitorInit(record);
            addSubmitEvent();
        } else if ($("#mediaAdJudgement")[0]) {
            // 掲載可否
            $("#smallmenuMediaAdJudgement").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaAdJudgement");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            searchAdJudgement();

        } else if ($("#mediaPureAdProduct")[0]) {
            // 商品登録
            $('#smenu').hide();
            $('#smenuMediaPlan').hide();
            $('#smenuPureAd').show();
            $("#smallmenuMediaPureAdProduct").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaPureAdProduct");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("locationType");
            record = 0;
            mediaPapInit(record);
            addSubmitEvent();
        } else if ($("#mediaPureAdOrderJudgement")[0]) {
            // 注文受付
            $('#smenu').hide();
            $('#smenuMediaPlan').hide();
            $('#smenuPureAd').show();
            $("#smallmenuMediaPureAdOrderJudgement").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaPureAdOrderJudgement");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("locationType");
            record = 0;
            mediaPureAdOrderJudgementInit(record);

        } else if ($("#mediaMaterial")[0]) {
            // 素材
            $("#smallmenuMediaMaterial").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaMaterial");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            searchMaterial(materialrecord, materialSearchURL);
            addSubmitEvent();
        } else if ($("#mediaProgram")[0]) {
            // 番組
            $("#smallmenuMediaProgram").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaProgram");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            searchMaterial(materialrecord, materialSearchURL);
            searchProgram(programrecord);
            $('#materialThumb li').draggable({
                connectToSortable : '.materialThumb',
                helper : 'clone',
                revert : 'invalid'
            });
            $('#setProgramList').sortable({
                connectWith : '.materialThumb',
                revert : true
            });
            $('#defaultMaterial').sortable({
                connectWith : '.materialThumb',
                revert : true
            });
            $('#makeprogram').disableSelection();
            addSubmitEvent();
        } else if ($("#mediaSchedule")[0]) {
            // 時間割
            $("#smallmenuMediaSchedule").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaSchedule");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            // TODO 福沢 scheduleSearch(record)実行タイミング要確認
            record = 0;
            scheduleSearchAjax(record);
            programSearchForSchedule();
            addSubmitEvent();
        } else if ($("#mediaMonitorAirTime")[0]) {
            // 紐付け
            $("#smallmenuMediaMonitorAirTime").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("mediaMonitorAirTime");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            var monitorSearchUrl = "async/mediaSearchMonitorListForMonitorAirTime";
            record = 0;
            searchMonitor(record, monitorSearchUrl);
            searchAirTimeForMoniAir(record);
            addSubmitEvent();
        }
    }
    $(".selectedmenu").parent().siblings().children("a").addClass("notselectedmenu");
}

/**
 * advertiser用画面表示
 */
function advertiserScrollComp() {

    var materialSearchURL = "async/advertiserSearchMaterialList";
    $(".selectedmenu").removeClass("selectedmenu");
    $(".notselectedmenu").removeClass("notselectedmenu");
    if ($("#advertiserTop")[0]) {
        // TOP
        // smallmenu最小化
        smallmenuMinimize();
        $("#menuiconFirst").removeClass().unbind();
        $("#menuiconSecond").removeClass().unbind();
        $("#menuiconThird").removeClass().unbind();
        $("#menuType").removeClass().unbind();
        scroll();
        $('a[rel=popover]').popover();
    } else {
        if ($("#advertiserCreative")[0]) {
            // 広告素材
            $("#smallmenuAdvertiserCreative").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserAdCreative");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            materialrecord = 0;
            materialautoscroll = true;
            searchMaterial(materialrecord, materialSearchURL);
            addSubmitEvent();
        } else if ($("#advertiserPlan")[0]) {
            // ストラクト一覧
            $("#smallmenuAdvertiserPlan").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Large");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            advertiserStructResultSearchStructResult();
            addSubmitEvent();
        } else if ($("#advertiserBudget")[0]) {
            // 予算管理
            $("#smallmenuAdvertiserBudget").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Middle");
            $("#menuiconSecond").removeClass().unbind().addClass("advertiserBudget_Large");
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            advertiserBudgetInit();
            addSubmitEvent();
        } else if ($("#advertiserOrder")[0]) {
            // 注文
            $('#smenuPureAd').hide();
            $('#smenuMediaPlan').hide();
            $('#smenu').show();
            $('#smallmenu').parent().removeClass("smallmenuMediaPlan");
            $('#smallmenu').parent().removeClass("smallmenuadPureAd");
            $('#smallmenu').parent().addClass("smallmenuad");
            $("#smallmenuAdvertiserOrder").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserAdOrder_Large");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            searchOrder();
        } else if ($("#advertiserCreativeMatch")[0]) {
            // 素材紐付
            $("#smallmenuAdvertiserPlan").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Middle");
            $("#menuiconSecond").removeClass().unbind().addClass("advertiserAddCreative_Large");
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            advertiserCreativeMatchInit();
            addSubmitEvent();
        } else if ($("#advertiserOrderList")[0]) {
            // 注文一覧
            $("#smallmenuAdvertiserOrderList").addClass("selectedmenu");
            var firstClassName = $("#menuiconFirst").attr("class");
            var secondClassName = $("#menuiconSecond").attr("class");
            if (firstClassName === undefined) {
                // その他からの遷移の場合
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuiconSecond").removeClass().unbind();
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else if (firstClassName.indexOf("advertiserPlan") >= 0 && (secondClassName.indexOf("advertiserOrderlist") >= 0)) {
                // 放映計画からの遷移の場合
                $("#smallmenuAdvertiserPlan").addClass("selectedmenu");
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Middle");
                $("#menuiconSecond").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else if ((firstClassName.indexOf("advertiserPlan") >= 0) && (secondClassName.indexOf("advertiserBudget") >= 0)) {
                // 予算管理からの遷移の場合
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Small");
                $("#menuiconSecond").removeClass().unbind().addClass("advertiserBudget_Middle");
                $("#menuiconThird").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else if ((firstClassName.indexOf("advertiserPlan") >= 0) && (secondClassName.indexOf("advertiserReport") >= 0)) {
                // 放映計画→放映実績からの遷移の場合
                $("#smallmenuAdvertiserReport").addClass("selectedmenu");
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Small");
                $("#menuiconSecond").removeClass().unbind().addClass("advertiserReport_Middle");
                $("#menuiconThird").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else if ((firstClassName.indexOf("advertiserReport") >= 0)) {
                // 放映実績からの遷移の場合
                $("#smallmenuAdvertiserReport").addClass("selectedmenu");
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserReport_Middle");
                $("#menuiconSecond").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else {
                // その他からの遷移の場合
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserOrderlist_Large");
                $("#menuiconSecond").removeClass().unbind();
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
            }
            // 注文一覧検索
            var record = 0;
            var structId = 0;
            if (orderListGetSrcSelectedStructId() !== 0) {
                structId = orderListGetSrcSelectedStructId();
            }
            advertiserOrderListInit(record, structId);
        } else if ($("#advertiserReport")[0]) {
            $("#smallmenuAdvertiserReport").addClass("selectedmenu");
            var firstClassName = $("#menuiconFirst").attr("class");
            var secondClassName = $("#menuiconSecond").attr("class");
            var thirdClassName = $("#menuiconThird").attr("class");
            if (firstClassName === undefined || orderListSrcSelectedStructId === null || orderListSrcSelectedStructId === 0) {
                // 放映実績
                $("#smallmenuAdvertiserReport").addClass("selectedmenu");
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserReport_Large");
                $("#menuiconSecond").removeClass().unbind();
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
                // Top又はmenuからの遷移時「放映計画へ」ボタン非表示
                $("#backStructPageFromReportBtn").css("display", "none");
            } else if ((firstClassName.indexOf("advertiserPlan") >= 0) && (secondClassName.indexOf("advertiserReport") >= 0)
                    && (thirdClassName.indexOf("advertiserOrderlist") >= 0)) {
                // 放映計画→放映実績→注文一覧からの戻るボタン
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserPlan_Middle");
                $("#menuiconSecond").removeClass().unbind().addClass("advertiserReport_Large");
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
            } else {
                // 放映実績
                $("#smallmenuAdvertiserReport").addClass("selectedmenu");
                $("#menuiconFirst").removeClass().unbind().addClass("advertiserReport_Large");
                $("#menuiconSecond").removeClass().unbind();
                $("#menuiconThird").removeClass().unbind();
                $("#menuType").removeClass().unbind().addClass("networkType");
                // Top又はmenuからの遷移時「放映計画へ」ボタン非表示
                $("#backStructPageFromReportBtn").css("display", "none");
            }

            advertiserReportSearchReportResult();
            // addSubmitEvent();

        } else if ($("#advertiserPractice")[0]) {
            // 注文練習
            $("#smallmenuAdvertiserPractice").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPractice_Large");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("networkType");
            $(".smallsquere").addClass("notselectedmenu");
            adOrderPractiseReady();
        } else if ($("#advertiserPureAdCreative")[0]) {
            var searchURL = "async/advertiserSearchPureAdCreativeList";
            // 広告素材
            $('#smenu').hide();
            $('#smenuMediaPlan').hide();
            $('#smenuPureAd').show();
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuadPureAd");
            $("#smallmenuAdvertiserPureAdCreative").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPureAdCreative");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("locationType");
            materialrecord = 0;
            materialautoscroll = true;
            searchAdPacCreative(materialrecord, searchURL);
            addSubmitEvent();
        } else if ($("#advertiserPureAdOrder")[0]) {
            // 注文
            $('#smenu').hide();
            $('#smenuMediaPlan').hide();
            $('#smenuPureAd').show();
            $('#smallmenu').parent().removeClass("smallmenuMediaPlan");
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuadPureAd");
            $("#smallmenuAdvertiserPureAdOrder").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPureAdOrder");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("locationType");
            adPaoSearchOrder();
        } else if ($("#advertiserPureAdOrderList")[0]) {
            // 注文一覧（純広）
            $('#smenu').hide();
            $('#smenuMediaPlan').hide();
            $('#smenuPureAd').show();
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuadPureAd");
            $("#smallmenuAdvertiserPureAdOrderList").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserPureAdOrderList");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("locationType");
            var record = 0;
            adPaoListInit(record);
        } else if ($("#advertiserMediaPlanMenu")[0]) {
            // メディアプランメニュー
            $('#smenu').hide();
            $('#smenuPureAd').hide();
            $('#smenuMediaPlan').show();
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuMediaPlan");
            $("#smallmenuMediaPlanMenu").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserMediaPlanMenu");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("mediaPlan");
            mpMenuInit();
        } else if ($("#advertiserMediaPlanSearch")[0]) {
            // メディアプラン検索画面
            $('#smenu').hide();
            $('#smenuPureAd').hide();
            $('#smenuMediaPlan').show();
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuMediaPlan");
            $("#smallmenuMediaPlanMenu").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserMediaPlanMenu");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("mediaPlan");
            mpsInit();
        } else if ($("#advertiserMediaPlan")[0]) {
            // メディアプラン画面
            $('#smenu').hide();
            $('#smenuPureAd').hide();
            $('#smenuMediaPlan').show();
            $('#smallmenu').parent().removeClass("smallmenuad");
            $('#smallmenu').parent().addClass("smallmenuMediaPlan");
            $("#smallmenuMediaPlanMenu").addClass("selectedmenu");
            $("#menuiconFirst").removeClass().unbind().addClass("advertiserMediaPlanMenu");
            $("#menuiconSecond").removeClass().unbind();
            $("#menuiconThird").removeClass().unbind();
            $("#menuType").removeClass().unbind().addClass("mediaPlan");
            mpInit();
        }
    }
    $(".selectedmenu").parent().siblings().children("a").addClass("notselectedmenu");
}

/**
 * 素材 小サムネイル拡大表示
 *
 * @param img
 */
function imgPopover(img) {
    img.popover({
        html : true,
        placement : 'right',
        trigger : 'hover',
        items : '[title]',
        content : function() {
            var src = $(this).attr("src");
            return "<img src='" + src + "' style='z-index:9999'>";
        }
    });
    img.off("show").on("show", function(event) {
        // イベント伝達処理を停止
        event.stopPropagation();
    }).on("hidden", function(event) {
        // イベント伝達処理を停止
        event.stopPropagation();
    });

}

/**
 * 3点リーダ文字ポップオーバー 作成
 *
 * @param $target
 * @param text
 * @param placement
 * @param maxlen
 *
 */
function minimizeTextPopover($target, text, placement, maxlen) {
    var minimizeText = $.htmlspecialchars(minimizeString(text, maxlen));
    var content = $.htmlspecialchars(text);

    if (minimizeText == content) {
        return;
    }

    var option = {
        html : true,
        placement : placement,
        trigger : "hover",
        container : "body",
        content : function() {
            return "<div class='wrapByCharacter'>" + content + "</div>";
        }
    };

    $target.off("show").on("show", function(event) {
        removePopover();

        // イベント伝達処理を停止
        event.stopPropagation();
    }).on("hidden", function(event) {
        // イベント伝達処理を停止
        event.stopPropagation();
    });

    $target.popover("destroy").popover(option);
}

/**
 * 特殊文字をエスケープ
 */
$(function() {
    $.extend({
        htmlspecialchars : function htmlspecialchars(ch) {
            if (ch != null && ch != undefined) {

                ch = ch.replace(/&/g, "&amp;");
                ch = ch.replace(/"/g, "&quot;");
                ch = ch.replace(/'/g, "&#039;");
                ch = ch.replace(/</g, "&lt;");
                ch = ch.replace(/>/g, "&gt;");
            }
            return ch;
        }
    });
});

$(function() {
    $.extend($.fn, {
        /**
         * 半透明のレイヤーを追加する
         */
        mask : function mask() {
            $(this).prepend("<div class='mask' style='position: absolute;'></div>");
            $(this).addClass("ui-state-disabled");
            $(".mask").css({
                "display" : "block",
                "width" : this.width(),
                "height" : this.height()
            });
            $(this).find("*").disable();
        },

        /**
         * 半透明のレイヤーを削除する
         */
        unMask : function unMask() {
            $(this).find(".mask").remove();
            $(this).removeClass("ui-state-disabled");
            $(this).find("*").enable();
        },

        /**
         * アニメーション 効果は指定する
         */
        txtCrossFade : function txtCrossFade(text, fadeIn, delay, fadeOut) {
            if (fadeIn === null) {
                fadeIn = 1000;
            }
            if (delay === null) {
                delay = 1500;
            }
            if (fadeOut === null) {
                fadeOut = 2000;
            }
            $(this).text(text);
            $(this).fadeIn(1000).delay(1500).fadeOut(2000);
        },

        disable : function() {
            return this.each(function() {
                if (typeof this.disabled != "undefined") {
                    $(this).data("jquery.disabled", this.disabled);

                    this.disabled = true;
                }
            });
        },

        enable : function() {
            return this.each(function() {
                if (typeof this.disabled != "undefined") {
                    this.disabled = $(this).data("jquery.disabled");
                }
            });
        }
    });
});

/**
 * 0埋め
 *
 * @param num
 * @returns
 */
function addZero(num) {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

/**
 * 3点リーダ 作成
 *
 * @param str
 * @param maxlen
 * @returns
 */
function minimizeString(str, maxlen) {

    var result = str;
    if (str != null) {
        var encode = encodeURI(str);
        var match = encode.match(/%[0-9A-F]{2}/g, '*');
        var len = 0;
        if (match != null) {
            // 2byte以上含む
            for (var i = 0; i < str.length; i++, len++) {
                if (str.charAt(i) === "%") {
                    if (str.charAt(++i) === "u") {
                        i += 3;
                        len++;
                    }
                    i++;
                }
            }
        } else {
            // 1byteのみ
            len = str.length;
        }
        if (len > maxlen) {
            result = str.substring(0, maxlen - 1) + "...";
        }
    }
    return result;
}

/**
 * 日付フォーマット
 *
 * @param time
 * @returns {String}
 */

function changeDateFormat(time) {
    if (time == null) {
        return "";
    }
    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var result = year + '/' + addZero(month) + '/' + addZero(day);
    return result;
}

/**
 * 時間フォーマット
 *
 * @param time
 * @returns {String}
 */
function changeTimeFormat(time) {
    if (time == null) {
        return time;
    }
    var d = new Date(time);
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var result = addZero(hours) + ":" + addZero(minutes);
    return result;
}

/**
 * 日時フォーマット(yyyy-MM-dd hh:mm:dd:ss)
 *
 * @param time
 * @returns {String}
 */
function changeDateTimeFormat(time) {
    if (time == null) {
        return time;
    }
    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var result = year + '/' + addZero(month) + '/' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
    return result;
}

/**
 * 日時フォーマット(yyyy-MM-dd hh:mm:dd:ss.S)
 *
 * @param time
 * @returns
 */
function changeDateTimeFormatForParam(time) {
    if (time == null) {
        return time;
    } else if (time < 0) {
        return "0001-01-01 00:00:00.0";
    }
    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var msecond = d.getMilliseconds();
    var result = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second) + '.' + msecond;
    return result;
}

/**
 * 数字3桁ごとにカンマ区切り
 *
 * @param num
 * @returns
 */
function commaDelimited(num) {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

/**
 * フロート数加計算
 */
function floatAdd(arg1, arg2) {
    var r1 = 0, r2 = 0, m, arr;
    arr = arg1.toString().split(".");
    if (arr.length > 1) {
        r1 = arr[1].length;
    }
    arr = arg2.toString().split(".");
    if (arr.length > 1) {
        r2 = arr[1].length;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (floatMul(arg1, m) + floatMul(arg2, m)) / m;
}

/**
 * フロート数引き算
 */
function floatSub(arg1, arg2) {
    var r1 = 0, r2 = 0, m, n, arr;
    arr = arg1.toString().split(".");
    if (arr.length > 1) {
        r1 = arr[1].length;
    }
    arr = arg2.toString().split(".");
    if (arr.length > 1) {
        r2 = arr[1].length;
    }
    n = Math.max(r1, r2);
    m = Math.pow(10, n);
    return round((floatMul(arg1, m) - floatMul(arg2, m)) / m, n);
}

/**
 * フロート数乗計算
 */
function floatMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString(), arr;
    arr = s1.split(".");
    if (arr.length > 1) {
        m += arr[1].length;
    }
    arr = s2.split(".");
    if (arr.length > 1) {
        m += arr[1].length;
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

/**
 * フロート数Division計算
 */
function floatDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2, arr;
    arr = arg1.toString().split(".");
    if (arr.length > 1) {
        t1 = arr[1].length;
    }
    arr = arg2.toString().split(".");
    if (arr.length > 1) {
        t2 = arr[1].length;
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

/**
 * 四捨五上げ計算
 */
function round(value, places) {
    if (!places) {
        places = 0;
    }
    var m = Math.pow(10, places);
    return Math.round(floatMul(value, m)) / m;
}

/**
 * 切り捨て計算
 */
function floor(value, places) {
    if (!places) {
        places = 0;
    }
    var m = Math.pow(10, places);
    return Math.floor(floatMul(value, m)) / m;
}

/**
 * 切り上げ計算
 */
function ceil(value, places) {
    if (!places) {
        places = 0;
    }
    var m = Math.pow(10, places);
    return Math.ceil(floatMul(value, m)) / m;
}

/**
 * 小数の端数処理を実行する。
 *
 * @param num
 *            端数処理を実施する数値
 * @param scale
 *            処理を実施する桁数（小数点以下2桁目の場合は「2」を指定）
 * @param roundMode
 *            端数処理の方法（四捨五入：HALF_UP 切り捨て：DOWN 切り上げ：UP）
 */
function roundNumber(num, scale, roundMode) {
    var scaleNum = 1;
    for (var int = 0; int < scale; int++) {
        scaleNum = scaleNum + "0";
    }

    var targetNum = num * scaleNum;
    var roundedNum = 0;
    switch (roundMode) {
    case "HALF_UP":
        roundedNum = Math.round(targetNum) / scaleNum;
        break;

    case "DOWN":
        roundedNum = Math.floor(targetNum) / scaleNum;
        break;

    case "UP":
        roundedNum = Math.ceil(targetNum) / scaleNum;
        break;

    default:
        roundedNum = num;
        break;
    }

    if (scale <= 0) {
        return roundedNum;
    }

    var result = "";
    var spritedNum = String(roundedNum).split(".");
    var integralPart = spritedNum[0];
    if (spritedNum.length === 1) {
        result = integralPart + ".";
        for (var i = 0; i < scale; i++) {
            result = result + "0";
        }
    } else {
        result = integralPart + ".";
        var decimalPart = spritedNum[1];
        while (decimalPart.length < scale) {
            decimalPart = decimalPart + "0";
        }
        result = result + decimalPart;
    }
    return result;
}

/**
 * 指定された年月の月末日を返します。
 *
 * @param year
 * @param month
 */
function getEndOfMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

/**
 * 本日日付を返します。
 */
function getToday() {
    var x = new Date();
    return new Date(x.getFullYear() + "/" + (x.getMonth() + 1) + "/" + x.getDate());
}

/**
 * ローディング表示
 */
function showLoading() {

    var left = Math.floor(($(window).width()) / 2);
    var top = Math.floor(($(window).height()) / 2) + $(window).scrollTop();

    $(document.body).append(
            "<div id ='loading'> <div id='background'></div>" + "<div id='loadingimg' style='left:" + left + "px; top:" + top + "px;'><img src ='"
                    + contextPath + "resources/img/common/loading.gif'></div>" + "</div>");
}

/**
 * ローディング削除
 */
function hideLoading() {
    $("#loading").remove();
}

/**
 * 各画面datatableのレイアウト変更
 */
function datatablesStyleChange($datatableWrapper, deepColor, shallowColor) {
    var $tableScrollBody = $datatableWrapper.find(".dataTables_scrollBody");
    var $tableThead = $datatableWrapper.find("thead");
    var $tableTbody = $datatableWrapper.find("tbody");

    // 初期化
    $tableScrollBody.css("border-left", "none").css("border-bottom", "none").css("border-right", "none");
    $tableThead.css("border-left", "none").css("border-top", "none").css("border-right", "none");
    $tableTbody.css("border-left", "none").css("border-bottom", "none").css("border-right", "none");

    // datatable縦幅取得
    var scrollBodyHeight = $tableScrollBody.css("height");
    if (scrollBodyHeight != null && scrollBodyHeight !== "") {
        if (scrollBodyHeight.indexOf("px") !== -1) {
            scrollBodyHeight = Number(scrollBodyHeight.replace("px", ""));
        }
    }
    var tableHeight = $datatableWrapper.find("tbody").css("height");
    if (tableHeight != null && tableHeight !== "") {
        if (tableHeight.indexOf("px") !== -1) {
            tableHeight = Number(tableHeight.replace("px", ""));
        }
    }

    // 設定情報定義
    var deepColorSetting = "3px solid " + deepColor;
    var shallowColorSetting = "3px solid " + shallowColor;

    // レイアウトを適応
    if (scrollBodyHeight > tableHeight) {
        $tableThead.css("border-left", deepColorSetting).css("border-top", deepColorSetting).css("border-right", deepColorSetting);
        $tableTbody.css("border-left", shallowColorSetting).css("border-bottom", shallowColorSetting).css("border-right", shallowColorSetting);

    } else {
        $tableScrollBody.css("border-left", shallowColorSetting).css("border-bottom", shallowColorSetting).css("border-right", shallowColorSetting);
    }
    $datatableWrapper.find(".dataTables_scrollHead").css("background-color", deepColor);
    $tableScrollBody.css("overflow", "");
    $tableScrollBody.css("overflow-y", "auto").css("overflow-x", "hidden");
}

function preview() {
    var id = $('#creativeId').val();
    if ($("input#fileType").val() === 'wmv') {
        $('#previewwmv').empty().append(makeWmv($('#matedata' + id + ' [name="d_editimg"]').val(), 1280, 720));
        if ($("#editimg").attr("src") !== "resources/img/common/errorImg.png") {
            $('#previewmovie').modal('show').addClass("frontModal");
            $('.modal-backdrop:eq(1)').addClass("secondBackdrop");
        }
        return false;
    } else if ($("input#fileType").val() === 'jpg') {
        $('#previewimg').empty().append("<img src=" + $.htmlspecialchars($('#editimg').attr('src')) + ">");
        if ($("#editimg").attr("src") !== "resources/img/common/newpicture.png") {
            if ($('#preview img').width() < 1920) {
                $('#preview img').attr({
                    'style' : 'width: 1920px;'
                });
            }
            $('#preview').modal('show').addClass("frontModal");
            $('.modal-backdrop:eq(1)').addClass("secondBackdrop");
        }
        return false;

    }
}

function setCookie(name, value) {
    // クッキー(クッキー名, クッキーの値);
    var path = location.pathname;
    var paths = new Array();
    paths = path.split("/");
    if (paths[paths.length - 1] != "") {
        paths[paths.length - 1] = "";
        path = paths.join("/");
    }
    // 有効期限の日付
    var extime = new Date().getTime();
    var cltime = new Date(extime + (60 * 60 * 24 * 1000 * 365));
    var exdate = cltime.toUTCString();
    var s = "";
    s += name + "=" + escape(value);
    s += "; path=" + path;
    s += "; secure=" + true;
    s += "; expires=" + exdate + "; ";
    // クッキー保存
    document.cookie = s;
}

function getCookie(name) {
    var st = "";
    var ed = "";
    if (document.cookie.length > 0) {
        st = document.cookie.indexOf(name + "=");
        if (st != -1) {
            st = st + name.length + 1;
            ed = document.cookie.indexOf(";", st);
            if (ed == -1)
                ed = document.cookie.length;
            return unescape(document.cookie.substring(st, ed));
        }
    }
    return "";
}

function makeToken() {

    $.ajax({
        type : 'POST',
        url : 'makeToken',
        dataType : 'text',
        cache : false,
        success : function(data) {
            $("#t").val(data);
        }
    });
}

/**
 * ツールチップを消す
 */
function removePopover() {
    if ($(".popover").length !== 0) {
        $(".popover").remove();
    }
}

/**
 * 拡張子より、ファイル形式を取得
 *
 * @returns ファイル形式 例：画像(jpg) 動画(wmv)
 */
function getFileFormart(extension) {
    var ret = "";
    if (isAcceptPicture(extension)) {
        var standardExtension = convertToStandardExtension(extension);
        ret = "画像(" + standardExtension + ")";
    } else if (isAcceptMovieWmp(extension) || isAcceptMovieOthers(extension)) {
        ret = "動画(" + extension + ")";
    }
    return ret;
}

/**
 * 許可される拡張子かを判断
 *
 * @param extension
 *            拡張子
 * @returns 許可されるか
 */
function isAcceptExtension(extension) {
    return isAcceptPicture(extension) || isAcceptMovieWmp(extension) || isAcceptMovieOthers(extension);
}

/**
 * 許可されるイメージ拡張子かを判断
 *
 * @param extension
 *            拡張子
 * @returns 許可されるか
 */
function isAcceptPicture(extension) {
    var isAcceptPic = false;
    var acceptPictureExtensions = getAcceptPictureExtensions();
    var index = $.inArray(extension, acceptPictureExtensions);
    isAcceptPic = (index >= 0) ? true : false;

    var isAcceptSpecial = isAcceptJPEG(extension, acceptPictureExtensions);

    return isAcceptPic || isAcceptSpecial;
}

/**
 * jpg許可される場合、jpegも許可されるかを判断
 *
 * @param extension
 *            拡張子
 * @param acceptPictureExtensions
 *            許可されるイメージ
 * @returns jpeg許可されるか
 */
function isAcceptJPEG(extension, acceptPictureExtensions) {
    var isAcceptJPEG = false;

    var index = $.inArray("jpg", acceptPictureExtensions);
    if (index >= 0) {
        isAcceptJPEG = (extension == "jpeg") ? true : false;
    }

    return isAcceptJPEG;
}

/**
 * 許可されるメディア拡張子(WindowsMediaPlayerで再生できるもの)かを判断
 *
 * @param extension
 *            拡張子
 * @returns 許可されるか
 */
function isAcceptMovieWmp(extension) {
    var acceptMovieWmpExtensions = getAcceptMovieWmpExtensions();
    var index = $.inArray(extension, acceptMovieWmpExtensions);
    return index >= 0;
}

/**
 * 許可されるメディア拡張子(WindowsMediaPlayerで再生できないもの)かを判断
 *
 * @param extension
 *            拡張子
 * @returns 許可されるか
 */
function isAcceptMovieOthers(extension) {
    var acceptMovieOthersExtensions = getAcceptMovieOthersExtensions();
    var index = $.inArray(extension, acceptMovieOthersExtensions);
    return index >= 0;
}

/**
 * 許可イメージ拡張子を取得
 *
 * @returns 許可イメージ拡張子
 */
function getAcceptPictureExtensions() {
    return $("#commonPicture").val().split(",");
}

/**
 * 許可メディア拡張子(WindowsMediaPlayerで再生出来るもの)を取得
 *
 * @returns 許可メディア拡張子(WindowsMediaPlayerで再生出来るもの)
 */
function getAcceptMovieWmpExtensions() {
    return $("#commonMovieWmp").val().split(",");
}

/**
 * 許可メディア拡張子(WindowsMediaPlayerで再生できないもの)を取得
 *
 * @returns 許可メディア拡張子(WindowsMediaPlayerで再生できないもの)
 */
function getAcceptMovieOthersExtensions() {
    return $("#commonMovieOthers").val().split(",");
}

/**
 * 標準拡張子に変換
 *
 * @param extension
 *            拡張子
 * @returns 標準拡張子
 */
function convertToStandardExtension(extension) {
    if (extension.toLowerCase() == 'jpeg') {
        return 'jpg';
    }
    return extension;
}
/**
 * String[] 日付 => String[][] 日付
 *
 * @param dates
 * @returns
 */
function getStereoDates(dates) {

    // dates is null or empty, return empty String[]
    if (dates == null || dates.length == 0) {
        return null;
    }

    // chang string array to date array
    var cdates = new Array(dates.length);
    for (var i = 0; i < dates.length; i++) {
        var calendarTime = strToDate(dates[i]);
        cdates[i] = calendarTime;
    }
    // one date only ,return one day String[]
    if (cdates.length == 1) {
        var dateList = new Array();
        dateList.push(dates);
        return dateList;
    }
    // date is more than one day
    // compare
    var compareSource = null;
    var compareTarget = null;
    var continueDateList = new Array();
    continueDateList.push(cdates[0]);
    var resultList = new Array();

    for (var i = 0; i < cdates.length - 1; i++) {
        compareSource = cdates[i];
        compareTarget = cdates[i + 1];

        if (diffDays(compareSource, compareTarget) == 1) {
            continueDateList.push(compareTarget);
        } else {
            setResultByContinueList(continueDateList, resultList);
            // reinit the continueDateList, add "compareTarget" as first
            // element
            continueDateList = new Array();
            continueDateList.push(compareTarget);
        }
    }
    // last continue date
    setResultByContinueList(continueDateList, resultList);

    // return result
    return resultList;
}

/**
 * String[][] 日付 => String[] 日付
 *
 * @param periodArr
 * @return
 */
function getFlattenDates(periodArr) {
    if (periodArr == null || periodArr.length == 0) {
        return null;
    }

    var resultList = new Array();
    for (var i = 0; i < periodArr.length; i++) {

        // one date only
        if (periodArr[i].length == 1) {
            var dateTime = changeDateFormat(strToDate(periodArr[i][0]).getTime());
            resultList.push(dateTime);
        }

        // date is more than one day
        if (periodArr[i].length != 1) {
            var periodStartTime = strToDate(periodArr[i][0]);
            var periodEndTime = strToDate(periodArr[i][1]);
            var days = diffDays(periodStartTime, periodEndTime);

            // element
            for (var j = 0; j <= days; j++) {
                var tmpPeriod = strToDate(periodArr[i][0]);
                tmpPeriod.setDate(tmpPeriod.getDate() + j);
                var date = changeDateFormat(strToDate(tmpPeriod).getTime());
                resultList.push(date);
            }
        }
    }
    return resultList;
}

function getOneDigitalYearMonth(dateStr){
    var date = new Date(dateStr);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var resultStr = month + "/" + day;
    return resultStr;
}

function strToDate(dateStr) {
    var date = new Date(dateStr);
    return date;
}

function diffDays(start, end) {
    var sl = start.getTime();
    var el = end.getTime();
    var ei = el - sl;
    return (ei / (1000 * 60 * 60 * 24));
}

function setResultByContinueList(continueDateList, resultList) {
    if (continueDateList.length == 1) {
        // no continue dates, one alone day
        var dateArray = new Array();
        var dateTimes = changeDateFormat(strToDate(continueDateList[0]).getTime());
        dateArray.push(dateTimes);
        resultList.push(dateArray);
    } else {
        // more than two day continued
        // join
        var start = changeDateFormat(strToDate(continueDateList[0]).getTime());
        var end = changeDateFormat(strToDate(continueDateList[continueDateList.length - 1]).getTime());
        var result = new Array(start, end);
        resultList.push(result);
    }
}

/**
 * 重複要素を削除する
 */
function removeDuplicate(sourceArr) {
    if (!sourceArr || !sourceArr.length) {
        return sourceArr;
    }

    var retArr = [];
    for (var i = 0; i < sourceArr.length; i++) {
        if (retArr.indexOf(sourceArr[i]) == -1) {
            retArr.push(sourceArr[i]);
        }
    }
    return retArr;
}

/**
 * get ie version
 */
function getIEVersion() {
    var agent = navigator.userAgent;
    var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
    var matches = agent.match(reg);
    if (matches != null) {
        return {
            major : matches[1],
            minor : matches[2]
        };
    }
    return {
        major : "-1",
        minor : "-1"
    };
}

/**
 * prevent enter press
 */
function preventEnterPress(formId) {
    $("#" + formId).bind("keypress", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    });
}
