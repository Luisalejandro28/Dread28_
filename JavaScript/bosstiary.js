const contenedorBosses = document.getElementById("contenedor-bosses")

bosses.forEach((boss) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = ` 
        <img src= ${boss.img} alt = "img">
        <h5>${boss.nombre}</h5>
        <p><b>Tipo:</b> ${boss.tipo}</p>
        <p><b>Cantidad:</b> ${boss.cantidad}</p>
        <p><b>Localizacion:</b> ${boss.localizacion}</p>
    `
    contenedorBosses.appendChild(div)
})


