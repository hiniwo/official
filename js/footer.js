var $style = document.createElement("link");
var $footer = document.getElementById("footer");

$style.rel = "stylesheet";
$style.href = "css/footer.css";

document.getElementsByTagName("head")[0].appendChild($style);

$footer.innerHTML = '<a target="_blank" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.here.shop" class="downApp">	<div class="logo"><img src="img/logo.png" /><span>纷来</span><span>下载领取现金红包</span>	</div>	<div class="btn">立即下载</div></a><div class="box">	<a href="index.html" class="fl">纷来</a>	<div class="down"><div class="wx">	<img src="img/gzh.jpg" /></div><div class="xcx">	<img src="img/xcx.jpg" /></div><div class="ios">	<img src="img/down.png" /></div><div class="az">	<img src="img/down.png" /></div>	</div></div><div class="tcp">	<a target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备17100088号-4</a>	深圳这里信息发展有限公司</div>';
