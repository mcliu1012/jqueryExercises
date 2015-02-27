$(function() {
    // 【于兆新】模块DIV灰显控制
    var shoppingCarEnabled = true;

    $('#roleSelect option:eq(0)').attr('selected', 'selected');
    $('#priceSelect option:eq(0)').attr('selected', 'selected');

    $('#myCarousel').carousel('next');
    $("#btnPhotoCancel").bind("click", function() {
        $("#photoModal").modal("hide");
    });
    $("#btnCancel").bind("click", function() {
        $("#orderModal").modal("hide");
    });
    $("#btnOK").bind("click", function() {
        $("#alertDiv").show();
        setTimeout(function() {
            $("#alertDiv").alert("close");
        }, 2000);
        $("#orderModal").modal("hide");
        shoppingCarEnabled = false;
        $("#priceSelect").trigger("change");
    });

    // 动态关联【价格】下拉菜单
    $("#roleSelect").off("change").change(function() {
        var value = $(this).find("option:selected").val();
        if (value == 1) {
            // 选择【VIP中P】时
            $("#priceSelect").prop("disabled", false);
        } else {
            $("#priceSelect").prop("selectedIndex", 0);
            $("#priceSelect").prop("disabled", true);
        }
        $("#priceSelect").trigger("change");
    });
    $("#priceSelect").off("change").change(function() {
        var value = $(this).find("option:selected").val();
        var index = 1;
        if (value == 1) {
            // 使用可能时 (选择【2毛7分5】时)
            // 绑定按钮的点击事件
            btnSetListener(index);

            // 设置各DIV为有效状态
            if (shoppingCarEnabled) {
                $(".h2Shoppingcar").removeClass("dimmedWord");
                $(".h2NotShoppingcar").removeClass("dimmedWord");
                $(".btn-large").removeClass("disabled");
                // 各会员模块设置有效，并做出阴影状
                setMembersEnabled();
            } else {
                $(".h2Shoppingcar").addClass("dimmedWord");
                $(".btnShoppingcar").addClass("disabled").unbind("click");
                $(".h2NotShoppingcar").removeClass("dimmedWord");
                $(".btnNotShoppingcar").removeClass("disabled");
                // 设置除第一个以外的会员模块为有效，并做出阴影状
                setMembersEnabledExceptFirst();
            }
        } else {
            // 使用不可时
            $(".topDiv").off("hover");
            $(".h2Shoppingcar").addClass("dimmedWord");
            $(".h2NotShoppingcar").addClass("dimmedWord");
            $(".btn-large").addClass("disabled").unbind("click");
            $(".topDiv").removeClass("memberInfo").addClass("memberInfo-cantSelect");
            $(".shadowDiv").removeClass("shadowDesignAnder").addClass("shadowDesignAnder-cantSelect");
        }
    });

    // 绑定按钮的点击事件
    function btnSetListener(index) {
        $(".btn-large").each(function() {
            switch (index) {
                case 1:
                    $(this).bind("click", function() {
                        $("#orderModal").modal({
                            keyboard: false,// true：按esc键，弹出框消失。false：esc键不起作用
                            backdrop: true,// true:会有个背景颜色，点击背景颜色，弹出框消逝。false:没有背景颜色，点击弹出框以外区域，弹出框不消失
                            show: true,// true：点击激活按钮后显示弹出框。false：点击激活按钮后，该弹出框不显示
                        });
                    });
                    index++;
                    break;
                case 2:
                    $(this).bind("click", function() {
                        $("#photoModal").modal("show");
                    });
                    index++;
                    break;
                case 3:
                    $(this).bind("click", function() {
                        window.open('https://me.alipay.com/ljhnxx');
                    });
                    index++;
                    break;
                default:
                    break;
            }
        });
    }

    // 各会员模块设置有效，并做出阴影状
    function setMembersEnabled() {
        $(".memberOverlap").each(function() {
            var $memberInfo = $(this).children("div").eq(0);
            $memberInfo.removeClass("memberInfo-cantSelect").addClass("memberInfo");

            $memberInfo.hover(function() {
                $(this).addClass("memberInfo-onmouse");
            }, function() {
                $(this).removeClass("memberInfo-onmouse");
            });

            $memberInfo.next().removeClass("shadowDesignAnder-cantSelect").addClass("shadowDesignAnder");
        });
    }

    // 设置除第一个以外的会员模块为有效，并做出阴影状
    function setMembersEnabledExceptFirst() {
        // 设置【于兆新】模块灰显
        var $memberInfoFirst = $(".memberOverlapFirst").children("div").eq(0);
        $memberInfoFirst.removeClass("memberInfo").addClass("memberInfo-cantSelect");
        $memberInfoFirst.off("hover");
        $memberInfoFirst.next().removeClass("shadowDesignAnder").addClass("shadowDesignAnder-cantSelect");
        // 设置其他会员模块为有效，并做出阴影状
        $(".memberOverlapNotFirst").each(function() {
            var $memberInfo = $(this).children("div").eq(0);
            $memberInfo.removeClass("memberInfo-cantSelect").addClass("memberInfo");

            $memberInfo.hover(function() {
                $(this).addClass("memberInfo-onmouse");
            }, function() {
                $(this).removeClass("memberInfo-onmouse");
            });

            $memberInfo.next().removeClass("shadowDesignAnder-cantSelect").addClass("shadowDesignAnder");
        });
    }
});