function play() {
	var wa = document.getElementById("content-left-wannan");
	wa.style.visibility = "visible";
}

window.onload = function() {
	var btn = document.getElementById('btn');
	btn.onclick = function() {
		var time = setInterval(function() {
			/*获取滚动条滚动的距离*/
			var scrolly = window.scrollY;
			console.log(scrolly);
			var speed = scrolly / 20;
			var target = scrolly - speed / 1.5;
			if(scrolly <= 20) {
				target = 0;
				clearInterval(time);
			}
			window.scrollTo(0, target);
		}, 10)
	}
}