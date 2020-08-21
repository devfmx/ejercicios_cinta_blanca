

// for( variable; condicion; avance ){

//      código a ejecutar

// }


// 1.- Crear variable
// 2.- Agregar condición
// 3.- Definir el avance

// for(var i = 0; i < 10 ; i = i + 1){

//     console.log(i)

// }

// RESTO DEL CODIGO

// i = 0 + 1  true 

// i = 1 + 1 true

// i = 2 + 1 true

// .
// .
// .

// i = 9 + 1 true

// i = 10 

// for(var i = 0; i <= 100; i = i + 5) {
//     console.log(i)
// }


// for(var i = 0; i<= 300; i += 3){ 
//     console.log(i)
// }

// Sintáxis más común
// for(var i = 0; i <= 3; i++){ 
//     console.log(i)
// }

// inicio       limite  secuencia
for(var i = 0; i <= 100; i++){
    // console.log(i)
}

//-------> Challenge Final <-------
// 1 -> 100
// Si el numero es divisible entre 3 -> Fizz 
// Si el numero es divisible entre 5 -> Buzz
// Si el numero es divisible entre 3 y 5 -> FizzBuzz

//---- 👍 -----
// 0
// 1
// 2
// 3 Fizz
// 4 
// 5 Buzz
// ...
// 15 Fizbuzz

//----- 🚫 -----
// 15 fizz
// 15 buzz
// 15 fizzbuzz

// Primero hacemos el ciclo for para llegar al 100 empezando desde 1
for(var x = 1; x <= 100; x++ ){
    // la primera condicion es saberla de 3 y 5 para que los numeros
    // divisibles entre los 2 solo entren a esa condicion
    if(x % 3 === 0 && x % 5 === 0){
        console.log(x + ' : fizzbuzz')
    }else if(x % 5 === 0 ){
        console.log(x + ' : buzz')
    }else if(x % 3 === 0){
        console.log(x + ' : fizz')
    }else{
        console.log(x)
    }   
}