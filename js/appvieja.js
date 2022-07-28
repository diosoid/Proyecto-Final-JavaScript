// -- ARRAYS -- 
const  carrito = []



// -- TABLA DE FUNCIONES -- 

function bienvenidos () {
    alert(`Gracias por habernos elegido ${nombre}, esperamos que puedas encontrar todo lo que necesites en nuestras tienda`)   
}
function invalido (){
    alert('El dato ingresao no es valido, por favor vuelva a intentarlo.')
}



alert ('Bienvenidos a DinaSound. \n Tu tienda on line para poder comprar todo lo relacionado con el mundo del audio.')

let nombre = prompt('Ingrese su nombre')

bienvenidos()

class articulo {
    constructor(nombre, modelo, valor, atributos){
        this.nombre = nombre
        this.modelo = modelo
        this.valor = valor
        this.atributos = atributos
    }
} 

const art1 = new articulo ("Estéreo para auto Pioneer", "MVH S215BT", 19000, "Con USB y Bluetooth.")
const art2 = new articulo ("Parlantes 6x9 Pioneer", "Ts A 6960", 16599, "4 Vias y 450W PMPO.")
const art3 = new articulo ("Potencia Pioneer", "Gm-a3602", 32000, "2 canales puenteables.")



// --- Mejoras pendientes --- Crear un switch ---

/* const art1 = {
    nombre: "Estéreo para auto Pioneer,",
    modelo: "MVH S215BT",
    valor: 19000,
    atributos: "Con USB y Bluetooth."
} */

/* const art2 = {
    nombre: "Parlantes 6x9 Pioneer",
    modelo: "Ts A 6960",
    valor: 16599,
    atributos: "4 Vias, 450W PMPO."
} */

/* const art3 = {
    nombre: "Potencia Pioneer.",
    modelo: "Gm-a3602",
    valor: 32000,
    atributos: "2 canales, Puenteable."
} */

 function compra () {
    seleccionArt = prompt(`Seleccione el articulo que desea adquirir. \n 1- ${art1.nombre} \n 2- ${art2.nombre} \n 3- ${art3.nombre}`)
    switch(seleccionArt){
        case "1":
            alert(`Ud a seleccionado: \n${art1.nombre} \nModelo: ${art1.nombre} \nValor: ${art1.valor} \nAtributos: ${art1.atributos} `)
            asignacion = art1  
        break;
        case "2":
            alert(`Ud a seleccionado: \n${art2.nombre} \nModelo: ${art2.nombre} \nValor: ${art2.valor} \nAtributos: ${art2.atributos} `)
            asignacion = art2
        break;
        case "3":
            alert(`Ud a seleccionado: \n${art3.nombre} \nModelo: ${art3.nombre} \nValor: ${art3.valor} \nAtributos: ${art3.atributos} `)
            asignacion = art3
        break;
        default:
            invalido()
            compra()
            break;    

    }

}

compra()

// --- OPCION DE SELECCION DE ARTICULO VIEJA ---

/* let seleccionArt = prompt(`Seleccione el articulo que desea adquirir. \n 1- ${art1.nombre} \n 2- ${art2.nombre} \n 3- ${art3.nombre}`)
let asignacion = ""

if (seleccionArt == 1){
        alert(`Ud a seleccionado: \n${art1.nombre} \nModelo: ${art1.nombre} \nValor: ${art1.valor} \nAtributos: ${art1.atributos} `)
        asignacion = art1    
    }
    else if (seleccionArt == 2){
        alert(`Ud a seleccionado: \n${art2.nombre} \nModelo: ${art2.nombre} \nValor: ${art2.valor} \nAtributos: ${art2.atributos} `)
        asignacion = art2
    }
    else if (seleccionArt == 3){
        alert(`Ud a seleccionado: \n${art3.nombre} \nModelo: ${art3.nombre} \nValor: ${art3.valor} \nAtributos: ${art3.atributos} `)
        asignacion = art3
    }
    else if ( seleccionArt != 1 || 2 || 3){
        alert('Ud no a seleccionado una opcion valida por favor vuelva a intentarlo.')
        seleccionArt = prompt('Seleccione el articulo que desea adquirir. \n 1- "Estéreo para auto Pioneer." \n 2- "Parlantes 6x9 Pioneer." \n 3- "Potencia Pioneer."')
    }
 */

    console.log(asignacion)   

let formaDePago = prompt('Elija por favor el numero de cuotas: \n 1: -3 cuotas (10% de interes) \n 2: -6 cuotas (20% de interes) \n 3: -12 cuotas (30% de interes) ')

