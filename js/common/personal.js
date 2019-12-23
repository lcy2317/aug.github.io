var validateText;

function submit() {
    if (false) {
        //验证成功
        $("#validate").addClass("has-success");
        $("#head,#body,#foot").removeClass("blur");
        setTimeout("$('#validate').hide()", 500)

    } else {
        //验证失败
        $("#validate").addClass("has-error");
    }

}