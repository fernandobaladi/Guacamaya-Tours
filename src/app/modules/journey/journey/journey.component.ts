import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  locator = '';
  correctLocator=false;
  alphabeticArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }


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
  }


  //este es el array de firebase con todos los localizadores que existen
  //public array = ["AB1234", "CD4321", "HI6789"];  
  public array = ["A"];  
  

  nextPage(){
    
    for (var i = 0; i < this.array.length; i++) {
      if (this.locator == this.array[i]) {
        this.correctLocator=true;
        this.mostrarLasEstrellas();
      }
    }

    if (this.correctLocator == false) {
      alert('Localizador no encontrado, por favor ingresa un localizaodr válido');
      this.locator = "";
    }
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