if (formaDePago == 1) {
    document.write('El producto seleccionado es ' + asignacion.nombre + ', modelo: '+ asignacion.modelo + ', con ' + asignacion.atributos  + "//////" )
    document.write('El valor de cada cuota sera de $' + ((asignacion.valor / 3) * 1.10).toFixed(2) + "//////")
    document.write('El monto total sera de $' + (((asignacion.valor / 3) * 1.10) *3).toFixed(2) + "//////" + 'Gracias por elegir DinaSound.')

}else if (formaDePago == 2){
    document.write('El producto seleccionado es ' + asignacion.nombre + ', modelo: '+ asignacion.modelo + ', con ' + asignacion.atributos  + "//////" )
    document.write('El valor de cada cuota sera de $' + ((asignacion.valor / 6) * 1.20).toFixed(2) + "//////")
    document.write('El monto total sera de $' + (((asignacion.valor / 6) * 1.20) *6).toFixed(2) + "//////" + 'Gracias por elegir DinaSound.')
}else if (formaDePago == 3){
    document.write('El producto seleccionado es ' + asignacion.nombre + ', modelo: '+ asignacion.modelo + ', con ' + asignacion.atributos  + "//////" )
    document.write('El valor de cada cuota sera de $' + ((asignacion.valor / 12) * 1.30).toFixed(2) + "//////")
    document.write('El monto total sera de $' + (((asignacion.valor / 12) * 1.30) * 12).toFixed(2) + "//////" + 'Gracias por elegir DinaSound.')
}else if(formaDePago != 1 || 2 || 3) 
{
    alert('La forma de pago ingresada no es valida')
} 
  



// -- MICODIGO VIEJO -- //

/* function bienvenidos () {
    alert(`Gracias por habernos elegido ${nombre}, esperamos que puedas encontrar todo lo que necesites en nuestras tienda`)   
}
function invalido (){
    alert('El dato ingresao no es valido, por favor vuelva a intentarlo.')
}

 function compra () {
     eleccion = prompt(`
     Por favor seleccione el articulo que desea de la lista:     
     1- ${listaArticulos[0].nombre}, ${listaArticulos[0].marca}, ${listaArticulos[0].modelo}, ${listaArticulos[0].atributos}, Precio: $${listaArticulos[0].valor}.
     2- ${listaArticulos[1].nombre}, ${listaArticulos[1].marca}, ${listaArticulos[1].modelo}, ${listaArticulos[1].atributos}, Precio: $${listaArticulos[1].valor}.
     3- ${listaArticulos[2].nombre}, ${listaArticulos[2].marca}, ${listaArticulos[2].modelo}, ${listaArticulos[2].atributos}, Precio: $${listaArticulos[2].valor}.
     4- ${listaArticulos[3].nombre}, ${listaArticulos[3].marca}, ${listaArticulos[3].modelo}, ${listaArticulos[3].atributos}, Precio: $${listaArticulos[3].valor}.
     5- ${listaArticulos[4].nombre}, ${listaArticulos[4].marca}, ${listaArticulos[4].modelo}, ${listaArticulos[4].atributos}, Precio: $${listaArticulos[4].valor}.
     6- ${listaArticulos[5].nombre}, ${listaArticulos[5].marca}, ${listaArticulos[5].modelo}, ${listaArticulos[5].atributos}, Precio: $${listaArticulos[5].valor}.
     7- ${listaArticulos[6].nombre}, ${listaArticulos[6].marca}, ${listaArticulos[6].modelo}, ${listaArticulos[6].atributos}, Precio: $${listaArticulos[6].valor}.
     8- ${listaArticulos[7].nombre}, ${listaArticulos[7].marca}, ${listaArticulos[7].modelo}, ${listaArticulos[7].atributos}, Precio: $${listaArticulos[7].valor}.
     9- ${listaArticulos[8].nombre}, ${listaArticulos[8].marca}, ${listaArticulos[8].modelo}, ${listaArticulos[8].atributos}, Precio: $${listaArticulos[8].valor}.
     `)
     switch(eleccion){
        case "1":
            alert(`Ud a seleccionado: ${listaArticulos[0].nombre}, ${listaArticulos[0].marca}, ${listaArticulos[0].modelo}, ${listaArticulos[0].atributos}, Precio: $${listaArticulos[0].valor}. `)
            carrito.push(art1) 
            deseaSeguirComprando() 
        break;
        case "2":
            alert(`Ud a seleccionado: ${listaArticulos[1].nombre}, ${listaArticulos[1].marca}, ${listaArticulos[1].modelo}, ${listaArticulos[1].atributos}, Precio: $${listaArticulos[1].valor}. `)
            carrito.push(art2) 
            deseaSeguirComprando() 
        break;
        case "3":
            alert(`Ud a seleccionado: ${listaArticulos[2].nombre}, ${listaArticulos[2].marca}, ${listaArticulos[2].modelo}, ${listaArticulos[2].atributos}, Precio: $${listaArticulos[2].valor}. `)
            carrito.push(art3) 
            deseaSeguirComprando() 
        break;
        case "4":
            alert(`Ud a seleccionado: ${listaArticulos[3].nombre}, ${listaArticulos[3].marca}, ${listaArticulos[3].modelo}, ${listaArticulos[3].atributos}, Precio: $${listaArticulos[3].valor}. `)
            carrito.push(art4) 
            deseaSeguirComprando() 
        break;
        case "5":
            alert(`Ud a seleccionado: ${listaArticulos[4].nombre}, ${listaArticulos[4].marca}, ${listaArticulos[4].modelo}, ${listaArticulos[4].atributos}, Precio: $${listaArticulos[4].valor}. `)
            carrito.push(art5) 
            deseaSeguirComprando() 
        break;
        case "6":
            alert(`Ud a seleccionado: ${listaArticulos[5].nombre}, ${listaArticulos[5].marca}, ${listaArticulos[5].modelo}, ${listaArticulos[5].atributos}, Precio: $${listaArticulos[5].valor}. `)
            carrito.push(art6) 
            deseaSeguirComprando()  
        break;
        case "7":
            alert(`Ud a seleccionado: ${listaArticulos[6].nombre}, ${listaArticulos[6].marca}, ${listaArticulos[6].modelo}, ${listaArticulos[6].atributos}, Precio: $${listaArticulos[6].valor}. `)
            carrito.push(art7) 
            deseaSeguirComprando() 
        break;
        case "8":
            alert(`Ud a seleccionado: ${listaArticulos[7].nombre}, ${listaArticulos[7].marca}, ${listaArticulos[7].modelo}, ${listaArticulos[7].atributos}, Precio: $${listaArticulos[7].valor}. `)
            carrito.push(art8) 
            deseaSeguirComprando() 
        break;
        case "9":
            alert(`Ud a seleccionado: ${listaArticulos[8].nombre}, ${listaArticulos[8].marca}, ${listaArticulos[8].modelo}, ${listaArticulos[8].atributos}, Precio: $${listaArticulos[8].valor}. `)
            carrito.push(art9) 
            deseaSeguirComprando()  
        break;
        default:
            invalido()
            compra()
            break;    

    }
    
} 



function deseaSeguirComprando (){
    deseo = prompt(`Desea seguir comprando? (Esriba 1-SI / 2-NO)`)
    switch(deseo){
        case "1":
            compra()
            break;
        case "2":
            
            break;
                }
} */

