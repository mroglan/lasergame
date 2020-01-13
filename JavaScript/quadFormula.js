let a, b, c, root1, root2;

function quadSolver(a, b, c) {
	
	a = parseFloat(document.body.querySelector("#al").textContent);
	b = parseFloat(document.body.querySelector("#bl").textContent);
	c = parseFloat(document.body.querySelector("#cl").textContent);

	let root1 = ((-1*b) + Math.sqrt((Math.pow(b, 2)) - (4*a*c)))/(2*a);
	let root2 = ((-1*b) - Math.sqrt((Math.pow(b, 2)) - (4*a*c)))/(2*a);
	
	document.body.innerHTML += root1 + ', ' + root2;
	return root1 + ', ' + root2;
	
}
