function login() {
    // 获取用户名
    console.log('123456');
    var username = document.getElementById('username');
    // 获取用户名密码
    var pwd = document.getElementById('pwd');
    var uname = localStorage.getItem('uname');
    var upwd = localStorage.getItem('pwd');
    if (uname == username.value && upwd == pwd.value) {
        localStorage.setItem('istrue', true);
        location.href = "./1.index.html";
    }
    else {
        alert("登录失败，请重新登录");
        location.reload();
    }
}
