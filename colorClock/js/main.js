function clockWork(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var myArray = ['A', 'B', 'C', 'D', 'E', 'F'];
	function arrayLoop(){ for(i = 0; i < myArray.length; i++){
		return myArray[i];}
	}

	if(h <= 9){h = arrayLoop() + h};
	if(m <= 9){m = arrayLoop() + m};
	if(s <= 9){s = arrayLoop() + s};
	clockColor = "#" + h + m + s; 
	$('html').css("background-color", clockColor)
	$('h1').text(clockColor);
	setInterval(clockWork, 1000);
};
clockWork();
