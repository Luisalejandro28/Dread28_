const bosstiary = [
    { tipo: "Bane" , nombre: "Jailer", cantidad: "300 Kill's", localizacion: "Falcon Bastion"},
    { tipo: "Archfoe", nombre: "Anomaly", cantidad: "60 Kill's", localizacion: "The Void (Ankrahmun, Svargrond, Zao)"},
    { tipo: "Nenesis", nombre: "Alptramun", cantidad: "5 Kill's", localizacion: "Dream Scar"},
    { tipo: "Bane", nombre: "Black Knight", cantidad: "300 Kill's", localizacion: "Black Knight Villa"},
  ];
  
    let nombre = prompt("Ingrese el Nombre del Boss");
    let encontrado = bosstiary.find(boss => boss.nombre === nombre);
    
     if(encontrado){
       let mensaje = `
        Nombre: ${encontrado.nombre}
        Tipo: ${encontrado.tipo}
        Cantidad: ${encontrado.cantidad}
        Localizacion: ${encontrado.localizacion}
       `;
    
       alert(mensaje);
     }else{
       alert("Boss no encontrado");
     }