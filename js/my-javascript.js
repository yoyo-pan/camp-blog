function showClassDetail(className) {
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