const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoLleno = document.querySelector("#carrito-lleno");
const botonesCarrito = document.querySelector("#carrito-botones")
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
        const botones = document.createElement("div");
        botones.classList.add("carrito-botones");
        botones.innerHTML = `
        <button class="boton-vaciar" id="boton-vaciar">Vaciar carrito</button>
        <button class="boton-comprar" id="boton-comprar">Comprar</button>
        `
        botonesCarrito.append(botones);
    }
    else{
        const p = document.createElement("p");
        p.classList.add("carrito-vacio");
        p.innerHTML = `
        Tu carrito está vacio`;
        carritoVacio.append(p);
    }
