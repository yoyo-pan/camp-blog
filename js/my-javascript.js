function showClassDetail(className) {
	var scratchReview = "這是我的scratch心得\n\
	這是S第二行\n\
	這是S第三行\n";
	var arduinoReview = "這是我的arduino心得\n\
	這是A第二行\n\
	這是A第三行";
	var printReview = "這是我的3d列印心得\n\
	這是3d第二行\n\
	這是3d第三行";
	if (className == "scratch") {
		var d = document.querySelector("#text-detail");
		d.innerHTML = scratchReview;
	} else if (className == "arduino") {
		var d = document.querySelector("#text-detail");
		d.innerHTML = arduinoReview;
	} else if (className == "3d") {
		var d = document.querySelector("#text-detail");
		d.innerHTML = printReview;
	}
}

function clickMe () {
	var yourName = "";
	var yourLove = "";
	yourName = document.getElementById("yourName").value;
	yourLove = document.getElementById("yourLove").value;
	alert("經過我掐指一算..."+yourLove+"超級霹靂無敵愛"+yourName+"的喔!!!");
}

function myFunc () {
	var d;
	var color;
	color = getRandomColor();
	d = document.querySelector("#class-review");
	d.style.color = color;
}

function changeImageStyle () {
	var d = document.querySelector(".profile");
	var ids = ['image-style1', 'image-style2',
	'image-style3', 'image-style4'];
	d.id = getRandomId(ids);
}

setTimeout(function () {
	var d = document.querySelector(".profile");

	d.id = "surprise"
}, 2000);

function myRocketMove (direction) {
	var value;
	if (direction == "left") {
		value = -10;
	} else {
		value = 10;
	}
	rocketMove(value);
}

function calculate (rocks) {
	return rocks * 10;
}