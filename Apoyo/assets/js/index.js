import propiedades_ventas from './ventas.js'
// console.log('propiedades_ventas --->', propiedades_ventas);

import propiedades_alquiler from './alquiler.js'
// console.log('propiedades_alquiler --->', propiedades_alquiler);


const venta3 = propiedades_ventas.slice(1,4)
console.log('venta3 --->', venta3);

const alquiler3 = propiedades_alquiler.slice(1,4)
console.log('alquiler3 --->', alquiler3);



const ventasIndex = document.getElementById('propiedades-ventas-index')

let AlquilerIndex = document.getElementById('propiedades-alquiler-index')



const mascotas = (propiedades) => {
    if (propiedades.pets) {
      return 'Viva con su mascota'
    } else {
      return 'Váyase a otra parte con su mascota!'
    }
}

const fumar = (propiedades) => {
    if (propiedades.smoke) {
      return 'Puede echar humo'
    } else {
      return 'No fume ya?'
    }
}




for (let propiedades of venta3){
    const plantilla = 
    `
    <div class = "card">
        <img src='${propiedades.src}'></img>
        <div class='card-body'>
            <h5 class = 'card-title'>${propiedades.name}</h5>
            <h6>${propiedades.description}</h6>
        <div class = 'location'>
            <p>${propiedades.addrees}</p>
        </div>
            <p>Habitaciones: ${propiedades.rooms}</p>
            <p>Baños: ${propiedades.bathrooms}</p>
            <h5>Precio: ${propiedades.price}</h5>
        </div>
        <div class = 'card-footer'>
            <div class = 'restriction'>
                <i class="${propiedades.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                <p class = "${propiedades.smoke ? 'ps-3 text-success' : 'ps-3 text-danger'}">${fumar(propiedades)}</p>
            </div>
            <div class = 'restriction'>
                <i class="${propiedades.pets ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                <p class = "${propiedades.pets ? 'ps-3 text-success' : 'ps-3 text-danger'}">${mascotas(propiedades)}</p>
            </div>
        </div>
        
    </div>
    
    `
    ventasIndex.innerHTML += plantilla
}






for (let propiedades of alquiler3){
    const plantilla = 
    `
    <div class = "card">
        <img src='${propiedades.src}'></img>
        <div class='card-body'>
            <h5 class = 'card-title'>${propiedades.name}</h5>
            <h6>${propiedades.description}</h6>
        <div class = 'location'>
            <p>${propiedades.location}</p>
        </div>
            <p>Habitaciones: ${propiedades.rooms}</p>
            <p>Baños: ${propiedades.bathrooms}</p>
            <h5>Precio: ${propiedades.price}</h5>
        </div>
        <div class = 'card-footer'>
            <div class = 'restriction'>
                <i class="${propiedades.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                <p class = "${propiedades.smoke ? 'ps-3 text-success' : 'ps-3 text-danger'}">${fumar(propiedades)}</p>
            </div>
            <div class = 'restriction'>
                <i class="${propiedades.pets ? 'fas fa-smoking' : 'fas fa-smoking-ban'}"></i>
                <p class = "${propiedades.pets ? 'ps-3 text-success' : 'ps-3 text-danger'}">${mascotas(propiedades)}</p>
            </div>
        </div>
        
    </div>
    
    `
    AlquilerIndex.innerHTML += plantilla
}


