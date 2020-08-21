//Inputs
var preguntaNombre = document.getElementById('preguntaNombre');
var preguntaPizza = document.getElementById('preguntaPizza');
var preguntaDireccion = document.getElementById('preguntaDireccion');
var preguntaTelefono = document.getElementById('preguntaTelefono');
// etiqueta p
var nombre = document.getElementById('name');
var telefono = document.getElementById('telefno');
var direccion = document.getElementById('direccion');
//Boton
var boton = document.getElementById('orden');
//Card
var respuesta = document.getElementById('respuesta')
//IMG 
var pizza = document.getElementById('pizza');

// Hacemos una funcion para activarla cuando el usuario le da click 
function ordenar (){
    var dataNombre = preguntaNombre.value;
    var dataTelefono = preguntaTelefono.value;
    var dataPizza = preguntaPizza.value;
    var dataDireccion = preguntaDireccion.value;
    var dataPizzaReal = dataPizza.toLowerCase();

    nombre.innerHTML = dataNombre;
    telefono.innerHTML = dataTelefono;
    direccion.innerHTML = dataDireccion;

    if(dataPizzaReal === 'si'){
        pizza.src = 'https://live.mrf.io/statics/i/ps/irecetasfaciles.com/wp-content/uploads/2020/03/pizza-hawaiana.jpg?width=1200&enable=upscale'
        pizza.classList.remove('none')
    }else if(dataPizzaReal === 'no'){
        pizza.src = 'https://cherry-brightspot.s3.amazonaws.com/51/08/10c47b0b409bad80f95af63acda3/pizzza.jpg'
        pizza.classList.remove('none')
    }else{
        pizza.src = 'https://miguelarino.files.wordpress.com/2012/11/peligro.jpg'
        pizza.classList.remove('none')
    }
    respuesta.classList.remove('none')
}

boton.addEventListener('click',ordenar)