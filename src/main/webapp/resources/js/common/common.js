$(function() {

    /**
     * get the contextpath of the current project ex: location.href =
     * "http://localhost:8080/monoliths_admin/user/add" will return
     * "monoliths_admin"
     */
    $.getContextPath = function() {
        var fullPath = window.location.pathname;
        var contextPath = fullPath.split("/")[1];
        return contextPath;
    };

    /**
     * get the base url of current project ex: location.href =
     * "http://localhost:8080/monoliths_admin/user/add" will return
     * "http://localhost:8080/monoliths_admin"
     */
    $.getBaseURL = function() {
        var protocol = window.location.protocol;
        var hostname = window.location.hostname;
        var port = (window.location.port && ":") + location.port;
        var contextPath = window.location.pathname.split('/')[1];
        return protocol + "//" + hostname + port + "/" + contextPath;
    };

    /**
     * escape html entities
     */
    $.escapeHtml = function(string) {
        var entityMap = {
            "&" : "&amp;",
            "<" : "&lt;",
            ">" : "&gt;",
            '"' : '&quot;',
            "'" : '&#39;',
            "/" : '&#x2F;'
        };

        return String(string).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    };

    /**
     * 画面のページリンクを初期化する
     */
    $.initPagination = function(paginationId) {
        createPagination(paginationId);
    };

    /**
     * copy all the input and select element in "sourceForm" to "targetForm"
     * which contains the same name by hidden filed
     */
    $.copyFormToHiddenForm = function(sourceFormId, targetFormId) {
        var sourceForm = $("#" + sourceFormId);
        var targetForm = $("#" + targetFormId);
        // copy input to hidden input
        $(':input[name]', sourceForm).each(function() {
            $('[name=' + $(this).attr('name') + ']', targetForm).val($(this).val());
        });
    };

    /**
     * disable Text Selection
     */
    $.fn.disableSelection = function() {
        return this.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    };

    /**
     * get info that checkboxs have been checked
     */
    $.getSelectInfo = function($selectCbxes) {
        if($selectCbxes.length == 0){
            return null;
        }else{
           var arr = new Array();
           $selectCbxes.each(function(index, cbx) {
               var id = $(cbx).attr("attrId");
               var name = $(cbx).attr("attrName");
               arr.push({
                   id : id,
                   name : name
               });
           });
           return arr;
        }
    };
});

/**
 * 画面のページリンクを初期化する
 *
 * @param paginationId
 *            初期化用情報を含むのdivのId
 */
function createPagination(paginationId) {
    var pageNo = parseInt($("#" + paginationId + " [name='pageNo']").val(), 10);
    var totalCount = parseInt($("#" + paginationId + " [name='totalCount']").val(), 10);
    var perPageCount = parseInt($("#" + paginationId + " [name='perPageCount']").val(), 10);

    if (isNaN(totalCount) || totalCount < perPageCount || (totalCount == perPageCount && pageNo == 1)) {
        // when page init or totalCount <= perPageCount, no need pagination
        // but when pageNo is eqauls to 2, need pagination(バグ #20379)
        $("#" + paginationId).hide();
        return;
    }

    // calculate the total page number
    var maxPageNo = totalCount / perPageCount;
    maxPageNo = totalCount % perPageCount == 0 ? maxPageNo : parseInt(maxPageNo, 10) + 1;

    // pagination link base css
    var firstClass = "first pageLink";
    var lastClass = "last pageLink";
    var previousClass = "previous pageLink";
    var nextClass = "next pageLink";
    // when tha last page, disable last and next paging
    if (pageNo >= maxPageNo) {
        lastClass += " disabled";
        nextClass += " disabled";
    }
    // when the first page, disable the first and pervious paging
    if (pageNo <= 1) {
        firstClass += " disabled";
        previousClass += " disabled";
    }

    // page link dom create
    var pageText = pageNo + "/" + maxPageNo;
    var firstHtml = "<div class='" + firstClass + "' page='" + 1 + "'>&lt;&lt;</div>";
    var previousHtml = "<div class='" + previousClass + "' page='" + (pageNo - 1)
            + "'>前へ</div>";
    var pageTextHtml = "<div>" + pageText + "</div>";
    var nextHtml = "<div class='" + nextClass + "' page='" + (pageNo + 1) + "'>次へ</div>";
    var lastHtml = "<div class='" + lastClass + "' page='" + maxPageNo + "'>&gt;&gt;</div>";
    var paginationHtml = firstHtml + previousHtml + pageTextHtml + nextHtml + lastHtml;
    $(paginationHtml).appendTo("#" + paginationId);

    // stop text select operation, bind page link "click" event
    $(".pagination [page]").disableSelection().filter(function() {
        return !$(this).hasClass("disabled");
    }).off("click").on("click", function() {
        var pageNo = $(this).attr("page");
        doSearch(pageNo);
    });
}

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