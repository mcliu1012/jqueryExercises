var pVEValidator = null;

$(function() {
    setStatusInit();
    setListeners();
    setValidator();
});

function setStatusInit() {
    $('#pVEEmailInput').focus();
}

/**
 * 事件监听
 */
function setListeners() {
    setPVEResetBtnClickHandler();
    setPVESignUpBtnClickHandler();
}

/**
 * 点击【重置】按钮
 */
function setPVEResetBtnClickHandler() {
    $('#pVEResetBtn').off('click').on('click', function() {
        $('#pVEEmailInput').focus();
        pVEValidator.resetForm();
    });
}

/**
 * 点击【注册】按钮
 */
function setPVESignUpBtnClickHandler() {
    $('#pVESignUpBtn').off('click').on('click', function() {
        if ($('#pVEForm').valid()) {
            $.ajax({
                url: $.getBaseURL() + "/validateExercise/registUser",
                type: "POST",
                cache: false,
                dataType: "json",
                data: $('#pVEForm').serialize(),
                success: function(data, textStatus) {
                    if (data.error) {
                        $('#pVEErrorMsg').txtCrossFade(data.error);
                        $('#pVEEmailInput').focus();
                    }
                },
                error: function(request, status, error) {
                    $('#pVEErrorMsg').txtCrossFade("发生异常，请稍后重试。");
                },
                complete: function(XMLHttpRequest, textStatus) {

                }
            });
        }
    });
}

function setValidator() {
    pVEValidator = $('#pVEForm').validate({
//      onfocusout: false, // 是否在获取焦点时验证 默认:true
//      onkeyup: false, // 是否在敲击键盘时验证 默认:true
//      focusInvalid:false, // 提交表单后,未通过验证的表单(第一个或提交之前获得焦点的未通过验证的表单)会获得焦点 默认:true
//      focusCleanup:true,  // 当未通过验证的元素获得焦点时,并移除错误提示（避免和 focusInvalid.一起使用）默认:false
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
              equalTo: "#pVEPasswordInput" // #id名
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
      }
  });
}
