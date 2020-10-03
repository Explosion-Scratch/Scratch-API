function get_data(user, attribute) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			document.getElementById("test").innerHTML = myObj['followers'];
		}
	};
	xmlhttp.open("GET", "https://scratchdb.lefty.one/v2/user/info/"+ user, true);
	xmlhttp.send();
}