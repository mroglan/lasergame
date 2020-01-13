
let inputNumber, result, feedback;
let randomNumber = Math.round(100 * Math.random());

console.log("The random number is " + randomNumber);

function checkInputNumber() {  
  inputNumber = parseInt(document.getElementById("inputNumber").value);

  console.log("The number the user guessed is " + inputNumber);

  if (isNaN(inputNumber)) {
    alert("Must input numbers");
    return false;

  } else {

    result =
    inputNumber < randomNumber
      ? "too low"
      : inputNumber > randomNumber ? "too high" : "right";
  document.getElementById("response").innerHTML += "Your guess was " + result + "<br>";
    
  }
}
