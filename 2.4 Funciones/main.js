// Ejercicio 1
function sum(a, b) {
  return a + b;
}

// Ejercicio 1
function subs(a, b) {
  return a - b;
}

//Ejercicio 3
var cont = 1;
var bool = true;
var str = "Gera";

// Ejercicio 4
function mayorDeEdad(edad) {
  if (edad >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

// Ejercicio 5
function evaluate(num) {
  if (num === 0) {
    return "Cero"
  } else if (num > 0) {
    return "Positivo"
  } else {
    return "Negativo"
  }
}

// Ejercicio 6
let pares = []
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    pares.push(i)
  }
}

// Ejercicio 7
function letter(letra) {
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "Vocal"
  } else {
    return "Consonante"
  }
}

// Ejercicio 8
function multiple(num) {
  if (num % 5 === 0 && num % 11 === 0) {
    return true
  } else {
    return false
  }
}

// Ejercicio 9
function game(player1, player2) {
  if (player1 === "Papel" && player2 === "Papel" || player1 === "Tijeras" && player2 === "Tijeras" || player1 === "Piedra" && player2 === "Piedra") {
    return "Empate"
  } else if (player1 === "Papel" && player2 === "Piedra" || player1 === "Tijeras" && player2 === "Papel" || player1 === "Piedra" && player2 === "Tijeras") {
    return "J1"
  } else if (player2 === "Papel" && player1 === "Piedra" || player2 === "Tijera" && player1 === "Papel" || player2 === "Piedra" && player1 === "Tijeras") {
    return "J2"
  } else {
    return "Algo no salió como se esperaba"
  }
}