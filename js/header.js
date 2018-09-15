var $style = document.createElement('link');
var $header = document.getElementById('header');
var headerIndex = $header.getAttribute('data-index');

$style.rel = 'stylesheet';
$style.href = 'css/header.css';

document.getElementsByTagName('head')[0].appendChild($style);

$header.innerHTML = '<div class="box"><div><a href="index.html" class="fl">纷来</a><ul><li><a href="index.html">首页</a></li><li><a href="story.html">代言人故事</a></li><li><a href="about.html">关于我们</a></li><li><a href="join.html">加入我们</a></li><li><a href="joinHands.html">招商合作</a></li></ul></div></div>'

$header.getElementsByTagName('li')[headerIndex].className = 'active'
