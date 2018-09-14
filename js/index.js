window.addEventListener("load", function() {
	var $advantageList = document.getElementsByClassName("flAdvantage")[0].getElementsByTagName("li");
	
	var $bannerBox = document.getElementsByClassName("indexBanner")[0];
	var $bannerLeft = $bannerBox.getElementsByClassName("left")[0];
	var $bannerRight = $bannerBox.getElementsByClassName("right")[0];
	var $icon = $bannerBox.getElementsByClassName("icon")[0].getElementsByTagName("span");
	var bannerIndex = 0;
	
	var $flRepresentImg = document.getElementsByClassName("flRepresent")[0].getElementsByClassName("pic")[0];

	//图片GIF效果
	window.setInterval(function() {
		for(var i = 0; i < $advantageList.length; i++) {
			var $bac = $advantageList[i].getElementsByTagName("i")[0];
			var w = $bac.offsetWidth;
			var x = parseInt($bac.style.backgroundPositionX) || 0;

			if(Math.abs(x) >= w * 9) {
				x = 0;
			} else {
				x -= w;
			}

			$bac.style.backgroundPositionX = x + "px";
		}
	}, 180);

	//banner轮播效果
	window.setInterval(function() {
		bannerIndex++;
		if(bannerIndex >= 4) bannerIndex = 0;

		$bannerLeft.style.backgroundPositionX = -($bannerLeft.offsetWidth * bannerIndex) + "px";
		$bannerRight.style.backgroundPositionX = -($bannerRight.offsetWidth * bannerIndex / 2) + "px";

		for(var i = 0; i < $icon.length; i++) {
			var className = $icon[i].className.trim();

			if(i == bannerIndex) {
				className += " active";
			} else {
				className = className.replace("active", "");
			}
			$icon[i].className = className;
		}
	}, 5000);
	
	//代言人
	var representArry = [];
	var arry = [];
	var count = 35;
	var colNum = 7;
	for(var i=1; i<=count; i++){
		var src = "img/represent/"+ i +".png";
		arry.push(src);
		if(i % colNum == 0){
			representArry.push(arry);
			arry = [];
		}
	}
	
	for(var i=0; i<representArry.length; i++){
		var $ul = document.createElement("ul");
		for(var j=0; j<representArry[i].length; j++){
			var $li = document.createElement("li");
			var $img = document.createElement("img");
			$img.src = representArry[i][j];
			$li.appendChild($img);
			$ul.appendChild($li);
		}
		var ran = Math.round(Math.random()*(colNum - 2));
		if(ran % 2 != 0){
			ran += 1;
		}
		$ul.getElementsByTagName("li")[ran].className = "big";
		
		$flRepresentImg.appendChild($ul);
	}

}, false);