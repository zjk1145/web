//鼠标悬停
window.onload = function(){
    var image = document.getElementsByClassName('image2');
    for(var i = 0; i < image.length;i ++){
        image[i].style.cursor='pointer'
    }


//最新消息
//定义文字部分链接跳转的事件
var texts = document.getElementsByClassName('text');
// 将目标html全部放入links中
var links = ['./最新消息/1.html', './最新消息/2.html', './最新消息/3.html', './最新消息/4.html', './最新消息/5.html', './最新消息/6.html'];
for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = '#337AB7'; //文字的初始颜色

    // 鼠标悬停时的颜色变换
    texts[i].addEventListener('mouseover', function () {
        this.href = links[Array.prototype.indexOf.call(texts, this)];
        this.style.color = '#23537D';
        this.style.textDecoration = 'underline';
        this.style.cursor = 'pointer';
    });
    
    // 鼠标从文字部分移开 颜色恢复为初始颜色
    texts[i].addEventListener('mouseout', function () {
        this.href = '';
        this.style.color = '#337AB7';
        this.style.textDecoration = 'none';
        this.style.cursor = 'default';
    });

    // 鼠标点击文字部分 颜色发生变化 并跳转至对应界面
    texts[i].addEventListener('click', function (e) {
        this.style.color = '#058A7D';
        this.style.cursor = 'pointer';
        if (this.href) {
            window.location.href = this.href;
        }
    });
}
}