let ventaCoins = prompt("Ingrese Cantidad a comprar")
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
alert("Gracias por su compra")
  

  /*let myLvl = parseInt(prompt("Your Level"));
let minMax = 1.5
let sharedMin = (myLvl,minMax) => {
  return myLvl / minMax
}

let sharedMax = (myLvl,minMax) => {
  return myLvl * minMax
}
console.log(sharedMin(myLvl,minMax))
console.log(sharedMax(myLvl,minMax))

let result1 = parseInt(sharedMin(myLvl,minMax))
let result2 = parseInt(sharedMax(myLvl,minMax))

alert(`You share experience with Min ${result1} and Max ${result2}`)*/


