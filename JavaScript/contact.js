let cm, seach, cm2;
let n = 0;
let trashBin = [];

window.onload = function init() {
	
	cm = new ContactManager();
	cm2 = new ContactManager();
	
	search = document.querySelector("#search");
	
	search.addEventListener('keydown', function (e) {
		if(e.keyCode === 13) {
			processSearch();
		}
	});
	
	search.addEventListener('mousedown', function(e) {
		cm.displayInTable();
	});
	
}

class ContactManager {
	
	constructor () {
		this.listOfContacts = [];
	}
	
	add(contact) {
		this.listOfContacts.push(contact);
	}
	
	displayInTable() {
		
		let container = document.querySelector("#container");
		container.innerHTML = "";
		
		let table = document.createElement("table");
		
		this.listOfContacts.forEach(function(currentContact, index) {
			
			let row = table.insertRow();

			row.innerHTML = "<td>" + currentContact.name + "</td><td>" + currentContact.email + "</td>";
		});
		
		container.appendChild(table);
	}
	
	save() {
		localStorage.contacts = JSON.stringify(this.listOfContacts);
	}
	
	loadList() {
		if(localStorage.contacts !== undefined){
			this.listOfContacts = JSON.parse(localStorage.contacts);
		}
	}
	
}
		


class Contact {
	
	constructor(name, email, x) {
		this.name = name;
		this.email = email;
		this.trash = x;
	}
}

function submitForm () {
	
	let name = document.querySelector("#name");
	let email = document.querySelector("#email");
	let x = "delete";
	
	let newContact = new Contact(name.value, email.value, x);
	
	cm.add(newContact);
	
	name.value = "";
	email.value = "";
	
	cm.displayInTable();
	
	return false;
}

function empty() {
	let table = document.querySelector("table");
	table.textContent = "";
}

function load() {
	
	cm.loadList();
	cm.displayInTable();

}

function processSearch() {

	let newArray = [];
	
	for(i = 0; i < cm.listOfContacts.length; i++) {
		console.log('hello');
		if(cm.listOfContacts[i].name == search.value) {
			newArray.push(cm.listOfContacts[i]);
			console.log(newArray);
		}
	}
	
	
	cm2.listOfContacts = newArray;
	
	cm2.displayInTable();
}



	
	