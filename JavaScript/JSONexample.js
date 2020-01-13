

function search() {
	
	var queryURL = "https://jsonplaceholder.typicode.com/users";
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', queryURL, true);
	
	xhr.onload = function(e) {
		var users = JSON.parse(xhr.response);
		
		displayUsersAsATable(users);
	}
	xhr.send();
}

function displayUsersAsATable(users) {
	
	var usersDiv = document.querySelector("#users");
	usersDiv.innerHTML = "";
	
	var table = document.createElement("table");
	
	users.forEach(function (currentUser) {
		var row = table.insertRow();
		row.innerHTML = currentUser.name;
	});
	
	usersDiv.appendChild(table);
}
