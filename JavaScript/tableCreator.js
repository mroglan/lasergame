let person, car, pro;

function init() {
	console.log("hello");
	person = document.querySelector("#playerName");
	car = document.querySelector("#car");
	pro = document.querySelector("#pro");
	
	if(person.value == "" || car.value == "") {
		window.alert("You're form is not complete!");
	}
	else {
	
	addRow(person.value, car.value, pro);
	
	deleteInputs();
	
	}
	
}

function addRow(a, b, c) {
	let d;
	let table = document.querySelector("table");
	let newValue = table.insertRow();
	
	if(c.checked) {
		d = "Yes";
	}
	else {
		d = "No";
	}
	
	newValue.innerHTML = "<td>" + a + "</td><td>" + b + "</td><td>" + d + "</td>";
}
	
function deleteInputs() {
	
	person.value = "";
	car.value = "";
	pro.checked = false;
}
