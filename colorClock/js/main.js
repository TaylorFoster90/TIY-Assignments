function clockWork(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var hhex = Math.floor(h * 255/24).toString(16);
	var mhex = Math.floor(m * 255/59).toString(16);
	var shex = Math.floor(s * 255/59).toString(16);

	if(h <= 9){h = "0" + h};
	if(m <= 9){m = "0" + m};
	if(s <= 9){s = "0" + s};
	if(hhex.length == 1){ hhex = "0" + hhex};
	if(mhex.length == 1){ hhex = "0" + mhex};
	if(shex.length == 1){ hhex = "0" + shex};

	realTime = h+":"+m+":"+s;
	clockColor = "#" + hhex + mhex + shex; 
	$('html').css("background-color", clockColor);
	$('#clock').text(clockColor);
	$('#time').text(realTime);
	setInterval(clockWork, 1000);
};
clockWork();