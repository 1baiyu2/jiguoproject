
// 免费试用下大众试用和体验师专享排它切换以及下边的图片切换
(function () {
    var change = document.querySelectorAll('.change');
    // console.log(change);
    var more = document.querySelectorAll('.more');
    var masstab = document.querySelectorAll('.masstab');
    // console.log(masstab);
    for (var i = 0; i < change.length; i++) {
        change[i].setAttribute('index', i);

        change[i].onclick = function () {

            var index = this.getAttribute('index');

            for (var j = 0; j < change.length; j++) {
                change[j].classList.remove('active');
                change[index].classList.add('active');
                more[j].style.display = 'none';
                more[index].style.display = 'block';
                masstab[j].style.display = 'none';
                masstab[index].style.display = 'block';

            }
        }
    }

})();


// 请求物品的接口
var str = '';
axios.get('http://127.0.0.1:3000/useing/public', {

}).then(function (res) {
    // console.log(res);
    var res = res.data;
    // console.log(res);
    for (var item of res) {
        str += ` <li>
            <a href="./Trialdetails.html">
                <img src="${item.img}">
                <div class="content">
                    <h2>${item.text}</h2>
                    <p class="ptab">
                        <span>${item.totalnum}</span>
                        <span>${item.num}台</span>
                    </p>
                    <p class="pnum">
                        <span>${item.apply}</span>
                        申请
                    </p>
                    <p class="preport">报告数量：8</p>
                </div>
            </a>
        </li>`
    }
    var objlist = document.querySelectorAll('.objlist');
    // console.log(objlist);
    for (var n of objlist) {
        // console.log(n);
        n.innerHTML = str;
    }
    // document.querySelector('.objlist').innerHTML = str;
})
// 请求体验的接口
var strb = '';
axios.get('http://127.0.0.1:3000/useing/master', {

}).then(function (rest) {
    // console.log(rest);
    var rest = rest.data;
    // console.log(rest);
    for (var items of rest) {
        strb += ` <li>
            <a href="./Trialdetails.html">
                <img src="${items.img}">
                <div class="content">
                    <h2>${items.text}</h2>
                    <p class="ptab">
                        <span>${items.totalnum}</span>
                        <span>${items.num}台</span>
                    </p>
                    <p class="pnum">
                        <span>${items.apply}</span>
                        申请
                    </p>
                    <p class="preport">报告数量：8</p>
                </div>
            </a>
        </li>`
    }
    var objlistt = document.querySelectorAll('.objlistt');
    // console.log(objlistt);
    for (var f of objlistt) {
        // console.log(n);
        f.innerHTML = strb;
    }

});

// 四个按钮(大众试用)的排他法
(function () {
    var changetab = document.querySelectorAll('.changetab');
    // console.log(changetab);
    var obj = document.querySelectorAll('.obj');
    // console.log(obj);
    for (var k = 0; k < changetab.length; k++) {
        changetab[k].setAttribute('ind', k);
        changetab[k].onclick = function () {
            var ind = this.getAttribute('ind');
            // console.log(ind);
            for (var m = 0; m < changetab.length; m++) {
                changetab[m].classList.remove('total');
                changetab[ind].classList.add('total');
                obj[m].style.display = 'none';
                obj[ind].style.display = 'block'
            }
        }
    }
})();

// 四个按钮(体验师专享)的排他法
(function () {
    var changetabs = document.querySelectorAll('.changetab1');
    console.log(changetabs);
    var objt = document.querySelectorAll('.obj1');
    console.log(objt);
    for (var g = 0; g < changetabs.length; g++) {
        console.log(changetabs[g]);

        changetabs[g].setAttribute('inds', g);
        changetabs[g].onclick = function () {
            var inds = this.getAttribute('inds');
            console.log(this);
            console.log(11111);
            for (var v = 0; v < changetabs.length; v++) {
                changetabs[v].classList.remove('total');
                changetabs[inds].classList.add('total');
                objt[v].style.display = 'none';
                objt[inds].style.display = 'block'
            }
        }
    }
})();
