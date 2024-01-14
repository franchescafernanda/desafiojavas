
const propiedades_ventas = [
    {
        name: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        addrees: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        bathrooms: 4,
        price: 5000,
        smoke: false,
        pets: false
    },

    {
        name: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        addrees: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        bathrooms: 1,
        price: 1200,
        smoke: true,
        pets: true
    },

    {
        name: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        description: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        addrees: '567 Skyline Avenue, Skyview City, CA 56789',
        rooms: 3,
        bathrooms: 3,
        price: 4500,
        smoke: false,
        pets: true
    },

    {
        name: 'Espectacular Departamento Full Electric en piso 10',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/arriendo-mensual/departamento/la-florida/2/165ee0bac85d41218bb731b5ca8153f9.jpeg', /*preguntar como hacer esto*/
        description: 'Cuenta con sistema de alarma antirrobo, dormitorio principal y living comedor con salida a terraza y ventanas termo-panel',
        addrees: 'La Florida, Gerónimo de Alderete 1800',
        rooms: 3,
        bathrooms: 2,
        price: 6000,
        smoke: false,
        pets: false,
    },

    {
        name: 'Venta de casa',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/san-felipe/2/afb453ef3e1b4a7b950d479dc0de4673.jpeg', /*preguntar como hacer esto*/
        description: 'Hermosa casa amplía con áreas verdes, localidad de San Felipe.Ubicación céntrica, mercado cerca y con facilidad de movilización',
        addrees: 'Villa La Doñita de San Felipe',
        rooms: 3,
        bathrooms: 2,
        price: 2200,
        smoke: true,
        pets: true,
    },

    {
        name: 'Casa de tragos dormitorios y dos baños. Ubicada en condominio semi privado',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/san-felipe/2/7153a14d7ea04083b9a36cc8cc6b2941.jpeg', /*preguntar como hacer esto*/
        description: 'La casa cuenta con Living y comedor con vigas a la vista. Cocina americana amoblada completa con isla',
        addrees: 'San Felipe, San felipe',
        rooms: 3,
        bathrooms: 2,
        price: 4500,
        smoke: true,
        pets: true,
    },

    {
        name: 'Propiedad Full equipada, Jardin del este',
        src: 'https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/chillan/2/5ccf1ebe4e7149febc6a31b03ad07a09.jpeg', /*preguntar como hacer esto*/
        description: 'hermosa casa nueva en Condominio Ildefonso, sector Jardín del Este. La propiedad cuenta con hall de acceso en doble altura (5 metros), living, comedor y cocina separada, full amoblada',
        addrees: 'Chillán, Jardin del este',
        rooms: 4,
        bathrooms: 4,
        price: 5500,
        smoke: true,
        pets: true,
    }
]

export default propiedades_ventas

const totalVentas = document.getElementById('propiedades-ventas')

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

for (let propiedades of propiedades_ventas){
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
    totalVentas.innerHTML += plantilla
}

