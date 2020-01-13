let selected, originalX, originalY, newX, newY, changeX, changeY, test, elemX, elemY;

window.onload = init;
window.addEventListener('mousemove', moveElem);
window.addEventListener('mouseup', stopMove);

selected = null;

function init() {
	test = document.querySelector("#test");
	
	test.addEventListener('mousedown', processMouseDown);
	
	function processMouseDown(evt) {
		dragInit(evt);
	}
}

function dragInit(evt) {
	selected = evt.target;
	elemX = selected.offsetLeft;
	elemY = selected.offsetTop;
	
	originalX = evt.clientX;
	originalY = evt.clientY;
	
	console.log(typeof(originalX));
}


function moveElem(evt) {
	
	newX = evt.clientX;
	newY = evt.clientY;
	
	
	if(originalX !== undefined) {
		changeX = newX - originalX;
		changeY = newY - originalY;
	}
	
	if(selected !== null) {
		changeLocation();
	}
	
	originalX = newX;
	originalY = newY;
}

function changeLocation() {
	elemX += changeX;
	elemY += changeY;
	
	test.style.left = elemX + "px";
	test.style.top = elemY + "px";
}

function stopMove() {
	selected = null;
}