// -- MAIN CODE

/* alert ('Bienvenidos a DinaSound. \n Tu tienda on line para poder comprar todo lo relacionado con el mundo del audio.')

let nombre = prompt('Ingrese su nombre')

bienvenidos()
compra()

const sumaValorCarrito = (carrito
.reduce((counter, item) => counter + item.valor, 0)).toFixed(2);
console.log(sumaValorCarrito)
alert('El valor total de su compra es de $' + sumaValorCarrito)
pago() */

/* function pago(){

let formaDePago = imput('Elija por favor el numero de cuotas: \n 1: -3 cuotas (10% de interes) \n 2: -6 cuotas (20% de interes) \n 3: -12 cuotas (30% de interes) ')    

if (formaDePago == 1) {

    document.write(`
    Muchas gracias por habernos elegido ${nombre}. <br>
    Usted pagara 3 cuotas de ${((sumaValorCarrito / 3) * 1.10).toFixed(2)}.<br>
    El monto total sera de $${(((sumaValorCarrito / 3) * 1.10) *3).toFixed(2)}.
    `)
}else if (formaDePago == 2){
    
    document.write(`
    Muchas gracias por habernos elegido ${nombre}. <br>
    Usted pagara 3 cuotas de ${((sumaValorCarrito / 6) * 1.20).toFixed(2)}.<br>
    El monto total sera de $${(((sumaValorCarrito / 6) * 1.20) *6).toFixed(2)}.
    `)

}else if (formaDePago == 3){

    document.write(`
    Muchas gracias por habernos elegido ${nombre}. <br>
    Usted pagara 3 cuotas de ${((sumaValorCarrito / 12) * 1.30).toFixed(2)}.<br>
    El monto total sera de $${(((sumaValorCarrito / 12) * 1.30) *12).toFixed(2)}.
    `)
    
    
}else if(formaDePago != 1 || 2 || 3) 
{
    alert('La forma de pago ingresada no es valida, por favor vuelva a intentarlo.')
    pago()
} 

} */









