var vm = avalon.define({
    $id: "indexController",
    active: "active",
    showlogindiv: false,
    account: "",
    password: "",
    headImg:"",
    hint: "账号或密码有误",
    frameUrl: "pages/login.html",
    baseUrl: "http://localhost:8080/demo",

    clickMain: function (e) {
        console.log(e);
    },

    clickShop: function (e) {
        console.log(e);
    },
    clickLogin: function (e) {
        vm.showlogindiv = true;
        $(".masthead").css("-webkit-filter", "blur(3px)");
        $(".masthead").css("-moz-filter", "blur(3px)");
        $(".masthead").css("-o-filter", "blur(3px)");
        $(".masthead").css("-ms-filter", "blur(3px)");
        $(".masthead").css("filter", "blur(3px)");
    },
    clickBookShelf: function (e) {
        console.log(e);
    },
    clickAbout: function (e) {
        console.log(e);
    },

    clickClose: function (e) {
        vm.showlogindiv = false;
        $(".masthead").css("-webkit-filter", "");
        $(".masthead").css("-moz-filter", "");
        $(".masthead").css("-o-filter", "");
        $(".masthead").css("-ms-filter", "");
        $(".masthead").css("filter", "");
    }
});


function login() {

    inputValidation();

    var loginData = {
        account: vm.account,
        password: vm.password,

    };

    $.ajax({
        url: vm.baseUrl + "/user/login",
        data: loginData,
        type: "post",
        dataType: "json",

        success: function (data) {

        },

        error: function (data) {
            vm.hint="网络错误";
        }
    })
}


function inputValidation() {
    removeattr();
    if (vm.account == "" || vm.account == null) {
        $("#accountdiv").attr("class", "input-group has-error");
        return;
    }
    if (vm.password == "" || vm.password == null) {
        $("#passworddiv").attr("class", "input-group has-error");
        return;
    }
}

function removeattr() {
    $("#passworddiv").attr("class", "input-group");
    $("#accountdiv").attr("class", "input-group");
}

