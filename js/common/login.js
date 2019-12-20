var vmlogin = avalon.define({
    $id: "loginController",
    account: '',
    password: '',
});


function loginRequest() {
    var paramJson = {
        'loginAccount': vmlogin.account,
        'loginPassword': vmlogin.password,
    }


    $.ajax({
        url: 'http://localhost:8080/project/user/userLogin',
        data: paramJson,
        type: 'get',
        dataType: 'json',

        success: function(data){
            alert(data.message)
        },
        error: function(){
            alert('登录失败')
        }
    })
}