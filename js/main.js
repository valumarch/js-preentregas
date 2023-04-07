const productos = [{
        nombre: "Piluso Flores",
        precio: 1500,
        id: "piluso-flores",
        imagen: "./img/img-producto1.jpg"
        
    },
    {
        nombre: "Almohadon Lila",
        precio: 2000,
        id: "almohadon-lila",
        imagen: "./img/img-producto2.jpg"
    },
    {
        nombre: "Remera 01",
        precio: 5000,
        id: "remera-01",
        imagen: "./img/img-producto3.jpeg"
    },
    {
        nombre: "Almohadon Rosa",
        precio: 3000,
        id: "almohadon-rosa",
        imagen: "./img/img-producto4.jpg"
    },
    {
        nombre: "Sweater Ondas",
        precio: 3500,
        id: "sweater-ondas",
        imagen:"../img/img-producto5.jpg"
    },
    {
        nombre: "Sweater Cuadros",
        precio: 3500,
        id: "sweater-cuadros",
        imagen: "../img/img-producto6.jpg"
    },
    {
        nombre: "Remera  02",
        precio: 5000,
        id: "remera-02",
        imagen: "../img/img-producto7.jpeg"
    },
    {
        nombre: "Remera 03",
        precio: 5000,
        id: "remera-03",
        imagen: "../img/img-producto8.jpeg"
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos")
let botonesAgregar = document.querySelectorAll(".boton-agregar");
let numeroProductos = document.querySelector("#cantidad");

function cargarProductos(){
    productos.forEach(producto =>{

        const div = document.createElement ("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img src="${producto.imagen}"
                <div class="producto-informacion" >
                    <h3 class="producto-titulo">${producto.nombre}</h3>
                    <p class="producto-precio">${"$"+producto.precio}</p>
                    <button class="boton-agregar" id="${producto.id}">Agregar al carrito</button>
                </div>   
        `;

        contenedorProductos.append(div);
    })

    botonesProductos();
}

cargarProductos();

function botonesProductos(){
    botonesAgregar = document.querySelectorAll(".boton-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    cantidadCarrito();
}
else{
    productosEnCarrito = [];
}



function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    if(productosEnCarrito.some(producto=> producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
}
cantidadCarrito();
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function cantidadCarrito(){
    let numeroProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0);
    cantidad.innerHTML = numeroProductos;
}

