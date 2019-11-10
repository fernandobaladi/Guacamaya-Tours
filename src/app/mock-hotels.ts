import { Hotel } from './models/hotel';

export const HOTELS: Hotel[] = [

    {name: 'SunSol', id: '1', stars: 4, latitude: 11.11323713130922, 
    longitude: -63.84605099648965, 
    direction: 'Av. Costanera, sector el Tirano, Isla de Margarita Carretera Costanera, 6301, Nueva Esparta', state: 'Nueva Esparta',
    city: 'Margarita', images: [
        './assets/img/hotels/sunsol-1.png', './assets/img/hotels/sunsol-2.png', './assets/img/hotels/sunsol-3.png'
    ], fulldayAvailable: true, fulldayPrice: 100, rooms: [
        {name: 'Premium doble queen', capacity: 2, view: 'none', images: [
            './assets/img/hotels/premium-doble-queen-1.jpg', './assets/img/hotels/premium-doble-queen-2.jpg'
        ], price: 220},
        {name: 'Premium king', capacity: 4, view: 'none', images: [
            './assets/img/hotels/premium-king-1.jpg', './assets/img/hotels/premium-king-2.jpg'
        ], price: 250}], map: './assets/img/sunsol-map.png',
         },
    {name: 'Eurobuilding', id: '2', stars: 5, latitude: 10.482434180733861, 
    longitude: -66.84976672535872, direction: 'Calle La Guairita, Caracas 1061, Miranda', state: 'Miranda',
    city: 'Caracas', images: [
        './assets/img/hotels/Eurobuilding-Hotel-1.jpg', './assets/img/hotels/Eurobuilding-Hotel-2.jpg',
        './assets/img/hotels/Eurobuilding-Hotel-3.jpg'
    ], fulldayAvailable: true, fulldayPrice: 130, rooms: [
        {name: 'Habitación Deluxe', capacity: 2, view: 'none', images: [
            './assets/img/hotels/habitacion-deluxe-1.jpg', './assets/img/hotels/habitacion-deluxe-2.jpg'
        ], price: 300},
        {name: 'Habitación Business', capacity: 2, view: 'none', images: [
            './assets/img/hotels/habitacion-business-1.jpg', './assets/img/hotels/habitacion-business-2.jpg',
            './assets/img/hotels/habitacion-business-3.jpg'
        ], price: 330}], map: './assets/img/eurobuilding-map.png',
         },
    {name: 'Lidotel Valencia', id: '3', stars: 4, latitude: 10.239714535199255, 
    longitude: -67.99901357029846, direction: 'Avenida Norte-Sur 4, Naguanagua 2035, G, Venezuela', state: 'Carabobo',
    city: 'Valencia', images: [
        './assets/img/hotels/lidotel-valencia-1.jpg', './assets/img/hotels/lidotel-valencia-2.jpg',
        './assets/img/hotels/lidotel-valencia-3.jpg'
    ], fulldayAvailable: true, fulldayPrice: 90, rooms: [
        {name: 'Suite Junior', capacity: 2, view: 'none', images: [
            './assets/img/hotels/suite-junior-1.jpg', './assets/img/hotels/suite-junior-2.jpg'
        ], price: 180},
        {name: 'Habitación Doble Deluxe', capacity: 4, view: 'none', images: [
            './assets/img/hotels/habitacion-doble-deluxe-1.jpg', './assets/img/hotels/habitacion-doble-deluxe-2.jpg',
            './assets/img/hotels/habitacion-doble-deluxe-3.jpg'
        ], price: 330}], map: './assets/img/lidotel-map.png',
}];

