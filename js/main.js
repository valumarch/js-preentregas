alert('Registrate para empezar tu compra')
let nombre = prompt('Ingresa tu nombre')
let apellido = prompt('Ingresa tu apellido')

if( /\d/.test(nombre) || /\d/.test(apellido) ) {
    alert('Por favor ingrese nombre y apellido válidos');
    nombre = prompt('Ingresa tu nombre')
    apellido = prompt('Ingresa tu apellido')
}

const productos = [{
        nombre: "Piluso Flores",
        precio: 1500
    },
    {
        nombre: "Almohadon Lila",
        precio: 2000
    },
    {
        nombre: "Remera",
        precio: 5000
    },
    {
        nombre: "Almohadon Rosa",
        precio: 3000
    },
    {
        nombre: "Sweater Ondas",
        precio: 3500
    },
    {
        nombre: "Sweater Cuadros",
        precio: 3500
    }
]

function productosDisponibles(){
let stockProductos = productos.map(
    (productos) => productos.nombre
);
return stockProductos.join(", ");
}


alert('Gracias por registrarse! Estos son nuestros productos disponibles: ' + productosDisponibles())

let compra = prompt('Elija uno de los productos disponibles ' + productosDisponibles() + '. Si no quiere seguir con la compra, ingrese "fin"' )

while(compra == "fin"){
alert('Gracias, ' + nombre + '! Que vuelvas pronto');
}

let total = 0;


if (compra == "Piluso Flores" || compra == "Almohadon Lila" || compra == "Remera" || compra == "Almohadon Rosa" || compra == "Sweater Ondas" || compra == "Sweater Cuadros" || compra == "fin"){
    switch(compra){
        case "Piluso Flores":
            total += productos[0].precio
            break;
        case "Almohadon Lila":
            total += productos[1].precio
            break;
        case "Remera":
            total += productos[2].precio
            break;
        case "Almohadon Rosa":
            total += productos[3].precio
            break;
        case "Sweater Ondas":
            total += productos[4].precio
            break;
        case "Sweater Cuadros":
            total += productos[5].precio
            break;
        
    }
    alert(nombre + ', el precio total de tu compra es ' + total + ". Muchas gracias!")
}
else {
    alert('Por favor ingrese uno de los productos disponibles');
    compra = prompt('Los productos disponibles son ' + productosDisponibles())
    }
