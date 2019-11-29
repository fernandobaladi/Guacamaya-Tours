import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { room } from 'src/app/models/room';
import { OrderService } from 'src/app/services/order/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import { HOTELS } from '../../../mock-hotels';

export class facility{
  name: string;
  image: string;
}

export class hotelService{
  name: string;
  image: string;
}

export class localRoom extends room{
  images: string[];
  facilities?: facility[];
  selected: boolean;
}
export class localHotel extends Hotel{
  id: string;
  images: string[];
  rooms: localRoom[];
  map?: string;
  selected: boolean;
  hotelServices?: hotelService[];
}

@Component({
  selector: 'app-vacation-builder-step3',
  templateUrl: './vacation-builder-step3.component.html',
  styleUrls: ['./vacation-builder-step3.component.scss']
})
export class VacationBuilderStep3Component implements OnInit {

  hotels: localHotel[] = [

    {
      name: 'SunSol', id: '1', stars: 4, lat: 11.11323713130922,
      lon: -63.84605099648965,
      adress: 'Av. Costanera, sector el Tirano, Isla de Margarita Carretera Costanera, 6301, Nueva Esparta',
      state: 'Nueva Esparta',
      city: 'Margarita', images: [
        './assets/img/hotels/sunsol-1.png', './assets/img/hotels/sunsol-2.png', './assets/img/hotels/sunsol-3.png'
      ], fullday: true, fulldayPrice: 100, rooms: [
        {
          name: 'Premium doble queen', capacity: 2, view: 'none', 
          images: [
            './assets/img/hotels/premium-doble-queen-1.jpg',
            './assets/img/hotels/premium-doble-queen-2.jpg'
          ], price: 220, selected: false
        },
        {
          name: 'Habitación Deluxe', capacity: 2, view: 'none', images: [
            './assets/img/hotels/habitacion-deluxe-1.jpg', './assets/img/hotels/habitacion-deluxe-2.jpg', 
            '../../../../assets/img/hotels/sunsol-2.png', 
          ], price: 300, selected: false
        },
      ], hotelServices: [
        {
          name: 'piscina',  image: '../../../../assets/img/swimming-silhouette.png',
        }, {
          name: 'piscina',  image: '../../../../assets/img/swimming-silhouette.png',
        }], map: './assets/img/sunsol-map.png',
      selected: false
    },
    {
      name: 'Eurobuilding', id: '2', stars: 5, lat: 10.482434180733861,
      lon: -66.84976672535872, adress: 'Calle La Guairita, Caracas 1061, Miranda', state: 'Miranda',
      city: 'Caracas', images: [
        './assets/img/hotels/Eurobuilding-Hotel-1.jpg', './assets/img/hotels/Eurobuilding-Hotel-2.jpg',
        './assets/img/hotels/Eurobuilding-Hotel-3.jpg'
      ], fullday: true, fulldayPrice: 130, rooms: [
        {
          name: 'Habitación Deluxe', capacity: 2, view: 'none', images: [
            './assets/img/hotels/habitacion-deluxe-1.jpg', './assets/img/hotels/habitacion-deluxe-2.jpg',
            './assets/img/hotels/habitacion-business-3.jpg', '../../../../assets/img/hotels/sunsol-1.png'
          ], price: 300, selected: false
        },
        {
          name: 'Habitación Business', capacity: 2, view: 'none', images: [
            './assets/img/hotels/habitacion-business-1.jpg', './assets/img/hotels/habitacion-business-2.jpg'
          ], price: 330, selected: false
        }], map: './assets/img/eurobuilding-map.png',
      selected: false
    },
    {
      name: 'Lidotel Valencia', id: '3', stars: 4, lat: 10.239714535199255,
      lon: -67.99901357029846, adress: 'Avenida Norte-Sur 4, Naguanagua 2035, G, Venezuela', state: 'Carabobo',
      city: 'Valencia', images: [
        './assets/img/hotels/lidotel-valencia-1.jpg', './assets/img/hotels/lidotel-valencia-2.jpg',
        './assets/img/hotels/lidotel-valencia-3.jpg', 
      ], fullday: true, fulldayPrice: 90, rooms: [
        {
          name: 'Suite Junior', capacity: 2, view: 'none', images: [
            './assets/img/hotels/suite-junior-1.jpg', './assets/img/hotels/suite-junior-2.jpg'
          ], price: 180, selected: false
        },
        {
          name: 'Habitación Doble Deluxe', capacity: 4, view: 'none', images: [
            './assets/img/hotels/habitacion-doble-deluxe-1.jpg', './assets/img/hotels/habitacion-doble-deluxe-2.jpg',
            './assets/img/hotels/habitacion-doble-deluxe-3.jpg'
          ], price: 330, selected: false
        }], map: './assets/img/lidotel-map.png',
      selected: false
    }];

  constructor(private orderSV: OrderService, private route: ActivatedRoute, private router:Router ) { }

  ngOnInit() {
  }


  //boton ir atras
  goBack() {
    this.displayListaHoteles = true;
  }


  //RESERVAR HOTEL
  reservarHotel() {

  }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = '';

