// 当前页面编号（从1开始）
var currentPage = 1;

// 获取按钮元素
var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var returnButton = document.getElementById('return');

// 上一页按钮点击事件
prevButton.addEventListener('click', function() {
    if (currentPage > 1) {
        currentPage--;
        window.location.href = currentPage + '.html';
    }
});

// 下一页按钮点击事件
nextButton.addEventListener('click', function() {
    if (currentPage < 6) {
        currentPage++;
        window.location.href = currentPage + '.html';
    }
});

// 返回首页按钮点击事件
returnButton.addEventListener('click', function() {
    window.location.href = '../zuizhongxiaoguo.html';
});

// 根据当前文件名设置currentPage
var currentFile = window.location.pathname.split('/').pop();
var pageNumber = parseInt(currentFile.match(/(\d+)\.html/)?.[1] );
currentPage = pageNumber;
//window.loction.pathname获取当前路径如果URL是 "http://example.com/folder/A1.html"  pathname 将返回 "/folder/A1.html
//按/切割后取出最后一个元素，"A1.html"


/*使用正则表达式  
A匹配字母“A”
\d表示任意数字（0-9） +可以表示多个数字
（）创建捕获组，匹配并捕获数字1，2，3
"\"转义,"\."匹配点号*/
//?.[1] - 可选链操作符，访问匹配结果的第一个捕获组  parseInt() - 将匹配到的字符串转换为数字

