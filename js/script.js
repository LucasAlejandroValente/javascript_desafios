// Bienvenida
// Catálogo de productos
// Selección de producto - mostrar precio
// Elegir en cuántas cuotas va a pagar
// Mostrar cálculo final
// Abonar monto

/* const bienvenida = () => {
    alert(`¡Bienvenido a mi tienda virtual!`);
};

const productos = () => {
    let catalogo;

    do{
        catalogo = parseInt(
            prompt("¿Qué producto querés comprar? \n1. Toyota Hilux 4X4 Cabina Doble SRV 2.8 TDi \n2. 1kg de helado de vainilla \n3. Galletita Rhodesia Terrabusi 22 Gr \n4. Pileta Intex Easy Set 457x91 Con Bomba")
        )

    } while (isNaN(catalogo) || catalogo < 1 || catalogo > 4)

    let nombreProducto;

    switch(catalogo){

        case 1:
            nombreProducto = "Toyota Hilux 4X4 Cabina Doble SRV 2.8 TDi"
        break

        case 2:
            nombreProducto = "1kg de helado de vainilla"
        break

        case 3:
            nombreProducto = "Galletita Rhodesia Terrabusi 22 Gr"
        break

        case 4:
            nombreProducto = "Pileta Intex Easy Set 457x91 Con Bomba"
        break

    } 
    
    return nombreProducto
}




const calcularPrecio = (nombreProducto) => {
    
    if(nombreProducto === "Toyota Hilux 4X4 Cabina Doble SRV 2.8 TDi"){
        return 5000000
    } else if (nombreProducto === "1kg de helado de vainilla"){
        return 1200
    } else if (nombreProducto === "Galletita Rhodesia Terrabusi 22 Gr"){
        return 70
    } else if (nombreProducto === "Pileta Intex Easy Set 457x91 Con Bomba"){
        return 80000
    }
}


let texto = "";
let total = 0

const mostrarPrecio = (precioProducto, nombreProducto) =>{
    texto += `Has elegido:\n${nombreProducto}.\nPrecio: $${precioProducto}.\n\n`
    total += precioProducto  
    let seguir = confirm("¿Querés comprar otro producto?")
    if (seguir === true){
        init()
    } else {
        alert(texto);
        alert(`El total a pagar es de $${total}.`)
    }
    
};

let cuotasSeleccionadas;

const seleccionCuotas = () => {
    do {
        cuotasSeleccionadas = parseInt(prompt(`¿En cuántas cuotas querés efectuar el pago?\n\nOpciones: de 1 a 12 cuotas.`))
    } while (cuotasSeleccionadas < 1 || cuotasSeleccionadas > 12)
    return cuotasSeleccionadas
}

const calcularCuotas = (cuotasSeleccionadas, total) => {
    alert(`Elegiste pagar en ${cuotasSeleccionadas} cuota(s).`)
    alert(`El monto se pagará en ${cuotasSeleccionadas} cuota(s) de $${total / cuotasSeleccionadas}.`)
}

const init = () => {
    let nombreProducto = productos();
    let precioProducto = calcularPrecio(nombreProducto);
    mostrarPrecio(precioProducto, nombreProducto);
}

const confirmacionPago = () => {
    confirm("Presiona confirmar para efectuar el pago.")
}

bienvenida();
init()
seleccionCuotas();
calcularCuotas(cuotasSeleccionadas, total);
confirmacionPago()

*/

let arrayProductos = [
    {
        id: 1,
        nombre: "Torta de Chocolate",
        precio: 3000,
    },

    {
        id: 2,
        nombre: "Torta de Zanahoria",
        precio: 2500,
    },

    {
        id: 3,
        nombre: "Torta Oreo",
        precio: 3500,
    },

    {
        id: 4, 
        nombre: "Torta Red Velvet",
        precio: 4000,
    },

    {
        id: 5, 
        nombre: "Torta de Coco",
        precio: 3250,
    },

];

const bienvenida = () => {
    alert("Bienvenido a mi pastelería!");
};

const catalogo = function () {
    let productos;

    do {
        productos = parseInt(prompt("¿Qué tortas querés comprar?\n\n1. Torta de Chocolate\n2. Torta de zanahoria\n3. Torta Oreo\n4. Torta Red Velvet\n5. Torta de Coco"));
    } while (isNaN(productos) || productos < 1 || productos > 5);

    return arrayProductos[productos - 1];

}

const calcularPrecio = (productoElegido) => {
    return productoElegido.precio
}

let texto = "";
let total = 0;

const mostrarPrecio = (productoElegido) => {
    texto += `Has elegido:\n${productoElegido.nombre}.\nPrecio: $${productoElegido.precio}.\n\n`
    total += productoElegido.precio

    let seguir = confirm("¿Querés comprar otro producto?")
    if (seguir === true){
        init()
    } else {
        alert(texto);
        alert(`El total a pagar es de $${total}.`)
    }
    
};

let cuotasSeleccionadas;

const seleccionCuotas = () => {
    do {
        cuotasSeleccionadas = parseInt(prompt(`¿En cuántas cuotas querés efectuar el pago?\n\nOpciones: de 1 a 12 cuotas.`))
    } while (cuotasSeleccionadas < 1 || cuotasSeleccionadas > 12)
    return cuotasSeleccionadas
}

const calcularCuotas = (cuotasSeleccionadas, total) => {
    alert(`Elegiste pagar en ${cuotasSeleccionadas} cuota(s).`)
    alert(`El monto se pagará en ${cuotasSeleccionadas} cuota(s) de $${total / cuotasSeleccionadas}.`)
}

const init = () => {
    let productoElegido = catalogo();
    calcularPrecio(productoElegido);
    mostrarPrecio(productoElegido)
};

const confirmacionPago = () => {
    confirm("Presiona confirmar para efectuar el pago.")
}

bienvenida();
init()
seleccionCuotas();
calcularCuotas(cuotasSeleccionadas, total);
confirmacionPago();