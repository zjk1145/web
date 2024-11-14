//鼠标悬停
window.onload = function(){
    var image = document.getElementsByClassName('image2');
    for(var i = 0; i < image.length;i ++){
        image[i].style.cursor='pointer'
    }


//最新消息
var texts = document.getElementsByClassName('text');
var links = ['./最新消息/1.html', './最新消息/2.html', './最新消息/3.html', './最新消息/4.html', './最新消息/5.html', './最新消息/6.html'];
for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = '#337AB7';

    texts[i].addEventListener('mouseover', function () {
        this.href = links[Array.prototype.indexOf.call(texts, this)];
        this.style.color = '#23537D';
        this.style.textDecoration = 'underline';
        this.style.cursor = 'pointer';
    });

    texts[i].addEventListener('mouseout', function () {
        this.href = '';
        this.style.color = '#337AB7';
        this.style.textDecoration = 'none';
        this.style.cursor = 'default';
    });

    texts[i].addEventListener('click', function (e) {
        this.style.color = '#058A7D';
        this.style.cursor = 'pointer';
        if (this.href) {
            window.location.href = this.href;
        }
    });
}
}