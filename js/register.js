function reg() {
    // 获取输入的手机号
    var phone = document.getElementsByClassName('phone')[0];
    // 获取输入的图片验证码
    var pic = document.getElementsByClassName('pic')[0];
    // 获取确认图片验证码
    var num = document.getElementsByClassName('num')[0];
    // 获取用户名
    var username = document.getElementById('username');
    // 获取用户名密码
    var pwd = document.getElementById('pwd');
    // 确认用户名密码
    var requirepwd = document.getElementById('requirepwd');
    var regphone = /^(?:\+?86)?(?:1[3-9]\d{9}|0\d{2,3}[1-9]\d{6,7})$/;
    var regpic = /^[rR]2[bB]7$/
    var reguname = /^[a-zA-Z0-9]{3,6}$/;
    var regupwd = /^[a-zA-Z0-9]{6,12}$/;
    var result1 = regphone.test(phone.value);
    var result2 = regpic.test(pic.value);
    var result3 = regpic.test(num.value);
    var result4 = reguname.test(username.value);
    var result5 = regupwd.test(pwd.value);
    if (phone.value == '' || pic.value == '' || num.value == '' || username.value == '' || pwd.value == '' || requirepwd.value == '') {
        alert("内容不能为空");
    }
    else if (!result1) {
        phone.value = '手机格式错误!'
    }

    else if (!result2) {
        alert("图片验证码错误");
    }
    else if (!result3) {
        alert("验证码不一致");
    }
    else if (!result4) {
        alert("用户名3-6位");
    }
    else if (!result5) {
        alert("密码为6-12位");
    }
    else if (pwd.value !== requirepwd.value) {
        alert("密码不一致");
    }
    else {
        alert("注册成功");
        localStorage.setItem('uname', username.value);
        localStorage.setItem('pwd', pwd.value);
        location.href = "./login.html";
    }
}
