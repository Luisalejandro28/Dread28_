let ventaCoins = parseInt(prompt("Ingrese Cantidad a comprar"))
let tibiaCoin = 25
let precio = 0.9
let precio1 = 0.85 
let percio2 = 1
let totalPagar = (ventaCoins * precio) / tibiaCoin
let totalPagar2 =(ventaCoins * percio2) / tibiaCoin
let totalPagar1 = (ventaCoins * precio1) / tibiaCoin
if (ventaCoins = 250) {
    alert(`Total a pagar ${totalPagar} $`)
} else if (ventaCoins > 250){
    alert(`Total a pagar es de ${totalPagar} $`)
  } else if (ventaCoins > 1500){
    alert(`Total a pagar ${totalPagar1}`)
  } else if (ventaCoins < 250){
    alert(`Total a pagar ${totalPagar2}$`)
  }
  let nombreApellido = prompt("Ingrese su nombre y apellido")
  if (nombreApellido) {
    alert(`Nombre y Apellido: ${nombreApellido}`) 
  }
  let nombrePersonaje = prompt("Ingrese el nombre de su personaje")
  if(nombrePersonaje){
    alert(`Tu personaje es: ${nombrePersonaje}`)
  }
  let metodoPago = prompt("Binance o Bancaria").toLowerCase()
  if(metodoPago === "binance"){
    alert(`Binance Pay : 265464`);
  }else {
    alert("Pagar a Alias: luis.alejandro.dread");
  }
alert(`Gracias por su compra Sr/Sra. ${nombreApellido}`)







