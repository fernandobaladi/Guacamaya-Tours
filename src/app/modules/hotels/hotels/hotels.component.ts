import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../../../mock-hotels';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor() { }

  filter = 'Ejemplo';

  hotels = HOTELS;
  hotelsAux = this.hotels;
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
  
  funcionBoton(id: string) {
    const x = document.getElementById('menuGeneral' + id);
    const y = document.getElementById('menuComodidades' + id);
    const z = document.getElementById('menuHabitaciones' + id);
    const w = document.getElementById('menuPromociones' + id);

    if (x.style.display === 'block' || y.style.display === 'block' || z.style.display === 'block' || w.style.display === 'block') {

        if (y.style.display === 'block') {
          y.style.display = 'none';
        }
        if (z.style.display === 'block') {
          z.style.display = 'none';
        }
        if (w.style.display === 'block') {
          w.style.display = 'none';
        }
        if (x.style.display === 'block') {
          x.style.display = 'none';
        }
    } else {
      x.style.display = 'block';
    }
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


  clickGeneral(id: string) {
    this.funcionAyuda('menuGeneral'  + id, 'menuComodidades' + id, 'menuHabitaciones' + id, 'menuPromociones' + id);
  }

  clickComodidades(id: string) {
    this.funcionAyuda('menuComodidades' + id, 'menuGeneral' + id, 'menuHabitaciones' + id, 'menuPromociones' + id);
  }

  clickHabitaciones(id: string) {
    this.funcionAyuda('menuHabitaciones' + id, 'menuGeneral' + id, 'menuComodidades' + id, 'menuPromociones' + id);
  }

  clickPromociones(id: string) {
    this.funcionAyuda('menuPromociones' + id, 'menuGeneral' + id, 'menuComodidades' + id, 'menuHabitaciones' + id);
  }

}
