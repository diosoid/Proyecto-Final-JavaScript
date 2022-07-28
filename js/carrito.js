
// -- Selectores

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

const climaCheck = document.querySelector('#clima_info')



// -- DEFINIENDO OBJETOS


let stock = []

// -- DEFINIENDO ARRAYS

const carrito = JSON.parse(localStorage.getItem('carrito')) || [] 



//FETCH


let climaFeature = []

fetch(`https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=aa32ef9670433326a09ad851d24585f1&lang=sp&units=metric`)
.then((resp) => resp.json())
.then((data) => {
    console.log(data)




    climaCheck.innerHTML =`

    <h3>Ciudad: ${data.name} </4>
    <h4>Temp actual: ${data.main.temp} °</h4> 
    <h4>Humedad actual: ${data.main.humidity}%</h4>
    <h4>Hoy tenemos ${data.weather[0].description}.</h4> 
    
    `

    
})




// -- Generando Dom

fetch('./js/stock.json')
.then((resp) => resp.json())
.then((data) =>{
        stock = data        
        
        data.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add('producto')
            
            div.innerHTML= `
            <img src=${producto.img} alt="">
            <h3>${producto.nombre}</h3>
            <p>${producto.modelo}</p>
            <p>Marca: ${producto.marca}</p>
            <p>Atributos: ${producto.atributos}</p>
            <p class="precioProducto">Precio: $${producto.valor}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
            
            `
            
            productosContainer.append(div)
            
        }); 
    }) 
    
    
    
    // -- DEFINIENDO FUNCIONES
    
    const showMensaje = (producto) => {
        Toastify ({
            text: `Se agregó ${producto} al carrito`,
            duration: 4000,
            gravity: 'bottom',
            position: 'right',
            style:{
                background: "linear-gradient( to right, #00b09b, #*96c96d)"
            }
        }).showToast()
    }
    
    const agregarAlCarrito = (productoID) => {
        const itemEnCarrito = carrito.find((producto) => producto.id === productoID)
        
        if (itemEnCarrito){
            itemEnCarrito.cantidad += 1
            showMensaje(itemEnCarrito.nombre)
            
        }else{
            
            const {id, nombre, modelo, valor} = stock.find((producto) => producto.id === productoID)
            
            const itemAlCarrito = {
                id,
                nombre,
                modelo,
                valor,
                cantidad: 1
            }
            carrito.push(itemAlCarrito)
            showMensaje(nombre)
            
        }
        
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
        
        renderCarrito()
        renderCantidad()
        renderTotal()
        
    }
    
    const removerDelCarrito = (id) => {
        const item = carrito.find((producto) => producto.id === id)
        
        item.cantidad --
        
        if (item.cantidad === 0) {
            
            const indice = carrito.indexOf(item)
            carrito.splice(indice, 1)
            
        }
        
        Toastify({
            text: `Ud saco una unidad de ${item.nombre}`,
            position: 'right',
            gravity: 'bottom',
            duration: 4000,
            style:{
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
            
            
        }).showToast()
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
        renderCarrito()
        renderCantidad()
        renderTotal()
    }
    
    const vaciarCarrito = () => {
        
        carrito.length = 0
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
        
        renderCarrito()
        renderCantidad()
        renderTotal()
    }
    
    
    
    
    btnVaciar.addEventListener('click', () => {
        Swal.fire({
            title: 'Esta seguro que desea vaciar el carrito?',
            text: "El carrito no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar!',
            cancelButtonText: 'No, cancelar!'
        }).then((result) => {
            if (result.isConfirmed){
                vaciarCarrito()
                botonCerrar.click()
                Toastify({
                    text: 'Se vacio el carrito',
                    position: 'right',
                    gravity: 'bottom',
                    duration: 4000,
                    style:{
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                    
                    
                }).showToast()
            }
        })
    })
    
    
    
    const renderCarrito = () => {
        carritoContenedor.innerHTML = ''
    
        carrito.forEach((item) => {
            const div = document.createElement('div')
            div.classList.add('productoEnCarrito')
            
            div.innerHTML = `
            <p>${item.nombre}</p>
            <p>${item.modelo}</p>
            <p>Cantidad ${item.cantidad}</p>              
            <p>Precio: $${item.valor}</p>
            <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
            `
            carritoContenedor.append(div)  
            
            
            
        })
        
    }
    
    const renderCantidad = () => {
        contadorCarrito.innerText = carrito.reduce((acc, prod)=> acc += prod.cantidad , 0)
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.valor * producto.cantidad
    })
    precioTotal.innerText = total
}


