var pLoginValidator = null;

$(function() {
    initLoginFormValue();
    setListener();
    setValidator();
});

/**
 * Login Form Initialization
 */
function initLoginFormValue() {
    if ("init" === $("#pageStatus").val()) {
        if ($.cookie("login_name")) {
            $("#loginNameInput").val($.cookie("login_name"));
            $("#keepLoginName").attr("checked", "checked");
        } else {
            $("#loginNameInput").val();
            $("#keepLoginName").removeAttr("checked");
        }
    }
}

function setListener() {
    // 点击【Sign up】按钮
    setSignUpBtnClickHandler();
    // 点击【重置】按钮
    setResetBtnClickHandler();
    // 点击【注册】按钮
    setRegistBtnClickHandler();
}

/**
 * 点击【Sign up】按钮
 */
function setSignUpBtnClickHandler() {
    $("#pLoginSignUp").off("click").on("click", function() {
        $("#pLoginRegistModal").modal({
            backdrop: "static",
            keyboard: false
        });
        $("#pLoginRegistModal").on("shown.bs.modal", function (e) {
            $("#pLoginEmailInput").focus();
        });
        $("#pLoginRegistModal").on("hide.bs.modal", function (e) {
            setStatusInit();
        });
    });
}

/**
 * 点击重置按钮
 */
function setResetBtnClickHandler() {
    $("#pLoginRegistModal button[type='reset']").off("click").on("click", function() {
        setStatusInit();
    });
}

/**
 * 状态初始化
 */
function setStatusInit() {
    pLoginValidator.resetForm();
    $("#pLoginEmailInput").focus();
    $("#pLoginForm")[0].reset();
}

/**
 * 点击【注册】按钮
 */
function setRegistBtnClickHandler() {
    $("#pLoginRegistBtn").off("click").on("click", function() {
        if ($("#pLoginForm").valid()) {
            $.ajax({
                url: $.getBaseURL() + "/laboratory/registUser",
                type: "POST",
                cache: false,
                dataType: "json",
                data: $("#pLoginForm").serialize(),
                success: function(data, textStatus) {
                    if (data.error) {
                        $("#pLoginErrorMsg").txtCrossFade(data.error);
                        $("#pLoginEmailInput").focus();
                        return;
                    }
                    $("#pLoginSuccessInfoDiv").txtCrossFade("恭喜你！注册成功");
                    setTimeout(function() {
                        $('#pLoginRegistModal').modal('hide');
                    }, 1500);
                },
                error: function(request, status, error) {
                    $("#pLoginErrorMsg").txtCrossFade("发生异常，请稍后重试。");
                },
                complete: function(XMLHttpRequest, textStatus) {

                }
            });
        }
    });
}

function setValidator() {
    pLoginValidator = $("#pLoginForm").validate({
      onfocusout: false, // 是否在获取焦点时验证 默认:true
      onkeyup: false, // 是否在敲击键盘时验证 默认:true
//      focusInvalid:false, // 提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true
      focusCleanup:true,  // 当未通过验证的元素获得焦点时,并移除错误提示（避免和 focusInvalid.一起使用）默认:false
      rules: {
          loginName: {
              required: true,
              email: true
          },
          passwordFirst: {
              required: true,
              minlength: 2,
              maxlength: 14
          },
          password: {
              required: true,
              minlength: 2,
              maxlength: 14,
              equalTo: "#pLoginPasswordInput" // #id名
          }
      },
      messages: {
          loginName: {
              required: "请输入Email地址",
              email: "E-mail地址格式不正确"
          },
          passwordFirst: {
              required: "请输入密码",
              minlength: "密码长度不能小于2",
              maxlength: "密码长度不能大于14"
          },
          password: {
              required: "请输入密码",
              minlength: "密码长度不能小于2",
              maxlength: "密码长度不能大于14",
              equalTo: "两次输入的密码不一致"
          }
      },
      submitHandler: function(form) {
//          $(form).ajaxSubmit();
      },
      errorPlacement: function(error, element) {
          error.insertAfter(element.parent());
      }
  });
}
