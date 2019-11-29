import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  bookings = [];
  locator = '';
  correctLocator=false;
  alphabeticArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(private bookingsService: BookingsService) { }


  public screen: string;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    console.log(window.innerWidth);

    if (window.innerWidth <= 991 && window.innerWidth > 640) {
      this.screen = "medium";
    }
    else if (window.innerWidth <= 640) {
      this.screen = "small";
    }
    else {
      this.screen = "normal";
    }
  }


  ngOnInit() {
    this.bookingsService.getAllBookings().subscribe((bookingsSnapshot) => {
      this.bookings = [];
      bookingsSnapshot.forEach(( e: any ) => {
        this.bookings.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data(),
          realStatus: e.payload.doc.data().status
        });
      });
      console.log(this.bookings);
    });

  }

  nextPage() {
    for (var i = 0; i < this.bookings.length; i++) {
      if (this.locator === this.bookings[i].data.locator) {
        this.correctLocator = true;
      }
      console.log();
    }

    if (this.correctLocator === false) {
      alert('Localizador no encontrado, por favor ingresa un localizador válido');
      this.locator = '';
    }else{
      alert('Localizador  encontrado. CRACK');
      this.locator = '';
    }
  }


  generaNss(): string {
    let result = '';
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < 1; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }






  //array con los datos para firebase (array de ejemplo)
  arrayEjemplo = [
    {name: 'SunSol', id: '1', stars: 4, huespedes:["Manuel", "Alejandro", "Carla"]},
    {name: 'SunSol', id: '1', stars: 4, huespedes:["Manuel", "Alejandro", "Carla"]},
    {name: 'SunSol', id: '1', stars: 4, huespedes:["Manuel", "Alejandro", "Carla"]},
    {name: 'SunSol', id: '1', stars: 4, huespedes:["Manuel", "Alejandro", "Carla"]}
  ]


  //numero de estrellas
  public numeroEstrellas = 4;

  public estrella_amarilla_1 = false;
  public estrella_amarilla_2 = false;
  public estrella_amarilla_3 = false;
  public estrella_amarilla_4 = false;
  public estrella_amarilla_5 = false;


  mostrarLasEstrellas() {

    if (this.numeroEstrellas == 1) {
      this.estrella_amarilla_1 = true;
    }

    if (this.numeroEstrellas == 2) {
      this.estrella_amarilla_1 = true;
      this.estrella_amarilla_2 = true;
    }

    if (this.numeroEstrellas == 3) {
      this.estrella_amarilla_1 = true;
      this.estrella_amarilla_2 = true;
      this.estrella_amarilla_3 = true;
    }

    if (this.numeroEstrellas == 4) {
      this.estrella_amarilla_1 = true;
      this.estrella_amarilla_2= true;
      this.estrella_amarilla_3 = true;
      this.estrella_amarilla_4 = true;
    }

    if (this.numeroEstrellas == 5) {
      this.estrella_amarilla_1 = true;
      this.estrella_amarilla_2= true;
      this.estrella_amarilla_3 = true;
      this.estrella_amarilla_4 = true;
      this.estrella_amarilla_5 = true;
    }
  }

  





  validator() {
    if (this.locator.length > 6){
      alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
    } else {
      for (let i = 2; i < 6 ; i++  ) {
        if ((this.locator.charAt(i) >= '0') && (this.locator.charAt(i) <= '9')) {
        } else {
          alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
          return;
        }
      }
      let counter = 0;
      for (let k = 0; k < 2; k++) {
        for ( let j = 0; j < 26; j++ ) {
          if (this.locator.charAt(k) === this.alphabeticArray.charAt(j)) {
            counter++;
          }
          if ( (counter === 0) && ( j === 25 ) ) {
              alert('ERROR VUELVE A INGRESAR EL LOCALIZADOR');
              return;
          }
        }
      }
    }
  }
}
