alert('Registrate para empezar tu compra')
let nombre = prompt('Ingresa tu nombre')
let apellido = prompt ('Ingresa tu apellido')
let telefono = prompt ('Ingresa tu numero de telefono')



function validarDatos (nombre, apellido, telefono) {
    let datos = true;

    if (!isNaN(nombre)) {
        datos = false;
        alert('Por favor ingrese un nombre valido');
    }
    if (!isNaN(apellido)) {
        datos = false;
        alert('Por favor ingrese un apellido valido');
    }
    if (isNaN(telefono) || telefono.length != 8) {
        datos = false;
        alert('Por favor ingrese un numero de telefono valido');
    }
    return datos
}


let productos = parseInt(prompt('Ingrese una cantidad de productos'));


function total(productos){
    let precioFinal = productos * 3500;
    return precioFinal;
}

let precioTotal = total(productos);

alert(nombre+' '+apellido+', tu precio final es '+ precioTotal + '. Gracias por tu compra!');







