const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoLleno = document.querySelector("#carrito-lleno");
let botonesEliminar = document.querySelectorAll(".boton-eliminar");

if(productosEnCarrito){
    productosEnCarrito.forEach (producto =>{
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
    <div class="carrito-producto-titulo"><h3>${producto.nombre}</h3></div>
    <div class="carrito-producto-precio"><p>${producto.precio}</p></div>
    <div class="carrito-producto-cantidad">
        <p>cantidad</p>
        <p>${producto.cantidad}</p>
    </div>
    <div class="carrito-producto-total">
        <p>subtotal:</p>
        <p>${producto.precio * producto.cantidad}</p>
    </div>
    <button class="boton-eliminar" id="${producto.id}">Eliminar</button>
    `;
    carritoLleno.append(div);
    }) 
}
else{
    const div = document.createElement("div");
    div.classList.add("carrito-vacio");
    div.innerHTML = `
    <p>Tu carrito está vacío<p>`;
}

function botonesProductos(){
    botonesEliminar = document.querySelectorAll(".boton-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    });
}