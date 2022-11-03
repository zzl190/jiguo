//首页倒计时
var countDown = document.getElementsByClassName('time')[0];
function mistiming() {
    // 当前时间
    var nowTime = new Date();
    // 目标时间
    var goTime = new Date(2022, 10, 6, 20, 0, 0);

    //时间差  单位是毫秒
    var bad = goTime - nowTime;

    // 天
    var day = parseInt(bad / 1000 / 60 / 60 / 24);
    day = day < 10 ? '0' + day : day;
    // 小时
    var h = parseInt(bad / 1000 / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    // 分钟
    var m = parseInt(bad / 1000 / 60 % 60);
    m = m < 10 ? '0' + m : m;
    // 秒
    var s = parseInt(bad / 1000 % 60);
    s = s < 10 ? '0' + s : s;

    var str = '距离申请结束还有' + day + '天' + h + '小时' + m + '分' + s + '秒'
    countDown.innerHTML = str;

}

mistiming();

var timer = setInterval(mistiming, 1000);

// 点击申请
function dianji() {
    var num1 = document.getElementById('renshu');
    num1.innerHTML++;
    var num2 = document.getElementById('shuliang');
    num2.innerHTML--;
    var num3 = num2.innerHTML;
    if (num3 == 0) {
        alert('已申请完，没有了！！！');
    }
}
