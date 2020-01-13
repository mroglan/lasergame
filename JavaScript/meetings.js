
/*
let person1 = [['9:00', '10:30'],['12:00', '13:00'], ['16:00', '18:00']];
let person1Constraints = ['9:00', '20:00'];
let person2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];
let person2Constraints = ['10:00', '18:30'];
let meetingTime = 30;
//sample output: [['11:30','12:00'],['15:00', '16:00'],['18:00', '18:30']]
*/

let person1 = [['5:00', '6:00'], ['9:00', '10:00'], ['13:00', '15:00'], ['16:00', '16:30'], ['18:00', '19:30']];
let person1Constraints = ['4:00', '20:00'];
let person2 = [['9:00', '9:30'], ['11:00', '12:00'], ['15:00', '16:30']];
let person2Constraints = ['9:00', '17:00'];
let meetingTime = 30;
//sample output: [[10, 11], [12, 13], [16.5, 17]]

let p1OpenArray = [];
let p2OpenArray = [];
let resultArray = [];


function meetingBlocks(p1, p1C, p2, p2C, mT) {
	
	mT /= 60;
	
	let p1Array = [];
	let p2Array = [];
	
	for(let i = 0; i < p1.length; i++) {
		let j = p1[i][0].substring(p1[i][0].indexOf(':') + 1);
		let k = p1[i][1].substring(p1[i][1].indexOf(':') + 1);
	
		j /= 60;
		k /= 60;
		
	p1Array[i] = [parseInt(p1[i][0].substring(0, p1[i][0].indexOf(':'))) + j, parseInt(p1[i][1].substring(0, p1[i][1].indexOf(':'))) + k];
	}
	
	for(let i = 0; i < p2.length; i++) {
		let j = p2[i][0].substring(p2[i][0].indexOf(':') + 1);
		let k = p2[i][1].substring(p2[i][1].indexOf(':') + 1);
	
		j /= 60;
		k /= 60;
		
	p2Array[i] = [parseInt(p2[i][0].substring(0, p2[i][0].indexOf(':'))) + j, parseInt(p2[i][1].substring(0, p2[i][1].indexOf(':'))) + k];
	}
	
	let newP1C = [parseInt(p1C[0].substring(0, p1C[0].indexOf(':'))) + p1C[0].substring(p1C[0].indexOf(':') + 1)/60, 
		parseInt(p1C[1].substring(0, p1C[1].indexOf(':'))) + p1C[1].substring(p1C[1].indexOf(':') + 1)/60];
	
	let newP2C = [parseInt(p2C[0].substring(0, p2C[0].indexOf(':'))) + p2C[0].substring(p2C[0].indexOf(':') + 1)/60, 
		parseInt(p2C[1].substring(0, p2C[1].indexOf(':'))) + p2C[1].substring(p2C[1].indexOf(':') + 1)/60];
		
	let lowerBound = Math.max(newP1C[0], newP2C[0]);
	let upperBound = Math.min(newP1C[1], newP2C[1]);
	
	let lowerP1, lowerP2 = lowerBound;
	let upperP1, upperP2 = upperBound;
	
	let n = 0;
	
	for(let i = 0; i < p1Array.length; i++) {
		if(lowerBound < p1Array[i][0]) {
			p1Array.splice(0, n);
			break;
		}
		else {
			if(lowerBound > p1Array[i][1]) {
				n++;
			}
			else {
				lowerP1 = p1Array[i][1];
				n++;
			}
		}
	}
	
	n = 0;
	
	for(let i, n = 0; i < p2Array.length; i++) {
		if(lowerBound < p2Array[i][0]) {
			p2Array.splice(0, n);
			break;
		}
		else {
			if(lowerBound > p2Array[i][1]) {
				n++;
			}
			else {
				lowerP2 = p2Array[i][1];
				n++;
			}
		}
	}
	
	n = 0;
	
	for(let i = p1Array.length - 1, n = 0; i >= 0; i--) {
		if(upperBound < p1Array[i][1]) {
			if(upperBound > p1Array[i][0]) {
				upperP1 = p1Array[i][0];
				p1Array.splice(p1Array.length - n - 1);
				break;
			}
			else
				n++;
		}
	}
	
	n = 0;
	
	for(let i = p2Array.length - 1, n = 0; i >= 0; i--) {
		if(upperBound < p2Array[i][1]) {
			if(upperBound > p2Array[i][0]) {
				upperP2 = p2Array[i][0];
				p2Array.splice(p2Array.length - n - 1);
				break;
			}
			else
				n++;
		}
	}
	
	if(!upperP1) 
		upperP1 = upperBound;
	if(!upperP2) 
		upperP2 = upperBound;
	if(!lowerP1) 
		lowerP1 = lowerBound;
	if(!lowerP2)
		lowerP2 = lowerBound;
	
	for(let i = 0; i < p1Array.length; i++) {
		if(i === 0) {
			p1OpenArray.push([lowerP1, p1Array[i][0]]);
			p1OpenArray.push([p1Array[i][1], p1Array[i + 1][0]]); 
		}
		else {
			if(i + 1 === p1Array.length) {
				p1OpenArray.push([p1Array[i][1], upperP1]);
			}
			else {
				p1OpenArray.push([p1Array[i][1], p1Array[i + 1][0]]);
			}
		}
	}
	
	for(let i = 0; i < p2Array.length; i++) {
		if(i === 0) {
			p2OpenArray.push([lowerP2, p2Array[i][0]]);
			p2OpenArray.push([p2Array[i][1], p2Array[i + 1][0]]); 
		}
		else {
			if(i + 1 === p2Array.length) {
				p2OpenArray.push([p2Array[i][1], upperP2]);
			}
			else {
				p2OpenArray.push([p2Array[i][1], p2Array[i + 1][0]]);
			}
		}
	}
	
	for(let i = 0; i < p1OpenArray.length; i++) {
		if(p1OpenArray[i][0] === p1OpenArray[i][1]) {
			p1OpenArray.splice(i, 1);
			i = 0;
		}
	}
	
	for(let i = 0; i < p2OpenArray.length; i++) {
		if(p2OpenArray[i][0] === p2OpenArray[i][1]) {
			p2OpenArray.splice(i, 1);
			i = 0;
		}
	}
	
	let startTime;
	
	for(let i = 0; i < p1OpenArray.length; i++) {
		startTime = p1OpenArray[i][0];
		for(let j = 0; j < p2OpenArray.length; j++) {
			if(startTime >= p2OpenArray[j][0] && startTime < p2OpenArray[j][1]) {
				if(p1OpenArray[i][1] < p2OpenArray[j][1]) {
					resultArray.push([startTime, p1OpenArray[i][1]]);
				}
				else {
					resultArray.push([startTime, p2OpenArray[j][1]]);
				}
			}
		}
	}
	
	for(let i = 0; i < p2OpenArray.length; i++) {
		startTime = p2OpenArray[i][0];
		for(let j = 0; j < p1OpenArray.length; j++) {
			if(startTime >= p1OpenArray[j][0] && startTime < p1OpenArray[j][1]) {
				if(p2OpenArray[i][1] < p1OpenArray[j][1]) {
					resultArray.push([startTime, p2OpenArray[i][1]]);
				}
				else {
					resultArray.push([startTime, p1OpenArray[j][1]]);
				}
			}
		}
	}
	
	for(let i = 0; i < resultArray.length; i++) {
		let current = resultArray[i][0];
		for(let j = i + 1; j < resultArray.length; j++) {
			if(current === resultArray[j][0]) {
				resultArray.splice(j, 1);
				i = 0;
				break;
			}
		}
	}
	
	for(let i = 0; i < resultArray.length; i++) {
		if(resultArray[i][1] - resultArray[i][0] < mT) {
			resultArray.splice(i, 1);
			i = 0;
		}
	}
	
	return resultArray;
}

meetingBlocks(person1, person1Constraints, person2, person2Constraints, meetingTime);