function realizarCalculo (){
    if(document.getElementById('cantidadcuotas').value == 3){
        document.getElementById('valorPorCuota').innerHTML = `El valor de cada cuota sera de $ ${((precioTotal.innerHTML / 3)*1.1).toFixed(2)}`
        document.getElementById('valorTotal').innerHTML = `El valor total final sera de $ ${(precioTotal.innerHTML * 1.1).toFixed(2)}`
        document.getElementById('invalidNumber').innerHTML = ""
    }else  if (document.getElementById('cantidadcuotas').value == 6){
        document.getElementById('valorPorCuota').innerHTML = `El valor de cada cuota sera de $ ${((precioTotal.innerHTML / 6)*1.2).toFixed(2)}`
        document.getElementById('valorTotal').innerHTML = `El valor total final sera de $ ${(precioTotal.innerHTML * 1.2).toFixed(2)}`
        document.getElementById('invalidNumber').innerHTML = ""
    }else if (document.getElementById('cantidadcuotas').value == 12){
        document.getElementById('valorPorCuota').innerHTML = `El valor de cada cuota sera de $ ${((precioTotal.innerHTML / 12)*1.3).toFixed(2)}`
        document.getElementById('valorTotal').innerHTML = `El valor total final sera de $ ${(precioTotal.innerHTML * 1.3).toFixed(2)}`
        document.getElementById('invalidNumber').innerHTML = ""
    } else if (document.getElementById('cantidadcuotas').value != 3 || 6 || 12) {
        document.getElementById('valorPorCuota').innerHTML = ""
        document.getElementById('valorTotal').innerHTML = ""
        document.getElementById('invalidNumber').innerHTML = `El dato ingresado no es valido`
        
    }
}

console.log(precioTotal.innerHTML)





// -- Creando Modal

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})

// -- Storage Settings

let usuario
const usuarioLS = localStorage.getItem('UserNameReg')

userLog() 

function userLog() {
    
    if (usuarioLS){
        usuario = usuarioLS
    } else {

        Swal.fire({
            title: 'Para continuar por favor registrese',
            
            icon: 'warning',
            
            
            confirmButtonText: `<a href="form.html">Log In</a>`,
            
        }) 
        


        /* usuario = prompt("Ingrese su nombre")
        localStorage.setItem("user", usuario) */
    }
    
}






// -- Creando login de formulario

const title = document.querySelector("#user-name")
title.innerText = `Bienvenido: ${usuario}`

const logOut = () => {
    localStorage.removeItem("UserNameReg")
    window.location.reload()
}

document.querySelector("#log-out").addEventListener("click", logOut)


renderCarrito()
renderCantidad()
renderTotal()

// TODO ESTO SE REEMPLAZO POR UN ARCHIVO JSON CON EL STOCK Y UN FETCH.
/* class articulo {
    constructor(nombre, modelo, valor, atributos, marca, cantidad, id, img){
        this.nombre = nombre
        this.modelo = modelo
        this.valor = valor
        this.atributos = atributos
        this.marca = marca
        this.cantidad = cantidad
        this.id = id
        this.img = img
    }
} 
const art1 = new articulo ("Estéreo para auto", "MVH S215BT", 19000, "Con USB y Bluetooth", "Pioneer", 1, 1, './img/estereoPioneer.jpg')
const art2 = new articulo ("Parlantes 6x9", "Ts A 6960", 16599, "4 Vias y 450W PMPO", "Pioneer", 1, 2, './img/parlantesPioneer.jpg')
const art3 = new articulo ("Potencia", "Gm-a3602", 32000, "2 canales puenteables", "Pioneer", 1, 3, './img/potenciaPioneer.jpg')
const art4 = new articulo ("Estéreo para auto", "DSX A410BT", 27999, "Con USB y bluetooth", "Sony", 1, 4, './img/estereoSony.jpg')
const art5 = new articulo ("Parlantes 6x9", "Xs-fb6930", 24.990, "3 Vias 450 Watt 4 Ohms", "Sony", 1, 5, './img/parlantesSony.jpg')
const art6 = new articulo ("Potencia", "Xm-n1004", 26500, "100w X 4.", "Sony", 1, 6, './img/potenciaSony.jpg')
const art7 = new articulo ("Estéreo para auto", "CDE-175BT", 49900, "Con USB y bluetooth", "Alpine", 1, 7, './img/estereoAlpine.jpg')
const art8 = new articulo ("Parlantes 6x9", "R-s69", 33328, "100w Rms Spr-69", "Alpine", 1, 8, './img/parlantesAlpine.jpg')
const art9 = new articulo ("Potencia", "S-A55V", 71388, "40w X 4 + 1 Canal 300w Rms", "Alpine", 1, 9, './img/potenciaAlpine.jpg') */

// -- -- //
// ESTA INSTANCIA FUE SIMPLIFICADA CON UN OPERADOR
/* let carrito
const carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) */

// TODO ESTO SE REEMPLAZO POR UN ARCHIVO JSON CON EL STOCK Y UN FETCH.
/* let listaArticulos = []
listaArticulos.push(art1, art2, art3, art4, art5, art6, art7, art8, art9)
console.log(listaArticulos ) */

//--//
// -- CONDICIONAL CARRITO EN STORAGE -- // ESTA INSTANCIA FUE SIMPLIFICADA CON UN OPERADORun FALSY
/* if (carritoEnStorage) {
    carrito = carritoEnStorage
    
}else {
    carrito = []
} */