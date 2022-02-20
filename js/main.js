const inputUser = document.getElementById("userInput");

let expresion = "";

function truncate(num, decimales) {
  return Math.trunc(num * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

function press(num) {
  expresion += num;
  value = inputUser.value = expresion;
  if (value == "*" || value == "/") inputUser.value = "error";
  
}
function equal() {
  
  result = inputUser.value = eval(expresion);

  inputUser.value = truncate(result, 12);

  if (result == Infinity || isNaN(result)) {
    inputUser.value = "error";
  }

  expresion = inputUser.value;
}

function borrar() {
  inputUser.value = "";
  expresion = "";
}
