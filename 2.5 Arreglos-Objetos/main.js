
//Arreglo - Array

let arreglo = [];
let flores = ["Rosas", "Margaritas", "Tulipanes", "GiraSol"];

console.log(flores);

flores[4] = "Orquidea" 
console.log(flores);

flores.push("RosasRojas");
console.log(flores);

flores.push(true)
console.log(flores);

flores.pop()
console.log(flores);

flores.splice(3, 1, 'Plantita')
console.log(flores);


//Objetos

let persona = {
    nombre: "Ricardo",
    edad: 21,
    tel: "541231869465",
    direccion: "CDMX",
    familia: true,
    musica: ["Salsa", "Cumbia", "Reggeteon", "Metal"],
    peliculas : {
        terror : false,
        romanticas : ["Titanic" , "Romeo y Julieta",["Prueba1", {
            dato1 : "Soy un crack"
        }]] 
    }  
}

console.log(persona.nombre);
console.log(persona.musica[2]);
console.log(persona.peliculas.romanticas[1]);
console.log(persona.peliculas.romanticas[2][1].dato1);