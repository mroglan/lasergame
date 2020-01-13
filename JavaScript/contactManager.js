let newInput;

class NewContact{
	
	constructor(firstName, lastName, job, notes) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.job = job;
		this.notes = notes;
	}
	
}



function init() {
	
	let name1 = document.querySelector("#firstNameInput");
	let name2 = document.querySelector("#lastNameInput");
	let job1 = document.querySelector("#jobInput");
	let importantInfo = document.querySelector("#infoInput");
	
	newInput = new NewContact(name1.value, name2.value, job1.value, importantInfo.value);
	
	printNewContact();
	
}
	
function printNewContact() {
	let contactInfo = document.createElement("div");
	contactInfo.className = "contactDisplay";
	
	let elem = document.querySelector("body");
	elem.appendChild(contactInfo);
	
	contactInfo.innerHTML += "Last Name: " + newInput.firstName + "<br>";
	contactInfo.innerHTML += "First Name: " + newInput.lastName + "<br>";
	contactInfo.innerHTML += "Job: " + newInput.job + "<br>";
	contactInfo.innerHTML += "Important Info: " + newInput.notes + "<br>";
	
	console.log(newInput.firstName);
}

