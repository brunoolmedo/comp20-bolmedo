function parse() {
	var request = new XMLHttpRequest(); 
	request.open("GET", "http://messagehub.herokuapp.com/messages.json", true);
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			text = request.responseText;
			info = JSON.parse(text);
			addDataToPage(info);
		} else {
			elem = document.getElementById("messages");
			elem.innerHTML = "Waiting for response...";
		}
	}
	request.send(null);
}

function addDataToPage(info) {
	elem = document.getElementById("messages");
	elem.innerHTML = "";
	for (key in info) {
		elem.innerHTML += "<p>" + info[key]["content"] + "<span> - " + info[key]["username"] + "</span></p>";
	}
}