  slides = [
    { image: '../../../../assets/img/hotels/sunsol-1.png' },
    { image: '../../../../assets/img/hotels/sunsol-2.png' },
    { image: '../../../../assets/img/hotels/sunsol-3.png' },
    { image: '../../../../assets/img/hotels/sunsol-3.png' },
    { image: '../../../../assets/img/hotels/sunsol-1.png' },
    { image: '../../../../assets/img/hotels/sunsol-2.png' },
  ];


  slidesHabitaciones = [
    { image: '../../../../assets/img/hotels/sunsol-1.png' },
    { image: '../../../../assets/img/hotels/sunsol-2.png' },
    { image: '../../../../assets/img/hotels/sunsol-3.png' },
    { image: '../../../../assets/img/hotels/sunsol-3.png' },
    { image: '../../../../assets/img/hotels/sunsol-1.png' },
    { image: '../../../../assets/img/hotels/sunsol-2.png' },
  ];

  onSlideRangeChange(indexes: number[]): void {
    //this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }



  //HOTELES
  public displayListaHoteles = true;
  public idHotel = "";

  public ocultar = false;

  public general: boolean = true;
  public comodidades: boolean = false;
  public habitaciones: boolean = false;
  public promociones: boolean = false;

  funcionHabilitarMenus(par1: boolean, par2: boolean, par3: boolean) {
    this.general = par1;
    this.comodidades = par2;
    this.habitaciones = par3;
  }


  //modificacion de todas la funcionalidades no estaticas de la pagina

  steps = {
    step_one: true,
    step_two: false,
  }

  modalRoomStatus = new BehaviorSubject(false);

  hotelSelected: localHotel;
  roomSelected: localRoom;


  goToStep(step, localHotel?) {
    this.stepsToFalse();
    switch (step) {
      case 1:
        this.steps.step_one = true;
        break;
      case 2:
        this.hotelSelectedToFalse();
        this.steps.step_two = true;
        localHotel.selected = true;
        this.hotelSelected = this.findHotelSelected();
        break;
    
      default:
        break;
    }
  }

  stepsToFalse() {
    this.steps.step_one = false;
    this.steps.step_two = false;

  }

  hotelSelectedToFalse() {
    this.hotels.map(e => e.selected = false)
  }

  findHotelSelected() {
    return this.hotels.find(e => { return e.selected });
  }

  roomSelectedToFalse() {
    this.hotelSelected.rooms.map(e => e.selected = false)
  }

  openModalRooms(localRoom){
    // this.modalRoomStatus.next(!this.modalRoomStatus.value);
    this.verModalHabitaciones = true;
    this.roomSelectedToFalse();
    localRoom.selected = true;
    this.roomSelected = this.findRoomSelected()
    console.log(this.roomSelected);
    
  }

  closeModalRooms(){
    this.verModal = false;
    // this.modalRoomStatus.next(!this.modalRoomStatus.value);
  }

  findRoomSelected() {
    return this.hotelSelected.rooms.find(e => { return e.selected });
    
  }

  saveInfo() {
    const auxBooking= {
      hotel: this.findHotelSelected(),
      room: this.findRoomSelected()
    }
    this.orderSV.updateBooking(auxBooking);
    this.router.navigate(["vacationBuilder/step4"]);
    this.modalRoomStatus.next(!this.modalRoomStatus.value);
  }

  //fin de la modificacion 


  funcionInfoBoton() {
    this.displayListaHoteles = false;
  }

  clickGeneral() {
    this.funcionHabilitarMenus(true, false, false);
  }

  clickComodidades() {
    this.funcionHabilitarMenus(false, true, false);
  }

  clickHabitaciones() {
    this.funcionHabilitarMenus(false, false, true);
  }

  filter = 'Ejemplo';

  hotelsAux = this.hotels;

  comodidadesMenu = [
    { name: 'SunSol', id: '1', stars: 4 },
    { name: 'SunSol', id: '1', stars: 4 },
    { name: 'SunSol', id: '1', stars: 4 },
    { name: 'SunSol', id: '1', stars: 4 }
  ]

  functionDefault() {

    console.log('No hay match');
    this.hotels = this.hotelsAux;
  }
  nameFunction() {

    // tslint:disable-next-line: only-arrow-functions
    this.hotels.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  stateFunction() {

    // tslint:disable-next-line: only-arrow-functions
    this.hotels.sort(function (a, b) {
      if (a.state > b.state) {
        return 1;
      }
      if (a.state < b.state) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  cityFunction() {

    // tslint:disable-next-line: only-arrow-functions
    this.hotels.sort(function (a, b) {
      if (a.city > b.city) {
        return 1;
      }
      if (a.city < b.city) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }


  public shouldDisplay = false;


  public mostrarMenu = false;

  funcionBoton(id: string) {

    this.mostrarMenu = !this.mostrarMenu
  }


  funcionAyuda(visible: string, ocultar1: string, ocultar2: string, ocultar3: string) {
    if (document.getElementById(ocultar1).style.display === 'block') {
      document.getElementById(ocultar1).style.display = 'none';
    }

    if (document.getElementById(ocultar2).style.display === 'block') {
      document.getElementById(ocultar2).style.display = 'none';
    }

    if (document.getElementById(ocultar3).style.display === 'block') {
      document.getElementById(ocultar3).style.display = 'none';
    }

    document.getElementById(visible).style.display = 'block';
  }


  //ESTRELLAS
  public blanca1 = true;
  public blanca2 = true;
  public blanca3 = true;
  public blanca4 = true;
  public blanca5 = true;

  public amarilla1 = false;
  public amarilla2 = false;
  public amarilla3 = false;
  public amarilla4 = false;
  public amarilla5 = false;

  //blancas
  estrellaBlanca1() {
    this.blanca1 = false;
    this.blanca2 = false;
    this.blanca3 = false;
    this.blanca4 = false;
    this.blanca5 = false;
    this.amarilla1 = true;
  }

  estrellaBlanca2() {
    this.blanca1 = false;
    this.blanca2 = false;
    this.blanca3 = false;
    this.blanca4 = false;
    this.blanca5 = false;
    this.amarilla1 = true;
    this.amarilla2 = true;
  }

  estrellaBlanca3() {
    this.blanca1 = false;
    this.blanca2 = false;
    this.blanca3 = false;
    this.blanca4 = false;
    this.blanca5 = false;
    this.amarilla1 = true;
    this.amarilla2 = true;
    this.amarilla3 = true;
  }

  estrellaBlanca4() {
    this.blanca1 = false;
    this.blanca2 = false;
    this.blanca3 = false;
    this.blanca4 = false;
    this.blanca5 = false;
    this.amarilla1 = true;
    this.amarilla2 = true;
    this.amarilla3 = true;
    this.amarilla4 = true;
  }

  estrellaBlanca5() {
    this.blanca1 = false;
    this.blanca2 = false;
    this.blanca3 = false;
    this.blanca4 = false;
    this.blanca5 = false;
    this.amarilla1 = true;
    this.amarilla2 = true;
    this.amarilla3 = true;
    this.amarilla4 = true;
    this.amarilla5 = true;
  }

  funcionAuxiliarEstrellas() {
    this.blanca1 = true;
    this.blanca2 = true;
    this.blanca3 = true;
    this.blanca4 = true;
    this.blanca5 = true;
    this.amarilla1 = false;
    this.amarilla2 = false;
    this.amarilla3 = false;
    this.amarilla4 = false;
    this.amarilla5 = false;
  }

  //amarillas
  estrellaAmarilla1() {
    this.funcionAuxiliarEstrellas();
  }

  estrellaAmarilla2() {
    this.funcionAuxiliarEstrellas();
  }

  estrellaAmarilla3() {
    this.funcionAuxiliarEstrellas();
  }

  estrellaAmarilla4() {
    this.funcionAuxiliarEstrellas();
  }

  estrellaAmarilla5() {
    this.funcionAuxiliarEstrellas();
  }


  //estrellas lista de hoteles
  public estrella_amarilla_1 = true;
  public estrella_amarilla_2 = true;
  public estrella_amarilla_3 = true;
  public estrella_amarilla_4 = true;
  public estrella_amarilla_5 = true;

  public estrellasDeHotel = 5;

  // switch (estrellasDeHotel) {
  //   case 1:
  //     this.estrella_amarilla_1 = true;
  //     break;
  //   case 2:
  //     this.estrella_amarilla_1 = true;
  //     this.estrella_amarilla_2 = true;
  //     break;
  //   case 3:
  //     this.estrella_amarilla_1 = true;
  //     this.estrella_amarilla_2 = true;
  //     this.estrella_amarilla_3 = true;
  //       break;
  //   case 4:
  //     this.estrella_amarilla_1 = true;
  //     this.estrella_amarilla_2 = true;
  //     this.estrella_amarilla_3 = true;
  //     this.estrella_amarilla_4 = true;
  //       break;
  //   case 5:
  //     this.estrella_amarilla_1 = true;
  //     this.estrella_amarilla_2 = true;
  //     this.estrella_amarilla_3 = true;
  //     this.estrella_amarilla_4 = true;
  //     this.estrella_amarilla_5 = true;
  //       break;
  //   default:
  //       break;
  // }




  //MODAL VIEW
  public verModal = false;

  mostrarModal() {
    this.verModal = true;
  }
  modalClose() {
    this.verModal = false;
  }

  //Modal view - habitaciones - lujo
  public verModalHabitaciones = false;
  mostrarModalHabitaciones() {
    this.verModalHabitaciones = true;
  }
  modalCloseHabitaciones() {
    this.verModalHabitaciones = false;
  }

  // //Modal view - habitaciones - doble
  // public verModalDoble = false;
  // mostrarModalDoble() {
  //   this.verModalDoble = true;
  // }
  // modalCloseDoble() {
  //   this.verModalDoble = false;
  // }

  // //Modal view - habitaciones - Matrimonial
  // public verModalMatrimonial = false;
  // mostrarModalMatrimonial() {
  //   this.verModalMatrimonial = true;
  // }
  // modalCloseMatrimonial() {
  //   this.verModalMatrimonial = false;
  // }

}
