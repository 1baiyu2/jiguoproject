var personal = document.getElementsByClassName('personal')[0];
var register = document.getElementsByClassName('register')[0];
var login = document.getElementsByClassName('login')[0];
if (localStorage.getItem('istrue')) {
    // console.log(localStorage.getItem('istrue'));
    personal.style.display = 'block';
    personal.innerHTML = localStorage.getItem('uname');
    register.style.display = 'none';
    login.style.display = 'none';

}

var leaveout_ = document.getElementsByClassName('leaveout')[0];
var leave_ = document.getElementsByClassName('leave')[0];
console.log(leaveout_);
personal.onclick = function () {
    leaveout_.style.display = 'block';
}
leave_.onclick = function () {
    register.style.display = 'block';
    login.style.display = 'block';
    personal.style.display = 'none';
    leaveout_.style.display = 'none';
    localStorage.removeItem('istrue', true);
}