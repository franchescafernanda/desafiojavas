
const propiedades_alquiler = [
    {
        name: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        bathrooms: 2,
        price: 2000,
        smoke: false,
        pets: true
    },
    {
        name: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        location: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        bathrooms: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        name: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        bathrooms: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        name: 'Cabaña Santa Linda',
        src: 'https://www.cabanaslosquenes.cl/wp-content/gallery/santa-linda/Imagen-de-WhatsApp-2023-03-20-a-las-12.28.21.jpg', /*preguntar como hacer esto*/ /*era el url de las img*/
        description: 'Cabaña en localidad rural',
        location: 'Camino a Los Quenes Km 36 Los Queñes, Maule',
        rooms: 2,
        bathrooms: 1,
        price: 4000,
        smoke: true,
        pets: true,
    },
    {
        name: 'Cabaña Volcán descabezado',
        src: 'https://www.cabanaslosquenes.cl/wp-content/gallery/volcan-descabezado/WhatsApp-Image-2023-03-20-at-11.30.38.jpeg', /*preguntar como hacer esto*/
        description: 'Cabaña construida totalmente de madera natural, con hermosa vista al Volcán.',
        location: 'Camino a Los Quenes Km 36 Los Queñes, Maule',
        rooms: 2,
        bathrooms: 1,
        price: 4500,
        smoke: true,
        pets: true,
    },
    {
        name: 'Cabaña Cerro Cayetano',
        src: 'https://www.cabanaslosquenes.cl/wp-content/gallery/home_1/2.jpg', /*preguntar como hacer esto*/
        description: 'Esta hermosa cabaña consta de un ambiente, con piscina y áreas verdes.',
        location: '123 Main Street, Anytown, CA 91234',
        rooms: 1,
        bathrooms: 1,
        price: 4200,
        smoke: false,
        pets: false,
    },
    {
        name: 'Cabaña Volcán Panchon',
        src: 'https://www.cabanaslosquenes.cl/wp-content/gallery/volcan-planchon/WhatsApp-Image-2023-03-20-at-11.29.20.jpeg', /*preguntar como hacer esto*/
        description: 'Hermosa cabaña consta de: Estufa a pellet, Directv, Parrilla, Cocina completa, Sabanas',
        location: 'Chillán, Campos de hielo',
        rooms: 2,
        bathrooms: 1,
        price: 3000,
        smoke: true,
        pets: true,
    }
]

export default propiedades_alquiler

const totalAlquiler = document.getElementById('propiedades-alquiler')

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

for (let propiedades of propiedades_alquiler){
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
    totalAlquiler.innerHTML += plantilla
}




