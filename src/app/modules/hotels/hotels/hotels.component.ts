import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../../../mock-hotels';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})

export class HotelsComponent implements OnInit {

  constructor() { }

  //ITINERARIO
  


  //HOTELES
  filter = 'Ejemplo';

  hotels = HOTELS;
  hotelsAux = this.hotels;

  comodidadesMenu = [
    {name: 'SunSol', id: '1', stars: 4},
    {name: 'SunSol', id: '1', stars: 4},
    {name: 'SunSol', id: '1', stars: 4},
    {name: 'SunSol', id: '1', stars: 4}
  ]

  ngOnInit() {
  }
  functionDefault() {

      console.log('No hay match');
      this.hotels = this.hotelsAux;
  }
  nameFunction() {

    // tslint:disable-next-line: only-arrow-functions
    this.hotels.sort( function(a, b) {
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
    this.hotels.sort( function(a, b) {
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
    this.hotels.sort( function(a, b) {
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

  //   const x = document.getElementById('menuGeneral' + id);
  //   const y = document.getElementById('menuComodidades' + id);
  //   const z = document.getElementById('menuHabitaciones' + id);
  //   const w = document.getElementById('menuPromociones' + id);

  //   if (x.style.display === 'block' || y.style.display === 'block' || z.style.display === 'block' || w.style.display === 'block') {

  //       if (y.style.display === 'block') {
  //         y.style.display = 'none';
  //       }
  //       if (z.style.display === 'block') {
  //         z.style.display = 'none';
  //       }
  //       if (w.style.display === 'block') {
  //         w.style.display = 'none';
  //       }
  //       if (x.style.display === 'block') {
  //         x.style.display = 'none';
  //       }
  //   } else {
  //     x.style.display = 'block';
  //   }
  }


  funcionAyuda(visible: string, ocultar1: string, ocultar2: string, ocultar3: string) {
      if (document.getElementById(ocultar1).style.display === 'block' ) {
        document.getElementById(ocultar1).style.display = 'none';
      }

      if (document.getElementById(ocultar2).style.display === 'block' ) {
        document.getElementById(ocultar2).style.display = 'none';
      }

      if (document.getElementById(ocultar3).style.display === 'block' ) {
        document.getElementById(ocultar3).style.display = 'none';
      }

      document.getElementById(visible).style.display = 'block';
  }


  public general: boolean = false;
  public comodidades: boolean = false;
  public habitaciones: boolean = false;
  public promociones: boolean = false;


  clickGeneral(id: string) {
    // this.general = true;
    // this.comodidades = false;
    // this.habitaciones = false;
    // this.promociones = false;
    this.funcionAyuda('menuGeneral'  + id, 'menuComodidades' + id, 'menuHabitaciones' + id, 'menuPromociones' + id);
  }

  clickComodidades(id: string) {
    // this.general = false;
    // this.comodidades = true;
    // this.habitaciones = false;
    // this.promociones = false;
    this.funcionAyuda('menuComodidades' + id, 'menuGeneral' + id, 'menuHabitaciones' + id, 'menuPromociones' + id);
  }

  clickHabitaciones(id: string) {
    // this.general = false;
    // this.comodidades = false;
    // this.habitaciones = true;
    // this.promociones = false;
    this.funcionAyuda('menuHabitaciones' + id, 'menuGeneral' + id, 'menuComodidades' + id, 'menuPromociones' + id);
  }

  clickPromociones(id: string) {
    // this.general = false;
    // this.comodidades = false;
    // this.habitaciones = false;
    // this.promociones = true;
    this.funcionAyuda('menuPromociones' + id, 'menuGeneral' + id, 'menuComodidades' + id, 'menuHabitaciones' + id);
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
  public estrella_amarilla_4 = false;
  public estrella_amarilla_5 = false;

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
