
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

export default propiedades_ventas && propiedades_alquiler
